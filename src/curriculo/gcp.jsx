import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Avatar, 
  Box 
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CloudMigrationCard = () => {
  return (
    <Card sx={{ maxWidth: "100%", m: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#0288d1' }}>
            <CloudUploadIcon />
          </Avatar>
        }
        title="Migração para Cloud"
        subheader="Transformação de Infraestrutura"
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" gutterBottom>
          Desafiado a migrar uma estrutura baseada em Flask (Python) para um ambiente cloud completo.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Serviços Implementados:</strong>
            <ul>
              <li>Cloud Functions</li>
              <li>Cloud Run com Docker</li>
              <li>Firebase</li>
              <li>MySQL</li>
              <li>Buckets</li>
              <li>Mensageria Pub-Sub</li>
              <li>Cloud Scheduler</li>
              <li>Text-to-Speech & Speech-to-Text</li>
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Resultado:</strong> Infraestrutura moderna e escalável
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CloudMigrationCard;