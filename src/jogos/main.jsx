import React from 'react';
import { 
    Grid2 as Grid,
} from '@mui/material';
import CardHeader from '../utils/cardHeader';
import Footer from '../utils/footer';
import Minesweeper from '../jogos/campominado';
import Jump from './jump';

const Jogos = () => {
  return (
    <Grid container spacing={2}>
        <Grid size={12}>
            <CardHeader />
        </Grid>
        <Grid size={12}>
            <Minesweeper />
        </Grid>
        <br/><br/>
        <Grid size={12}>
            <Footer />
        </Grid>
    </Grid>
  );
};

export default Jogos;