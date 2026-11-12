import { Anton, Archivo } from "next/font/google";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import "./globals.css";

const display = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const body = Archivo({ subsets: ["latin"], weight: ["400", "600", "800"], variable: "--font-body" });

export const metadata = {
  title: "Bimasakti Racing Team",
  description: "Official Bimasakti Racing Team UGM Website",
  icons: { icon: "/icon.png" },
  openGraph: {
    title: "Bimasakti Racing Team",
    description: "Official Bimasakti Racing Team UGM Website",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bimasakti Racing Team",
    description: "Official Bimasakti Racing Team UGM Website",
    images: ["/icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Kalau web di-refresh di halaman selain Home, langsung pindah ke Home.
            Dijalankan sebelum halaman tampil supaya tidak sempat kelihatan. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var n=performance.getEntriesByType("navigation")[0];if(n&&n.type==="reload"&&location.pathname!=="/")location.replace("/")}catch(e){}`,
          }}
        />
      </head>
      <body>
        {/* Di layout supaya cuma muncul saat web di-reload, bukan saat pindah halaman */}
        <Loader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
