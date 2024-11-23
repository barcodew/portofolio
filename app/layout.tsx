import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Barcodew",
    template: "%s | Barcodew",
  },
  description: "Frontend Website Developer",
  openGraph: {
    title: "Barcodew",
    description:
      "Frontend Website Developer",
    url: "https://barcodew.vercel.app/",
    siteName: "Barcodew",
    images: [
      {
        url: "https://media.discordapp.net/attachments/943936575820144672/1309870341690228876/BUATKAN_SAYA_GAMBAR_DENGAN_TULISAN__BARCODEW__BERLATAR_BELAKANG_HITAM_GELAP_DAN_SEDIKIT_GRADIASI_ABU_ABU_DAN_TULISANNYA_WARNA_PUTIH_SEPERTI_PADA_WEBSITE_INI_https___chronark.com_og.png_2.jpg?ex=67432751&is=6741d5d1&hm=9a9dce7b41d7b08deae123187c49b8457084e7d05e2db53f1bf22943a9221858&=&format=webp",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
