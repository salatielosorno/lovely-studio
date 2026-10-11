import Image from "next/image";
import { services, whatsappLink } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="section bg-ls-alt">
      <div className="container-ls">
        <div className="mx-auto mb-10 max-w-xl text-center md:mb-14">
          <p className="eyebrow">Lo que hacemos</p>
          <h2 className="section-title">Servicios</h2>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => (
            <li
              key={s.title}
              className={`group flex flex-col overflow-hidden rounded-3xl border border-ls-border bg-ls-surface transition-shadow hover:shadow-lg lg:col-span-2 ${
                i === 3 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ls-muted">{s.description}</p>
                <a
                  href={whatsappLink(`Hola, me gustaría reservar: ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-[44px] items-center text-sm font-semibold text-ls-accent-strong underline-offset-4 hover:underline"
                >
                  Reservar este servicio →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
