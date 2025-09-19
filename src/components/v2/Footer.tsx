// components/Footer.jsx
import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: '#fff',
        py: 4,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Salón BellaVida. Todos los derechos reservados.
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Link
          underline="always"
          href="/terms-and-conditions"
          color="#fff"
          variant="body2"
        >
          Términos y condiciones
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;