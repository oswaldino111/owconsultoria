import React from 'react';
import { 
    Typography, 
    Box, 
    Divider,
    Grid2 as Grid,
} from '@mui/material';


const CardKpi = () => {
  return (
        <Box sx={{
            marginLeft: 5,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', 
            height: '100px',
            borderRadius: 5
        }}>
            <Grid container align="center" spacing={2} sx={{alignItems: 'center'}}>
                <Grid size={5.5}>
                    <Typography sx={{marginTop: 3}} variant="h5" component="div" color="text.primary">
                        28
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        Idade
                    </Typography>
                </Grid>
                <Divider sx={{marginTop: 3}}  orientation="vertical" flexItem />
                <Grid size={5}>
                    <Typography sx={{marginTop: 3}} variant="h5" component="div" color="text.primary">
                        7 anos
                    </Typography>
                    <Typography variant="body2"  sx={{ fontWeight: 'bold' }}>
                        Desenvolvendo
                    </Typography>
                </Grid>
            </Grid>
        </Box>
  );
};

export default CardKpi;