import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Avatar, 
  Box 
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const ChatBotCard = () => {
  return (
    <>
    <Card sx={{ maxWidth: "100%", m: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#1976d2' }}>
            <ChatIcon />
          </Avatar>
        }
        title="Boris - Chat Bot - Callink"
        subheader="Projeto em Desenvolvimento / Finalizado"
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" gutterBottom>
          Boris é um chat bot inteligente desenvolvido principalmente usando Python/Sql/NoSql/Gcp
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Funcionalidades:</strong>
            <ul>
              <li>Respostas e Alertas em tempo real</li>
              <li>Processamento de linguagem natural</li>
              <li>Integração com múltiplas plataformas(Teams, Whatsapp, Telegram, Hangouts)</li>
              <li>Integração com Senior, Pipedrive e OpenAi</li>
              <li>Resultados em imagem, pdf, audio, csv, videos, html</li>
              <li>Gráficos multitabelas, pizza, barra, núvem, interativos.</li>
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Status:</strong> Concluído
          </Typography>
        </Box>
      </CardContent>
    </Card>
    <br/>
    <Card sx={{ maxWidth: "100%", m: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#1976d2' }}>
            <ChatIcon />
          </Avatar>
        }
        title="Ray - Chat Bot - Grupo Primo"
        subheader="Projeto em Desenvolvimento / Finalizado"
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" gutterBottom>
          Ray é um bot para relatórios e analises de mercado/ações
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Funcionalidades:</strong>
            <ul>
              <li>Respostas e Alertas em tempo real</li>
              <li>Integração com o mercado Financeiro</li>
              <li>Resultados em imagem, pdf e csv</li>
              <li>Gráficos multitabelas, pizza, barra, candles.</li>
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Status:</strong> Concluído
          </Typography>
        </Box>
      </CardContent>
    </Card>
    </>
  );
};

export default ChatBotCard;