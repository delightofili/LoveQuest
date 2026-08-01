import SplashScreen from "@/components/SplashScreen";
import "./globals.css";
/* import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
}); */

export const metadata = {
  title: {
    default: "LoveQuest",
    template: "%s | LoveQuest",
  },

  description:
    "Create unforgettable interactive love experiences with memories, photos, music and surprises.",

  metadataBase: new URL("https://loveequest.vercel.app"),

  openGraph: {
    title: "LoveQuest",

    description: "Create unforgettable interactive love experiences.",

    url: "https://loveequest.vercel.app",

    siteName: "LoveQuest",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "LoveQuest",

    description: "Create unforgettable interactive love experiences.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
