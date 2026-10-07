import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Titled Lots for Sale in Tagas, Daraga, Albay",
  description:
    "View property photos, price, vicinity information, and directions for these titled lots for sale in Tagas, Daraga, Albay.",
  openGraph: {
    title: "Titled Lots for Sale in Tagas, Daraga, Albay",
    description:
      "Property photos, price, vicinity information, and Google Maps directions.",
    type: "website",
    locale: "en_PH"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
