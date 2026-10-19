import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/v2/Providers";
import Header from "@/components/v2/Header";
import Footer from "@/components/v2/Footer";
import WhatsAppButton from "@/components/v2/WhatsAppButton";
import GoogleAnalytics from "@/components/v2/GoogleAnalytics";
import { site } from "@/lib/site";

const display = Cormorant_Garamond({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Salón de belleza y peluquería`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: ["salón de belleza", "belleza", "maquillaje", "peluquería", "aplicación de uñas", "pestañas"],
  applicationName: site.name,
  alternates: { canonical: "/" },
  icons: { icon: "/images/favicon.ico", apple: "/images/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: `${site.name} | Salón de belleza y peluquería`,
    description: site.description,
    locale: "es_MX",
    images: [{ url: "/images/lovely.png", width: 500, height: 500, alt: site.name }],
  },
  twitter: { card: "summary", title: site.name, description: site.description, images: ["/images/lovely.png"] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff9f8" },
    { media: "(prefers-color-scheme: dark)", color: "#161515" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('ls-theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.setAttribute('data-theme',d?'dark':'light');}catch(e){}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: site.name,
  url: site.url,
  image: `${site.url}/images/lovely.png`,
  description: site.description,
  telephone: `+${site.whatsappNumber}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  sameAs: [site.instagramUrl, site.facebookUrl].filter(Boolean),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased" id="rootNode">
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[2000] focus:rounded-full focus:bg-ls-accent focus:px-4 focus:py-2 focus:text-ls-surface"
          >
            Saltar al contenido
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
