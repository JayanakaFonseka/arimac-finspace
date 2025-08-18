import type { Metadata } from "next";
import Header from "./components/header/Header";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

// const inter = Inter({
//   subsets: ["latin"],
// });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
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
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className={`antialiased scroll-smooth min-h-screen`}>
        <Header />
        <div className="max-w-[1376px] px-4 md:p-10 md:pt-6 mx-auto">
          <div className="md:pt-8">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
