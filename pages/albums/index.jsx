import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AutocompleteTitles from '@/components/AutocompleteTitles'

export default function Index() {

  return (
    <Container maxWidth="md" align="center">
      <Box sx={{ my: 4 }} >         
        
       <AutocompleteTitles/>
      </Box>
    </Container>
  );
}
