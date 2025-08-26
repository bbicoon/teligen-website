import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ChatModal from "@/components/chat-modal";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TELIGEN - AI 기술로 비즈니스를 혁신합니다",
  description: "텔리젠의 AI 상담 솔루션과 무인결제 키오스크로 비즈니스 효율을 극대화하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <ChatModal />
      </body>
    </html>
  );
}
