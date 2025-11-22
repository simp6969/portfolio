import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import MouseFollower from "../components/MouseFollower";

const poppins = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Ariunbold Portfolio",
  description: "Ariunbold's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <MouseFollower />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
