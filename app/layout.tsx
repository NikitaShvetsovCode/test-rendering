import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";

const nunitoSans = Nunito_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["cyrillic", "latin", "latin-ext"],
  variable: "--nunitoSans",
});

export const metadata: Metadata = {
  title: "Test rendering",
  description: "description for SEO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${nunitoSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
