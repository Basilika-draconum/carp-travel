import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarpTravel",
  description:
    "Site offer to join you unforgettable trips to the most beautiful parts of the Carpathians.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
