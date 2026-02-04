import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* ================= FONTS ================= */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

/* ================= METADATA ================= */

export const metadata: Metadata = {
  title: "Riddhi Builders | Premium Real Estate in Chandrapur",
  description:
    "Luxury residential and commercial developments in Chandrapur. MahaRERA registered real estate projects.",
  robots: {
    index: true,
    follow: true,
  },
};

/* ================= ROOT LAYOUT ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 REAL HERO IMAGE PRELOAD (LCP BOOST) */}
        <link
          rel="preload"
          as="image"
          href="/hero.webp"
          imagesrcset="/hero.webp 1920w"
          imagesizes="100vw"
          fetchPriority="high"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
