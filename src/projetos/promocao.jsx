import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function PromocaoCard() {

    const handleClick = () => {
        window.location.href = 'https://chat.whatsapp.com/FwHxdODpkzyAhdvjHp7zjF';
    };

    return (
        <Card sx={{ maxWidth: "50%", margin: '20px auto' }}>
        <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
            Grupo de Promoções WhatsApp
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
            Junte-se ao nosso grupo de WhatsApp dedicado a compartilhar as melhores promoções de produtos em sites como Amazon, Mercado Livre, Magalu e muitos outros! Aqui, você encontra somente itens com descontos imperdíveis, selecionados especialmente para quem ama economizar.
            </Typography>
            <Typography variant="body2" color="text.primary">
            Trabalhar neste projeto tem sido muito gratificante, pois despertou minha vontade de empreender e me ajudou a descobrir novas habilidades. É incrível poder conectar pessoas a ótimas oportunidades de compra!
            </Typography>
            {/* Opcional: adicionar um botão */}
            <Button 
            variant="contained" 
            color="primary" 
            sx={{ marginTop: 2 }}
            onClick={handleClick}
            >
            Entrar no Grupo
            </Button>
        </CardContent>
        </Card>
    );
}

export default PromocaoCard;