import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// ✅ Load Inter Font Locally using next/font/local
const inter = localFont({
  src: [
    { path: "../fonts/Inter-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Inter-Italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Inter-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-inter", // ✅ Assigning CSS variable
  display: "swap",
});

// ✅ Define viewport separately (New Next.js format)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "GoCricket - Cricket Prediction App",
  description: "Predict cricket matches and win from ₹1 Crore prize pool",
  icons: "/images/main-logo.svg",

  // ✅ Open Graph Meta Tags for SEO & Social Sharing
  openGraph: {
    type: "website",
    url: "https://d1bi55qz9dqbh9.cloudfront.net/",
    title: "GoCricket - Cricket Prediction App",
    description: "Predict cricket matches and win from ₹1 Crore prize pool",
    images: [
      {
        url: "https://d1bi55qz9dqbh9.cloudfront.net/fun.png",
        width: 1200,
        height: 630,
        alt: "GoCricket Banner",
      },
    ],
  },

  // ✅ Twitter Meta Tags
  twitter: {
    card: "summary_large_image",
    site: "@GoCricket",
    title: "GoCricket - Cricket Prediction App",
    description: "Predict cricket matches and win from ₹1 Crore prize pool",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
