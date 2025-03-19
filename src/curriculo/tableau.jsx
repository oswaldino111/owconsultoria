import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Avatar, 
  Box 
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';

const TableauDashboardCard = () => {
  return (
    <Card sx={{ maxWidth: "100%", m: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#388e3c' }}>
            <BarChartIcon />
          </Avatar>
        }
        title="Dashboards em Tableau"
        subheader="Desenvolvimento Multi-Empresa"
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" gutterBottom>
          Desenvolvimento de dashboards em Tableau para diversas empresas, abrangendo MVPs e consolidação de projetos.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Escopo:</strong>
            <ul>
              <li>Criação de MVPs para validação rápida</li>
              <li>Consolidação de dados de projetos finalizados</li>
              <li>Visualizações personalizadas por empresa</li>
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Ferramenta:</strong> Tableau
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Responsável:</strong> [Seu Nome]
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TableauDashboardCard;