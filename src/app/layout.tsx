import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NorthCollective | Everything Activewear",
  description:
    "Premium activewear collection. Shop new arrivals, full sets, clothing, and footwear. Authentic quality, fast shipping.",
  keywords:
    "activewear, clothing, footwear, fashion, online shopping, sets",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "NorthCollective | Everything Activewear",
    description:
      "Premium activewear collection featuring new arrivals, full sets, clothing, and footwear.",
    type: "website",
    url: "https://northcollective-site.vercel.app",
    images: ["/og-image.png?v=2"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${poppins.variable}`}>
      <head>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
