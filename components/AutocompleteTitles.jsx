import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";


function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function AutocompleteTitles(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  const onChangeHandle = async (value) => {    
    const url = `api/albums/${value}`;
    
    if(value.length >= 1) {
      axios.get(url)
      .then(resp => {      
         console.log('albums',resp)
         setOptions(resp.data);   
      })
      .catch(err => {
        console.log('Error', err)
      })          
    }
    else {
      setOptions([]);   
    }
  };

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  
  return (
    <Autocomplete
      id="async-autocomplete"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      
      getOptionSelected={(option, value) => 
        option === value
      }
      getOptionLabel={option => option.Title}
      renderOption={(props, option) => (        
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>           
          {option.Title} 
        </Box>
      )}
      options={options}
      loading={loading}      
      renderInput={params => (
        <TextField
          {...params}
          label="Select Page"
          placeholder="Start typing to search..."
          variant="standard"
          onChange={ev => {
            // dont fire API if the user delete or not entered anything
            if (ev.target.value !== "" || ev.target.value !== null) {
              onChangeHandle(ev.target.value);
            }
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        />
      )}
    />
  );
}