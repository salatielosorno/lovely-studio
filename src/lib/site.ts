export const site = {
  name: "Lovely Studio",
  url: "https://lovelystudio.mx",
  tagline: "Belleza, cuidado y estilo para ti",
  description:
    "Salón de belleza y peluquería: corte de cabello, manicure y pedicure, depilación, maquillaje, uñas y pestañas.",
  address: {
    street: "Valdez 909, entre Mina y Rayón",
    locality: "Tlapacoyan",
    region: "Veracruz",
    postalCode: "93650",
    country: "MX",
  },
  whatsappNumber: "5212251038236",
  whatsappDisplay: "225 103 8236",
  calendlyUrl: "https://calendly.com/lovely-studio",
  // TODO: confirm real opening hours and social links with the owner.
  hours: "Lunes a sábado, con cita previa",
  instagramUrl: "",
  facebookUrl: "",
} as const;

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.locality}, ${site.address.region}`;

export const mapsQuery = encodeURIComponent(`Lovely Studio, ${fullAddress}`);
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&output=embed`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export interface Service {
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    title: "Corte de cabello",
    description: "Estilos modernos y clásicos para todas las edades.",
    image: "/images/corte.jpg",
  },
  {
    title: "Manicure y Pedicure",
    description: "Relájate mientras cuidamos tus manos y pies.",
    image: "/images/pedicure.jpg",
  },
  {
    title: "Aplicación de uñas y pestañas",
    description:
      "Resalta tu mirada y luce unas uñas espectaculares con técnicas profesionales y personalizadas.",
    image: "/images/unas.jpg",
  },
  {
    title: "Maquillaje",
    description: "Para eventos especiales o sesiones fotográficas.",
    image: "/images/maquillaje.jpg",
  },
  {
    title: "Servicio de depilación",
    description: "Métodos seguros y efectivos para una piel suave.",
    image: "/images/depilacion.jpg",
  },
];

export const navItems = [
  { label: "Servicios", href: "/#services", id: "services" },
  { label: "Galería", href: "/#gallery", id: "gallery" },
  { label: "Contacto", href: "/#contact", id: "contact" },
] as const;
