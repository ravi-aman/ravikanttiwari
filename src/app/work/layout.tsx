import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ravikant Tiwari",
  description:
    "Building modern, high-performing web experiences with clean design and functionality. Crafted with attention to detail and supported by the expertise of Frontend Tribe.",
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;}>) {
  return (
    <>
      {children}
    </>
  );
}
