import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "test-shop",
  description: "Тестовое задание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${interSans.variable}`}>
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
