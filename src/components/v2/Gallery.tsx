import { Box, Grid, Typography, styled } from '@mui/material';

const ImageGrid = styled('div')(({ theme }) => ({
  columnCount: 1,
  columnGap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    columnCount: 2,
  },
  [theme.breakpoints.up('md')]: {
    columnCount: 3,
  },
}));

const Img = styled('img')({
  width: '100%',
  height: 'auto',
  marginBottom: '16px',
  borderRadius: 8,
  display: 'block',
  breakInside: 'avoid',
});

const images = [
  '/images/cabello-galeria.jpg',
  '/images/unas-galeria.jpg',
  '/images/maquillaje-galeria.jpg',
  '/images/unas-galeria-2.jpg',
];

export default function Gallery() {
  return (
     <Box sx={{ px: 2, py: 6 }} id="gallery">
      <Typography variant="h4" align="center" gutterBottom>
        Galería
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Algunos de nuestros trabajos:
      </Typography>
      <Grid container spacing={2}>
        {images.map((src, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Img src={src} alt={`Galería ${i + 1}`} loading="lazy" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
