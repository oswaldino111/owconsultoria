import React from 'react';
import { 
    Grid2 as Grid,
} from '@mui/material';
import CardHeader from '../utils/cardHeader';
import Footer from '../utils/footer';
import PromocaoCard from './promocao';
import BebidasCard from './oqbbu';


const Projetos = () => {
  return (
    <Grid container spacing={2}>
        <Grid size={12}>
            <CardHeader />
        </Grid>
        <Grid size={12}>
            <PromocaoCard />
        </Grid>
        <Grid size={12}>
            <BebidasCard />
        </Grid>
        <br/><br/>
        <Grid size={12}>
            <Footer />
        </Grid>
    </Grid>
  );
};

export default Projetos;