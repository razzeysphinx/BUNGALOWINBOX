import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getLocalBusinessSchema } from "@/lib/seo";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bungalowinabox.com"),
  title: {
    default: "Bungalow in a Box | Timber Frame Homes & Kits Built in Maine",
    template: "%s | Bungalow in a Box",
  },
  description:
    "Custom timber-frame homes, cottages, ADUs, barns and small structures designed and prefabricated in Maine using traditional craftsmanship and modern building systems.",
  keywords: [
    "timber frame homes Maine",
    "timber frame kits",
    "prefab cottages Maine",
    "ADU timber frame",
    "barn house Maine",
    "SIP panel timber frame",
    "Woolwich Maine builders",
    "Montsweag Brook Corporation"
  ],
  authors: [{ name: "Raoul & Vicki Hennin" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bungalowinabox.com",
    title: "Bungalow in a Box | Authentic Timber Frames Built in Maine",
    description:
      "Custom timber-frame homes, cottages, ADUs, barns and small structures designed and fabricated in Maine using traditional craftsmanship and modern building systems.",
    siteName: "Bungalow in a Box",
    images: [
      {
        url: "/images/projects/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Completed Bungalow in a Box Timber Frame Home in Maine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bungalow in a Box | Timber Frame Homes Built in Maine",
    description:
      "Custom timber-frame homes, cottages, ADUs, barns and small structures designed and prefabricated in Maine.",
    images: ["/images/projects/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${display.variable} ${sans.variable} antialiased selection:bg-[#14241B] selection:text-[#FAF8F2]`}>
        <SiteHeader />
        <main className="min-h-screen pt-[72px] lg:pt-[76px]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
