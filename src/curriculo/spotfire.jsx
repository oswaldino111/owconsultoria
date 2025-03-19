import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Avatar, 
  Box 
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

const SpotfireDashboardCard = () => {
  return (
    <Card sx={{ maxWidth: "100%", m: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#0288d1' }}>
            <DashboardIcon />
          </Avatar>
        }
        title="Dashboards em Spotfire"
        subheader="Customização Avançada"
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" gutterBottom>
          Desenvolvimento de dashboards em Spotfire com melhorias utilizando IronPython e jQuery para superar limitações da ferramenta.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Contribuições:</strong>
            <ul>
              <li>Uso de IronPython para lógica avançada</li>
              <li>Integração de jQuery para componentes visuais</li>
              <li>Superação de recursos escassos da época</li>
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Ferramenta:</strong> Spotfire
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SpotfireDashboardCard;