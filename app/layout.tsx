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
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth min-h-screen`}
      >
        <div className="max-w-[1376px] px-4 md:p-10 md:pt-6 mx-auto">
          <Header />
          <div className="md:pt-8">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
