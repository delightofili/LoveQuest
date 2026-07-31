import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "LoveQuest",

    template: "%s | LoveQuest",
  },

  description:
    "Create beautiful interactive love stories for the people you love.",

  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ),

  openGraph: {
    title: "LoveQuest",

    description: "Create unforgettable interactive love stories.",

    siteName: "LoveQuest",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
