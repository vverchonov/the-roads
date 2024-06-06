import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Script from "next/script";
import { ReviewsBlock } from "./components/blocks/reviews/reviews-block";
import { VehiclesBlock } from "./components/blocks/vehicles/vehicles-block";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "THE ROADS",
  description: "The ROADS transfers",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = useTranslations("navbar");
  return (
    <html lang={locale} className="">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="THE ROADS" />
        <meta property="og:title" content="THE ROADS" />
        <meta property="og:description" content="THE ROADS" />
        <meta name="twitter:title" content="THE ROADS" />
        <meta name="twitter:description" content="THE ROADS" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
          rel="stylesheet"
        />
        <title>THE ROADS</title>
      </head>
      <body className="flex flex-col min-h-screen gap-8">
        <Navbar />
        <div className="flex flex-col gap-16 w-full">{children}</div>
        <VehiclesBlock />
        <ReviewsBlock />
        <Footer />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></Script>
      </body>
    </html>
  );
}
