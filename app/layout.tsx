import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import Header from "./sections/Header/Header";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarpTravel",
  description:
    "Site offer to join you unforgettable trips to the most beautiful parts of the Carpathians.",
  icons: [
    {
      rel: "icon",
      type: "image/svg",
      media: "(prefers-color-scheme: dark)",
      url: "/icons/favicon.svg",
    },
    {
      rel: "icon",
      type: "image/svg",
      media: "(prefers-color-scheme: light)",
      url: "/icons/favicon-light.svg",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://carp-travel-eosin.vercel.app/",
    title: "CarpTravel",
    description:
      "Site offer to join you unforgettable trips to the most beautiful parts of the Carpathians.",
    siteName: "CarpTravel",
    images: [
      { url: "/ogp/og-image.png", width: 1200, height: 630, alt: "CarpTravel" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
