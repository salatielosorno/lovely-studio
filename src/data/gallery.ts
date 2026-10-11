export type GalleryCategory = "Cabello" | "Uñas" | "Maquillaje";

export interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

// To add a photo: drop the file in public/images/gallery/ and add a line here.
export const galleryItems: GalleryItem[] = [
  { src: "/images/gallery/cabello-1.jpg", alt: "Corte y peinado realizado en Lovely Studio", category: "Cabello", width: 900, height: 1600 },
  { src: "/images/gallery/unas-1.jpg", alt: "Diseño de uñas realizado en Lovely Studio", category: "Uñas", width: 900, height: 1600 },
  { src: "/images/gallery/maquillaje-1.jpg", alt: "Maquillaje profesional realizado en Lovely Studio", category: "Maquillaje", width: 810, height: 1440 },
  { src: "/images/gallery/unas-2.jpg", alt: "Aplicación de uñas realizada en Lovely Studio", category: "Uñas", width: 810, height: 1440 },
];
