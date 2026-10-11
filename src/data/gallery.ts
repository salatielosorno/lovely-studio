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
  { src: "/images/gallery/cabello-1.jpg", alt: "Corte y color de cabello en Lovely Studio", category: "Cabello", width: 816, height: 1056 },
  { src: "/images/gallery/cabello-2.jpg", alt: "Peinado y acabado de cabello en Lovely Studio", category: "Cabello", width: 816, height: 1056 },
  { src: "/images/gallery/unas-1.jpg", alt: "Diseño de uñas en Lovely Studio", category: "Uñas", width: 816, height: 1056 },
  { src: "/images/gallery/unas-2.jpg", alt: "Aplicación de uñas en Lovely Studio", category: "Uñas", width: 816, height: 1056 },
  { src: "/images/gallery/maquillaje-1.jpg", alt: "Maquillaje profesional en Lovely Studio", category: "Maquillaje", width: 816, height: 1056 },
  { src: "/images/gallery/maquillaje-2.jpg", alt: "Maquillaje para evento en Lovely Studio", category: "Maquillaje", width: 816, height: 1056 },
];
