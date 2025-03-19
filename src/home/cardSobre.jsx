import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

function CardSobre() {
  return (
    <Box sx={{
        marginLeft: 5,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', 
        height: '260px',
        borderRadius: 5
        }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }} gutterBottom>
          Sobre
        </Typography>
        <br/>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LocationOnIcon sx={{ mr: 1, color: '#1976d2' }} />
          <Typography variant="body2">Mora em Uberlandia MG</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <EmailIcon sx={{ mr: 1, color: '#1976d2' }} />
          <Typography variant="body2">oswaldo_912@hotmail.com</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <WorkIcon sx={{ mr: 1, color: '#1976d2' }} />
          <Typography variant="body2">
            Senior Full Stack - Callink
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SchoolIcon sx={{ mr: 1, color: '#1976d2' }} />
          <Typography variant="body2">Eletronica - CEFET ARAXA</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ ml: 4}} variant="body2">Gestão da Informação - UFU</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ ml: 4}} variant="body2">Pós graduação em Front End - Pitagoras</Typography>
        </Box>
      </CardContent>
    </Box>
  );
}

export default CardSobre;