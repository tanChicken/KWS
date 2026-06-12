import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "KWS DMC Korea — Your Premier Gateway to South Korea",
    template: "%s | KWS DMC Korea",
  },
  description:
    "KWS DMC Korea is a premium Destination Management Company crafting bespoke leisure tours, MICE programs, wellness retreats, and VIP experiences across South Korea.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <head>
        {/* Material Symbols is a variable icon font not available via next/font;
            loading it in the root layout makes it global in the App Router. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
