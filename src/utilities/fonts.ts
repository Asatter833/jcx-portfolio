import { Noto_Sans, Bodoni_Moda } from "next/font/google";
import "../styles/globals.css";

export const noto_sans = Noto_Sans({
  weight: ["400", "500", "600"],
  subsets: ["cyrillic"],
  variable: "--font-noto",
});

export const bodoni_moda = Bodoni_Moda({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});
