import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Script from "next/script";
import { ReviewsBlock } from "./components/blocks/reviews/reviews-block";
import { VehiclesBlock } from "./components/blocks/vehicles/vehicles-block";

export const metadata: Metadata = {
  title: "SMOB",
  description: "SMOKING & BEARING",
};

// const PermanentMarker = Permanent_Marker({
//   weight: ["400"],
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
// });

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="THE ROADS" />
        {/* <meta property="og:url" content="https://smobsolana.com/" /> */}
        <meta property="og:title" content="THE ROADS" />
        <meta property="og:description" content="THE ROADS" />
        {/* <meta property="og:image" content="http://smobsolana.com/header.webp" /> */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@smobsolana" />
        <meta name="twitter:url" content="http://smobsolana.com/" /> */}
        <meta name="twitter:title" content="THE ROADS" />
        <meta name="twitter:description" content="THE ROADS" />
        {/* <meta
          name="twitter:image"
          content="http://smobsolana.com/header.webp"
        /> */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
          rel="stylesheet"
        />
        <title>THE ROADS</title>
      </head>
      <body className="flex flex-col min-h-screen gap-16">
        <Navbar />
        <div className="flex flex-col gap-16 mt-20 w-full">{children}</div>
        <VehiclesBlock />
        <ReviewsBlock />
        <Footer />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></Script>
        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}r
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        /> */}
      </body>
    </html>
  );
}
