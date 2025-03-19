import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Avatar, 
  Box 
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';

const SpeechToTextCard = () => {
  return (
    <Card sx={{ maxWidth: "100%", m: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#d81b60' }}>
            <MicIcon />
          </Avatar>
        }
        title="Speech-to-Text Call Center"
        subheader="Projeto de Transcrição"
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" gutterBottom>
          Desenvolvimento de um projeto Speech-to-Text para transcrever grandes lotes de ligações de call center.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Funcionalidades:</strong>
            <ul>
              <li>Separação de canais e participantes</li>
              <li>Transcrição com identificação de locutores</li>
              <li>Relatórios baseados na temperatura das conversas</li>
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Desafio Principal:</strong> Baixa qualidade dos áudios de call center
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SpeechToTextCard;