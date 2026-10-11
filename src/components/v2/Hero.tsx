import Image from "next/image";
import BookButton from "./BookButton";
import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const heroImages = [
  { src: "/images/hero/maquillaje.jpg", alt: "Maquillaje profesional", cls: "row-span-2", pos: "50% 40%" },
  { src: "/images/hero/corte.jpg", alt: "Corte de cabello con tijeras", cls: "", pos: "50% 50%" },
  { src: "/images/hero/unas.jpg", alt: "Uñas francesas", cls: "", pos: "50% 60%" },
];

const highlights = ["Atención personalizada", "Productos profesionales", "Con cita previa"];

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="container-ls grid items-center gap-10 py-10 md:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="text-center lg:text-left">
          <p className="eyebrow">Salón de belleza y peluquería</p>
          <h1 className="font-display font-semibold" style={{ fontSize: "clamp(2.5rem, 9vw, 4.5rem)", lineHeight: 1.05 }}>
            La belleza y el éxito comienzan aquí.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base text-ls-muted lg:mx-0">
            Cabello, uñas, pestañas y maquillaje con atención personalizada. Reserva tu cita en un minuto.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <BookButton />
            <a href={whatsappLink("Hola, me gustaría información sobre sus servicios.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <WhatsAppIcon fontSize="small" /> WhatsApp
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ls-muted lg:justify-start">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ls-accent" /> {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto grid aspect-[5/4] w-full max-w-md grid-cols-2 grid-rows-2 gap-3 sm:max-w-lg lg:max-w-none">
          {heroImages.map((img) => (
            <div key={img.src} className={`relative overflow-hidden rounded-3xl ${img.cls}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 256px, 45vw"
                className="object-cover"
                style={{ objectPosition: img.pos }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
