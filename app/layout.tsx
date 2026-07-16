import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://lp-led-outdoor.patriciasmtolfo.workers.dev";
const title = "Painéis de LED em Santa Maria e RS | LED Outdoor";
const description =
  "Venda e instalação de painéis de LED sob medida em Santa Maria e todo o RS, com projeto, fornecimento e configuração para empresas.";

const googleTagManagerId = "GTM-NF5VR9SC";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LED Outdoor",
  legalName: "Plugin Eventos Ltda",
  url: siteUrl,
  logo: `${siteUrl}/media/led-outdoor-logo.webp`,
  image: `${siteUrl}/og-led-outdoor-v2.webp`,
  taxID: "27.865.923/0001-62",
  telephone: "+55 55 99135-2816",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Venâncio Aires, 1434, sala 312-D",
    addressLocality: "Santa Maria",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Rio Grande do Sul",
  },
  founder: {
    "@type": "Person",
    name: "Juliano Paim",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55 55 99135-2816",
    contactType: "sales",
    availableLanguage: "Portuguese",
  },
  sameAs: ["https://www.instagram.com/ledoutdoor_sm/"],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "LED Outdoor",
    url: "/",
    title,
    description,
    images: [
      {
        url: "/og-led-outdoor-v2.webp",
        width: 1200,
        height: 630,
        alt: "Painel de LED instalado pela LED Outdoor",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-led-outdoor-v2.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${googleTagManagerId}');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="preload" as="image" href="/media/hero-multi10.webp" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
