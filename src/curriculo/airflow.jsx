import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Avatar, 
  Box 
} from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';

const AirflowCard = () => {
  return (
    <Card sx={{ maxWidth: "100%", m: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#4caf50' }}>
            <CloudIcon />
          </Avatar>
        }
        title="Implementação Apache Airflow"
        subheader="Callink - Programa Pi"
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" gutterBottom>
          Implantação bem-sucedida do Apache Airflow realizada por mim através do Programa de Inovação (Pi) na Callink.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Impacto:</strong>
            <ul>
              <li>Migração de ETLs para Python</li>
              <li>Melhoria na eficiência da área de dados</li>
              <li>Solução de problemas ao utilizar schedule do Integration</li>
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Projeto:</strong> Programa de Inovação (Pi)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AirflowCard;