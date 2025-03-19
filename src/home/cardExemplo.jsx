import React from 'react';
import { 
    Card, 
    CardContent, 
    Typography, 
    Box 
} from '@mui/material';

function CardResumo() {
  return (
    <Box sx={{
                margin: 5,
                marginTop: 0,
                marginBottom: 0,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', 
                height: '560px',
                borderRadius: 5
        }}>
      <CardContent>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }} gutterBottom>
          Exemplo
        </Typography>
        <br/>
        <Typography variant="body2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Social
        </Typography>
      </CardContent>
    </Box>
  );
}

export default CardResumo;