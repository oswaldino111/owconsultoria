import React from 'react';
import { 
    Grid2 as Grid,
} from '@mui/material';
import CardHeader from '../utils/cardHeader';
import CardKpi from './cardKpi';
import CardSobre from './cardSobre';
import CardSocialMidia from './cardSocialMidia';
import CardResumo from './cardResumo';
import Footer from '../utils/footer';

const Home = () => {
  return (
    <Grid container spacing={2}>
        <Grid size={12}>
            <CardHeader />
        </Grid>
        <Grid size={3}>
            <CardKpi /> 
            <br/>
            <CardSobre /> 
            <br/>
            <CardSocialMidia /> 
        </Grid>
        <Grid size={9}>
            <CardResumo/>
        </Grid>
        <br/><br/>
        <Grid size={12}>
            <Footer />
        </Grid>
    </Grid>
  );
};

export default Home;