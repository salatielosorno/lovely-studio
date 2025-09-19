// components/Services.tsx
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
  transition: 'transform 0.2s ease-in-out',
  height: '100%',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const services = [
  {
    title: 'Corte de cabello',
    description: 'Estilos modernos y clásicos para todas las edades.',
    image: 'https://picsum.photos/id/1011/600/400',
    link: '#corte',
  },
  {
    title: 'Servicio de depilación',
    description: 'Métodos seguros y efectivos para una piel suave y libre de vello.',
    image: 'https://picsum.photos/id/1015/600/400',
    link: '#depilacion',
  },
  {
    title: 'Manicure y Pedicure',
    description: 'Relájate mientras cuidamos tus manos y pies.',
    image: 'https://picsum.photos/id/1018/600/400',
    link: '#manicure',
  },
  {
    title: 'Maquillaje profesional',
    description: 'Para eventos especiales o sesiones fotográficas.',
    image: 'https://picsum.photos/id/1027/600/400',
    link: '#maquillaje',
  },
  {
    title: 'Aplicación de uñas y pestañas',
    description: 'Resalta la belleza de tu mirada y disfruta de unas uñas espectaculares gracias a nuestras técnicas profesionales y personalizadas.',
    image: 'https://picsum.photos/id/1035/600/400',
    link: '#unas-pestanas',
  },
];

const Services = () => {
  return (
    <Box id="services" sx={{ py: 8, px: 2, bgcolor: '#E5E4E4', color: '#181818' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Servicios
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardActionArea href={service.link}>
                <CardMedia
                  component="img"
                  height="180"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
