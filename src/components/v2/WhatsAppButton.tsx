import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled } from '@mui/material/styles';

const FloatingButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  zIndex: 1000,
  backgroundColor: '#25D366',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1ebe5b',
  },
}));

const WhatsAppButton = () => {
  const phoneNumber = '5212251038236'; // Reemplaza con tu número sin "+" ni espacios

  return (
    <FloatingButton
      href={`https://wa.me/${phoneNumber}`}
      formTarget='_blank'
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon />
    </FloatingButton>
  );
};

export default WhatsAppButton;
