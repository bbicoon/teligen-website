import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상담문의 - TELIGEN",
  description: "텔리젠에 문의하세요. 키오스크, 자동판매기, 유통포스, 하이퍼엣지 관련 상담을 받습니다.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
