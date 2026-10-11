import PlaceOutlined from "@mui/icons-material/PlaceOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ScheduleOutlined from "@mui/icons-material/ScheduleOutlined";
import { fullAddress, mapsEmbedUrl, mapsLink, site, whatsappLink } from "@/lib/site";

const cardCls = "flex gap-4 rounded-2xl border border-ls-border bg-ls-surface p-5";

export default function Contact() {
  return (
    <section id="contact" className="section bg-ls-alt">
      <div className="container-ls">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="eyebrow">Visítanos</p>
          <h2 className="section-title">Contacto</h2>
          <p className="mt-3 text-ls-muted">Reserva tu cita o contáctanos para más información.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className={cardCls}>
              <PlaceOutlined className="text-ls-accent-strong" />
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p className="text-sm text-ls-muted">{fullAddress}</p>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-[44px] items-center text-sm font-semibold text-ls-accent-strong hover:underline">
                  Cómo llegar →
                </a>
              </div>
            </div>
            <div className={cardCls}>
              <WhatsAppIcon className="text-ls-accent-strong" />
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-sm text-ls-muted">{site.whatsappDisplay}</p>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-[44px] items-center text-sm font-semibold text-ls-accent-strong hover:underline">
                  Enviar mensaje →
                </a>
              </div>
            </div>
            <div className={cardCls}>
              <ScheduleOutlined className="text-ls-accent-strong" />
              <div>
                <h3 className="font-semibold">Horario</h3>
                <p className="text-sm text-ls-muted">{site.hours}</p>
              </div>
            </div>
          </div>
          <div className="min-h-[300px] overflow-hidden rounded-2xl border border-ls-border">
            <iframe
              title="Mapa de ubicación de Lovely Studio"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[300px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
