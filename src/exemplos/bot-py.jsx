// CardTelegramBot.js
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  IconButton,
  Tooltip
} from '@mui/material';
import { ContentCopy } from '@mui/icons-material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const pythonCode = `
import telebot

# Substitua 'SEU_TOKEN_AQUI' pelo token fornecido pelo BotFather
bot = telebot.TeleBot('SEU_TOKEN_AQUI')

@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.reply_to(message, "Hello World!")

# Mantém o bot rodando
bot.polling()
`;

const CardTelegramBot = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(pythonCode.trim());
    alert('Código copiado para a área de transferência!');
  };

  return (
    <Card sx={{ maxWidth: "60%", margin: '20px auto', bgcolor: '#1a1a1a', borderRadius: 5 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom sx={{ color: '#ffffff' }}>
          Bot Telegram - Hello World
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom sx={{ color: '#b0b0b0' }}>
          Exemplo de código Python para um bot básico do Telegram
        </Typography>
        <Box sx={{ mt: 2, position: 'relative' }}>
          <SyntaxHighlighter 
            language="python" 
            style={darcula}
            customStyle={{ 
              borderRadius: '8px', 
              padding: '16px',
              backgroundColor: '#2d2d2d'
            }}
          >
            {pythonCode.trim()}
          </SyntaxHighlighter>
          <Tooltip title="Copiar código">
            <IconButton
              onClick={handleCopy}
              sx={{ 
                position: 'absolute', 
                top: 8, 
                right: 8, 
                color: '#ffffff' 
              }}
            >
              <ContentCopy />
            </IconButton>
          </Tooltip>
        </Box>
        <Typography 
          variant="caption" 
          display="block" 
          sx={{ mt: 2, color: '#b0b0b0' }}
        >
          Para usar: Substitua 'SEU_TOKEN_AQUI' pelo token obtido através do BotFather no Telegram
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardTelegramBot;