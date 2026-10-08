import type { Metadata } from "next";
import Script from "next/script";
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
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0GEGZSC71V"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0GEGZSC71V');
          `}
        </Script>
      </body>
    </html>
  );
}
