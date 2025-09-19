// components/Gallery.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const GalleryImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
}));

const images = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
];

const Gallery = () => {
  return (
    <Box id="gallery" sx={{ py: 8 }}>
      <div className="md:container md:mx-auto">
        <Typography variant="h4" align="center" gutterBottom>
          Galería
        </Typography>
        <Grid container spacing={2} justifyContent="center" maxWidth="md" mx="auto">
          {images.map((src, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <GalleryImage src={src} alt={`Imagen ${idx + 1}`} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default Gallery;
