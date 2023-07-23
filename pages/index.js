import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Index() {

  const router = useRouter();

  return (
    <Container maxWidth="md" align="center">
      <Box sx={{ my: 4 }} >
         <Typography variant="h3" component="h3"  gutterBottom>
          Next.js 13, MUI 5.11.4, SQLite, Chinook Database
        </Typography>
        <Typography variant="h5" component="h5"  gutterBottom>
          
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{mt: 4, mb: 6}}>
          <Chip label="Next.js" />
          <Chip label="MUI V5"  />
          <Chip label="SQLite"  />
          <Chip label="Chinook Database"  />
          
        </Stack>
        <Button variant="contained" 
                color="primary" 
                component={Link}                                   
                href={`/albums`}> 
               Open Autocomplete Demo
        </Button>
      </Box>
    </Container>
  );
}

