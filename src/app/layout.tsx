import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/footer"));

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TELIGEN - 매장 자동화 솔루션",
    template: "%s | TELIGEN",
  },
  description:
    "키오스크, 자동판매기, 유통포스, 앱링커 등 매장 자동화에 필요한 모든 솔루션을 제공합니다.",
  icons: {
    icon: "/teligen-logo.webp",
    shortcut: "/teligen-logo.webp",
    apple: "/teligen-logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
