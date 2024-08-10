import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lovely Studio",
  description: "Salón de belleza y peluquería",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Lovely Studio</title>
        <link rel="icon" href="images/favicon.ico" />
        <link rel="apple-touch-icon" href="images/apple-touch-icon.ico"></link>
        <meta name="apple-mobile-web-app-title" content="Lovely Studio"></meta>
        <meta name="application-name" content="Lovely Studio"></meta>

        <meta name="description" content="Salón de belleza y peluquería" />
        <meta name="keywords" content="salón de belleza, belleza, maquillaje, peluquería, aplicación de uñas" />

        {/* <!--  Essential META Tags --> */}
        <meta property="og:title" content="Salón de belleza y peluquería" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://lovelystudio.mx/images/lovely.png" />
        <meta property="og:url" content="http://lovelystudio.mx" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}

        {/* <!--  Non-Essential, But Recommended --> */}
        <meta property="og:description" content="Salón de belleza y peluquería" />
        <meta property="og:site_name" content="Lovely Studio" />
        <meta name="twitter:image:alt" content="Salón de belleza y peluquería" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
