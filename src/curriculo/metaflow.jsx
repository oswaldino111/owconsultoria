import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Avatar, 
  Box 
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';

const InsideSalesCard = () => {
  return (
    <Card sx={{ maxWidth: "100%", m: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#f57c00' }}>
            <BusinessIcon />
          </Avatar>
        }
        title="Expansão Inside Sales"
        subheader="Desafio Atual"
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" gutterBottom>
          Desafio atual: desenvolver um front-end em React e um back-end em cloud com Docker e banco de dados para suportar a expansão do mercado de inside sales.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Objetivos:</strong>
            <ul>
              <li>Atender às necessidades dos consultores de vendas</li>
              <li>Facilitar a definição de estratégias pela gestão</li>
              <li>Suportar o crescimento do mercado</li>
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Tecnologias:</strong> React, Cloud, Docker, Banco de Dados, Celery e RabitMQ
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InsideSalesCard;