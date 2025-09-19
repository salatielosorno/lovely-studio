// components/Contact.jsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Stack, Link } from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  const phoneNumber = '5212251107907';

  return (
    <Box id="contact" sx={{ py: 8, px: 2, bgcolor: '#E5E4E4', color: '#181818' }}>
      <div className="md:container md:mx-auto">
        <Typography variant="h4" align="center" gutterBottom>
          Contacto
        </Typography>
        <Typography variant="body1" align="center">
          Reserva tu cita o contáctanos para más información:
        </Typography>
        <List sx={{ maxWidth: 400, mx: 'auto', mt: 2 }}>
          <ListItem>
            <ListItemText secondaryTypographyProps={{ color: '#181818' }} primary="📍 Dirección" secondary="Valdez 909, entre mina y rayon, 93650 Tlapacoyan, Ver." />
          </ListItem>
          <ListItem>
            <Stack direction="row" alignItems="center" spacing={1}>
              <WhatsAppIcon color="success" />
              <Link
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                variant="body1"
                color='#181818'
              >
                Enviar mensaje por WhatsApp
              </Link>
            </Stack>
          </ListItem>
          {/* <ListItem>
            <ListItemText secondaryTypographyProps={{color: 'white'}} primary="📧 Email" secondary="contacto@lovelystudio.mx" />
          </ListItem> */}
          {/* <ListItem>
            <ListItemText secondaryTypographyProps={{color: 'white'}} primary="📞 Teléfono" secondary="(225)-110-7907" />
          </ListItem> */}
        </List>
      </div>
    </Box>
  );
};

export default Contact;
