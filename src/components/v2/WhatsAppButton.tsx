'use client'
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { whatsappLink } from "@/lib/site";

const WhatsAppButton = () => (
  <Fab
    component="a"
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escribir por WhatsApp"
    sx={{
      position: "fixed",
      right: "max(16px, env(safe-area-inset-right))",
      bottom: "max(16px, env(safe-area-inset-bottom))",
      zIndex: 1000,
      bgcolor: "#25D366",
      color: "#fff",
      "&:hover": { bgcolor: "#1ebe5b" },
    }}
  >
    <WhatsAppIcon />
  </Fab>
);

export default WhatsAppButton;
