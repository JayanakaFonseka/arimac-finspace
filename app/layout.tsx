import type { Metadata } from "next";
import Header from "./components/header/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arimac Finspace",
  description: "Arimac Finspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <div className="max-w-[1376px] p-10 pt-6 min-h-screen mx-auto">
          <Header />
          <div className="pt-8">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
