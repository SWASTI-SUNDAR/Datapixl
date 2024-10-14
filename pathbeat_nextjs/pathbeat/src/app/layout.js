import { IBM_Plex_Sans, Merriweather, Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Pathbeat",

  description:
    "Discover India's rich history through immersive audio tours. Immerse yourself in the stories of Hampi, Agra, Delhi, Jaipur, Udaipur, and more with Pathbeat's expertly crafted audio guides. Explore hidden gems, learn fascinating facts, and experience these iconic destinations like never before.",
};

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pathbeat</title>

        <link rel="icon" type="image/svg+xml" href="/logo/favicon.png" />

        <meta
          name="description"
          content="Discover India's rich history through immersive audio tours. Immerse yourself in the stories of Hampi, Agra, Delhi, Jaipur, Udaipur, and more with Pathbeat's expertly crafted audio guides. Explore hidden gems, learn fascinating facts, and experience these iconic destinations like never before."
        />

        <meta
          property="og:title"
          content="Pathbeat Audio-Visual Tours for important tourist destinations in India"
        />
        <meta
          property="og:description"
          content="Discover India's rich history through immersive audio tours. Immerse yourself in the stories of Hampi, Agra, Delhi, Jaipur, Udaipur, and more with Pathbeat's expertly crafted audio guides. Explore hidden gems, learn fascinating facts, and experience these iconic destinations like never before."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathbeat.in/" />
        <meta
          property="og:image"
          content="https://d2uw1ycl6v35t8.cloudfront.net/others/optimized_website_background.jpeg"
        />
        <meta
          property="og:image:alt"
          content="Pathbeat Logo or Image representing the audio-visual tours"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Pathbeat" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="hi_IN" />
        <meta property="og:locale:alternate" content="hi_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pathbeat Audio-Visual Tours for important tourist destinations in India"
        />
        <meta
          name="twitter:description"
          content="Discover India's rich history through immersive audio tours. Immerse yourself in the stories of Hampi, Agra, Delhi, Jaipur, Udaipur, and more with Pathbeat's expertly crafted audio guides. Explore hidden gems, learn fascinating facts, and experience these iconic destinations like never before."
        />
        <meta
          name="twitter:image"
          content="https://d2uw1ycl6v35t8.cloudfront.net/others/optimized_website_background.jpeg"
        />
        <meta
          name="twitter:image:alt"
          content="Pathbeat Logo or Image representing the audio-visual tours"
        />
        <meta name="twitter:site" content="@pathbeat" />
        <meta name="twitter:creator" content="@pathbeat" />
      </head>

      <body
        className={`${ibmPlexSans.variable} ${merriweather.variable} ${workSans.variable}`}
      >
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
