import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Avatar, 
  Box 
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';

const TerraformCard = () => {
  return (
    <Card sx={{ maxWidth: "100%", m: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#7b1fa2' }}>
            <BuildIcon />
          </Avatar>
        }
        title="Escalabilidade com Terraform"
        subheader="Bot Boris"
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" gutterBottom>
          Responsável por criar o processo de escalabilidade do bot Boris utilizando Terraform.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Impacto:</strong>
            <ul>
              <li>Facilitou futuras implantações</li>
              <li>Reduziu o prazo de dias para horas</li>
              <li>Infraestrutura como código (IaC)</li>
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Ferramenta:</strong> Terraform
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TerraformCard;