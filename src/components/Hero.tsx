import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(8, 0),
}));

const Hero = () => {
  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Our Website
            </Typography>
            <Typography variant="h5" paragraph>
              Discover amazing products and services that will change the way you work.
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              Learn More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
             {/* Add an image or illustration here */}
            <img src="/banner-lovely.svg" alt="Hero Image" style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default Hero;