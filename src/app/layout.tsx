import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};
export const metadata: Metadata = {
  title: "GoCricket - Cricket Prediction App",
  description: "Predict cricket matches and win from ₹1 Crore prize pool",
  icons: "/images/main-logo.svg",

  openGraph: {
    type: "website",
    url: "https://gocricket-next.vercel.app/",
    title: "GoCricket - Cricket Prediction App",
    description: "Predict cricket matches and win from ₹1 Crore prize pool",
    images: [
      {
        url: "https://gocricket-next.vercel.app/images/facebook-banner.png",
        width: 1200,
        height: 630,
        alt: "GoCricket Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@GoCricket",
    title: "GoCricket - Cricket Prediction App",
    description: "Predict cricket matches and win from ₹1 Crore prize pool",
    images: [
      {
        url: "https://gocricket-next.vercel.app/images/facebook-banner.png",
        width: 1200,
        height: 630,
        alt: "GoCricket Banner",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/desktop-banner.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/mob-homepage-final.webp"
          type="image/webp"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
