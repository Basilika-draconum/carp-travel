import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      url: "/favicon.svg",
    },
    {
      rel: "icon",
      type: "image/svg",
      media: "(prefers-color-scheme: light)",
      url: "/favicon-light.svg",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://carp-travel-eosin.vercel.app/",
    title: "CarpTravel",
    description:
      "Site offer to join you unforgettable trips to the most beautiful parts of the Carpathians.",
    siteName: "CarpTravel",
    images: { url: "/logo.svg" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
