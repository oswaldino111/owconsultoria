import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Avatar, 
  Box 
} from '@mui/material';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const ChurnModelCard = () => {
  return (
    <Card sx={{ maxWidth: "100%", m: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#c62828' }}>
            <TrendingDownIcon />
          </Avatar>
        }
        title="Modelo de Churn de Clientes"
        subheader="Python & SQL"
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" gutterBottom>
          Desenvolvimento de um modelo de churn para uma empresa parceira usando Python e SQL, mas não implantado devido a resultados inconclusivos.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Técnicas Utilizadas:</strong>
            <ul>
              <li>Árvore de Decisão</li>
              <li>Regressão Logística</li>
              <li>Análises exploratórias</li>
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Desafios:</strong>
            <ul>
              <li>Modelo não viável pelos fatores analisados</li>
              <li>Quantidade insuficiente de dados</li>
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Resultado:</strong> Parte importante para definir o rumo da minha carreira como desenvolvedor
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChurnModelCard;