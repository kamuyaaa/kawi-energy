import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "KAWI Metrics Technologies",

  description:
    "Affordable Thermal Energy Storage built from Sand. Powering Africa's industrial future through sustainable heat storage.",

  keywords: [
    "Sand Battery",
    "Thermal Energy Storage",
    "Renewable Energy",
    "Industrial Heat",
    "Kenya",
    "KAWI",
    "Energy Storage",
    "Climate Tech",
  ],

  authors: [
    {
      name: "KAWI Metrics Technologies",
    },
  ],

  creator: "KAWI Metrics Technologies",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          ${manrope.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}