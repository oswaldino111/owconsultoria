import React from 'react';
import { styled } from '@mui/material/styles';
import { 
    Avatar, 
    Typography, 
    Box, 
    Button,
    Grid2 as Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Styled components for custom styling
const CoverImage = styled('div')({
  width: '100%',
  height: '200px', // Adjust height as needed
  borderRadius: 10,
  backgroundImage: 'url(https://wallpapers.com/images/hd/pc-background-icblvzjtn3i7m291.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
});

const ProfileContainer = styled(Box)({
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '36px',
});

const AvatarContainer = styled(Box)({
  width: '120px',
  height: '120px',
  border: '4px solid #fff',
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'absolute',
  top: '-90px', // Adjust to position avatar over cover image
});

const InfoContainer = styled(Box)({
  marginTop: '-30px', // Space for avatar
  textAlign: 'center',
});

const NavButtons = styled(Box)({
  display: 'flex',
  justifyContent: 'left',
  gap: '16px',
  marginTop: '1px',
});

const CardHeader = () => {

  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
        <Grid size={12}>
        <Box sx={{margin: 5, marginBottom: 0, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', height: '300px', borderRadius: 10,}}>
            <CoverImage />
            <ProfileContainer>
                <AvatarContainer>
                <Avatar
                    alt="Oswaldo Veloso"
                    src="https://media.licdn.com/dms/image/C4D03AQGK9TTojTv89w/profile-displayphoto-shrink_200_200/0/1659138575411?e=2147483647&v=beta&t=pWFmOLyOSOF-OFt-2Tvghbni7G_O_zQPwUcpIapGThg"
                    sx={{ 
                        width: '100%', 
                        height: '100%',
                        position: 'absolute', // posiciona o avatar em relação à box    
                    }}
                />
                </AvatarContainer>
                <InfoContainer>
                <Typography variant="h5" component="div" color="black">
                    Oswaldo Veloso
                </Typography>
                <Typography variant="subtitle1" color="gray">
                    Programador Senior
                </Typography>
                </InfoContainer>
                <NavButtons>
                <Button variant="text" color="inherit" onClick={() => navigate('/')}>
                    Inicio
                </Button>
                <Button variant="text" color="inherit" onClick={() => navigate('/curriculo')}>
                    Curriculo
                </Button>
                <Button variant="text" color="inherit" onClick={() => navigate('/projetos')}>
                    Projetos
                </Button>
                <Button variant="text" color="inherit" onClick={() => navigate('/codigos')}>
                    Exemplos de Códigos
                </Button>
                <Button variant="text" color="inherit" onClick={() => navigate('/jogos')}>
                    Jogos
                </Button>
                </NavButtons>
            </ProfileContainer>
        </Box>
        </Grid>
    </Grid>
  );
};

export default CardHeader;