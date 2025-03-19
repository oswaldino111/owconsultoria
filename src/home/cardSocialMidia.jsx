import React from 'react';
import { CardContent, Typography, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const CardSocialMidia = () => {
  return (
    <Box sx={{
            marginLeft: 5,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', 
            height: '190px',
            borderRadius: 5
        }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          Social
        </Typography>
        <br/>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <InstagramIcon sx={{ color: '#e1306c', mr: 1 }} />
          <Typography variant="body2">
            <a href="https://www.instagram.com/oswald0912/?hl=en" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            https://www.instagram.com/oswald0912/?hl=en
            </a>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LinkedInIcon sx={{ color: '#0077b5', mr: 1 }} />
          <Typography variant="body2">
            <a href="https://br.linkedin.com/in/oswaldo-veloso-dev" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            https://br.linkedin.com/in/oswaldo-veloso-dev
            </a>
          </Typography>
        </Box>  
      </CardContent>
    </Box>
  );
};

export default CardSocialMidia;