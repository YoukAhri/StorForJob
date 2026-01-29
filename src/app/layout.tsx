import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/providers/provider"; // Обёртка для провайдеров
import Header from "@/components/UI/header"; // Подключение навбара
import Footer from "@/components/UI/footer"; // Подключение навбара


import { Roboto } from 'next/font/google';
import { Montserrat } from 'next/font/google';


//  шрифты
const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700'], 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Северяночка",
  description: "Онлайн магазин товаров 'Северяночка'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">  
      <head>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Header />
            {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
