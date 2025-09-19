// components/About.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box id="about" sx={{ py: 8, px: 2, bgcolor: '#E5E4E4', color: '#181818' }}>
      <div className="md:container md:mx-auto">
        <Typography variant="h4" align="center" gutterBottom>
          Sobre Nosotros
        </Typography>
        <Typography variant="body1" align="center" maxWidth="800px" mx="auto">
          En Salón BellaVida llevamos más de 10 años ayudando a realzar la belleza de nuestras clientas
          con servicios profesionales, productos de alta calidad y atención personalizada.
        </Typography>
      </div>
    </Box>
  );
};

export default About;
