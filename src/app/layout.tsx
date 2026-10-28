import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
  display: "swap",
});
const sans = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://shephalee.com"),
  title: "SHEPHALEE — Handwoven Indian Couture",
  description:
    "Sarees, lehengas, Nizami suits, concept sarees and contemporary fashion from SHEPHALEE, crafted from handwoven Indian silk, tissue silk, tussar and cotton.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the preloader's inline script sets data-preloader / --preload on <html> before hydration
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Decide before first paint whether the homepage intro is skipped (reduced motion only),
            so those visitors never see a flash of the preloader. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.dataset.preloader='skip'}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
