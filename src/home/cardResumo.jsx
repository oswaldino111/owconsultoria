import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Divider 
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Estilização customizada para o texto
const StyledTypography = styled(Typography)(({ theme }) => ({
  lineHeight: 1.6,
  color: theme.palette.text.secondary,
  '& span': {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}));

// Dados do conteúdo organizados em array para melhor manutenção
const contentSections = [
  {
    text: 'Olá! Este é meu pequeno site que resume minhas características, conquistas, estudos e trabalho. Para visualizar meu currículo, este site contém um resumo e uma versão detalhada na aba <span>Currículo</span>.',
  },
  {
    text: 'Você pode conferir meus projetos atuais e encerrados na aba <span>Projetos</span>.',
  },
  {
    text: 'Também disponibilizo códigos (principalmente em <span>Python</span>) que desenvolvi e quero compartilhar com a comunidade.',
  },
  {
    text: 'Por fim, na aba <span>Roadmap</span>, você encontra o planejamento deste site, ideias que quero desenvolver, além de páginas variadas como calculadoras e mini projetos úteis para o dia a dia.',
  },
  {
    text: 'Divirta-se e entre em contato comigo para sugestões, críticas ou parcerias!',
  },
];

function CardResumo() {
  return (
    <Box
      sx={{
        marginRight: 5,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Sombra mais suave
        borderRadius: 3, // Bordas menos arredondadas
        height: { xs: 'auto', md: '560px' }, // Altura responsiva
        bgcolor: 'background.paper', // Cor de fundo adaptável ao tema
        transition: 'box-shadow 0.3s ease-in-out', // Transição suave
        '&:hover': {
          boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.15)', // Efeito hover
        },
      }}
    >
      <Card elevation={0}>
        <CardContent sx={{ p: { xs: 2, md: 3 } }}> {/* Padding responsivo */}
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 2,
            }}
          >
            Resumo
          </Typography>
          <Divider sx={{ mb: 2 }} /> {/* Linha divisória */}
          
          {contentSections.map((section, index) => (
            <StyledTypography
              key={index}
              variant="body2"
              paragraph
              dangerouslySetInnerHTML={{ __html: section.text }} // Permite tags HTML como <span>
            />
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}

export default CardResumo;