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
    default: "TELIGEN - 매장 자동화 솔루션 전문 기업",
    template: "%s | TELIGEN",
  },
  description:
    "키오스크, 자동판매기, 유통포스, 하이퍼엣지 등 매장 자동화에 필요한 모든 솔루션을 제공하는 텔리젠입니다. 24시간 무인 운영부터 스마트 결제까지 완벽한 매장 자동화 솔루션을 만나보세요.",
  keywords: [
    "키오스크",
    "자동판매기", 
    "유통포스",
    "하이퍼엣지",
    "매장 자동화",
    "무인 매장",
    "POS 시스템",
    "텔리젠"
  ],
  authors: [{ name: "TELIGEN" }],
  creator: "TELIGEN",
  publisher: "TELIGEN",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.teligen.co.kr",
    title: "TELIGEN - 매장 자동화 솔루션 전문 기업",
    description: "키오스크, 자동판매기, 유통포스, 하이퍼엣지 등 매장 자동화에 필요한 모든 솔루션을 제공합니다.",
    siteName: "TELIGEN",
  },
  twitter: {
    card: "summary_large_image",
    title: "TELIGEN - 매장 자동화 솔루션 전문 기업",
    description: "키오스크, 자동판매기, 유통포스, 하이퍼엣지 등 매장 자동화에 필요한 모든 솔루션을 제공합니다.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/teligen-logo.webp", sizes: "32x32", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
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
