import Link from "next/link";
import { Logo } from "./Header";
import { navItems, site } from "@/lib/site";

const Footer = () => (
  <footer className="border-t border-ls-border bg-ls-surface pb-24 pt-12 md:pb-12">
    <div className="container-ls grid gap-10 md:grid-cols-3">
      <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
        <Logo className="h-24" />
        <p className="max-w-xs text-sm text-ls-muted">{site.tagline}</p>
      </div>
      <nav aria-label="Pie de página" className="flex flex-col items-center gap-1 md:items-start">
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-widest">Explorar</h2>
        {navItems.map((n) => (
          <a key={n.id} href={n.href} className="inline-flex min-h-[44px] items-center text-sm text-ls-muted hover:text-ls-accent-strong">
            {n.label}
          </a>
        ))}
        <Link href="/terms-and-conditions" className="inline-flex min-h-[44px] items-center text-sm text-ls-muted hover:text-ls-accent-strong">
          Términos y condiciones
        </Link>
      </nav>
      <div className="flex flex-col items-center gap-1 text-center text-sm text-ls-muted md:items-start md:text-left">
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-widest text-ls-text">Contacto</h2>
        <p>{site.address.street}</p>
        <p>{site.address.postalCode} {site.address.locality}, {site.address.region}</p>
        <p>WhatsApp {site.whatsappDisplay}</p>
      </div>
    </div>
    <p className="container-ls mt-10 border-t border-ls-border pt-6 text-center text-xs text-ls-muted">
      © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
    </p>
  </footer>
);

export default Footer;
