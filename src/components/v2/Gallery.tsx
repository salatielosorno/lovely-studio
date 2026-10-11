'use client'
import { useMemo, useState } from "react";
import Image from "next/image";
import { galleryItems, type GalleryCategory } from "@/data/gallery";
import { site } from "@/lib/site";
import Lightbox from "./Lightbox";

type Filter = "Todos" | GalleryCategory;

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const [index, setIndex] = useState<number | null>(null);

  const categories = useMemo<Filter[]>(
    () => ["Todos", ...Array.from(new Set(galleryItems.map((i) => i.category)))],
    []
  );
  const items = useMemo(
    () => (filter === "Todos" ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter]
  );

  return (
    <section id="gallery" className="section">
      <div className="container-ls">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <p className="eyebrow">Nuestro trabajo</p>
          <h2 className="section-title">Galería</h2>
          <p className="mt-3 text-ls-muted">Algunos de los resultados que hemos logrado para nuestras clientas.</p>
        </div>

        <div className="-mx-4 mb-8 overflow-x-auto px-4 sm:mx-0 sm:px-0" role="group" aria-label="Filtrar por categoría">
          <div className="flex w-max gap-2 sm:mx-auto sm:w-auto sm:flex-wrap sm:justify-center">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
                className={`min-h-[44px] rounded-full border px-5 text-sm font-medium transition-colors ${
                  filter === c
                    ? "border-[color:var(--ls-btn)] bg-[color:var(--ls-btn)] text-[color:var(--ls-on-accent)]"
                    : "border-ls-border bg-ls-surface hover:border-ls-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <ul className="columns-2 gap-3 sm:gap-4 lg:columns-3">
          {items.map((item, i) => (
            <li key={item.src} className="mb-3 break-inside-avoid sm:mb-4">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ampliar imagen: ${item.alt}`}
                className="group relative block w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1024px) 380px, 50vw"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-2 left-2 rounded-full bg-black/55 px-3 py-1 text-xs text-white">
                  {item.category}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {(site.instagramUrl as string) && (
          <div className="mt-10 text-center">
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Ver más en Instagram
            </a>
          </div>
        )}
      </div>
      <Lightbox items={items} index={index} onChange={setIndex} />
    </section>
  );
}
