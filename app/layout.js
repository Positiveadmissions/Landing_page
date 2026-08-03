import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Positive Admission Guidance | BDS, MDS & MBBS Admissions",
  description: "Expert admission guidance for BDS, MDS and MBBS admissions. 5000+ students guided with 95% success rate. Free counselling available across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
