import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function BebidasCard() {

  const handleClick = () => {
    window.location.href = 'https://www.instagram.com/oquebeberuberlandia/';
  };

  return (
    <Card sx={{ maxWidth: "50%", margin: '20px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Instagram de Promoções de Bebidas - Uberlândia
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Confira nosso Instagram dedicado a divulgar promoções relâmpago de bebidas em Uberlândia! Encontro os melhores preços em supermercados da região e compartilho com você as ofertas mais quentes do momento.
        </Typography>
        <Typography variant="body2" color="text.primary">
          Esse hobby surgiu porque, entre o trabalho e casa, sempre visito o supermercado para comprar frutas e verduras frescas, o que me leva a estar lá com frequência. Nessas idas e vindas, descobri preços incríveis e promoções relâmpago de bebidas, que comecei a compartilhar com meus amigos. Motivado pelo sucesso do meu grupo de promoções no WhatsApp, decidi alcançar mais pessoas pelo Instagram. Além disso, estou aprendendo sobre ferramentas de publicidade do Instagram, criando dashboards com extração de informações, qualificando leads e muito mais. O mais legal desse hobby é que me conectou com inúmeros fornecedores de bebidas da região!
        </Typography>
        {/* Opcional: adicionar um botão */}
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ marginTop: 2 }}
          onClick={handleClick}
        >
          Seguir no Instagram
        </Button>
      </CardContent>
    </Card>
  );
}

export default BebidasCard;