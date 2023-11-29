import { Gabarito } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "InsanimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-color-dark`}
        suppressContentEditableWarning={true}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
