import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "사업 분야 - TELIGEN",
  description:
    "키오스크, 자동판매기, 유통포스, 하이퍼엣지 등 텔리젠의 혁신적인 사업 분야를 소개합니다. 24시간 무인 운영부터 스마트 결제까지 완벽한 매장 자동화 솔루션을 만나보세요.",
  keywords: [
    "키오스크",
    "자동판매기",
    "유통포스",
    "하이퍼엣지",
    "매장 자동화",
    "무인 매장",
    "POS 시스템"
  ],
};

const solutions = [
  {
    name: "키오스크",
    description: "24시간 무인 주문 및 결제 시스템",
    features: [
      "직관적인 UI/UX",
      "다양한 결제 지원",
      "매출 분석",
      "업종별 맞춤형",
    ],
    image: "/placeholder-kiosk.svg",
    href: "/business/kiosk",
  },
  {
    name: "자동판매기",
    description: "스마트 무인 판매 시스템",
    features: [
      "실시간 재고 관리",
      "모바일 결제",
      "다양한 상품 지원",
      "강력한 보안",
    ],
    image: "/placeholder-vending.svg",
    href: "/business/vending",
  },
  {
    name: "유통포스 프로그램",
    description: "유통업 전용 POS 시스템",
    features: [
      "재고 추적",
      "바코드 관리",
      "고객 관리",
      "매출 리포트",
    ],
    image: "/placeholder-pos.svg",
    href: "/business/pos",
  },
  {
    name: "하이퍼엣지",
    description: "POS/키오스크 연동 모바일 관리",
    features: [
      "자동매핑 연결",
      "QR등록 연결",
      "서드파티 앱 연동",
      "B2B 솔루션",
    ],
    image: "/placeholder-app.svg",
    href: "/business/hyperedge",
    downloadLink:
      "https://play.google.com/store/apps/details?id=com.zeonix.hyperedge&pcampaignid=web_share",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="사업 분야" 
        description="텔리젠은 매장 자동화에 필요한 모든 사업 영역을 포괄합니다."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <Link key={solution.name} href={solution.href} className="block">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                {/* 이미지 영역 - 더 크게 */}
                <div className="relative h-64 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  {solution.name === "키오스크" ? (
                    <Image
                      src="/kiosk.webp"
                      alt="다양한 업종에 설치된 흰색 텔리젠 키오스크 주문 시스템"
                      width={400}
                      height={300}
                      className="rounded-lg object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : solution.name === "자동판매기" ? (
                    <Image
                      src="/vending machine.webp"
                      alt="현대적인 스마트 자동판매기로 음료와 간식을 판매하는 무인 판매 시스템"
                      width={340}
                      height={255}
                      className="rounded-lg object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : solution.name === "유통포스 프로그램" ? (
                    <Image
                      src="/webpos.webp"
                      alt="유통업에 특화된 전문 POS 프로그램 화면으로 재고 관리와 매출 분석을 제공하는 시스템"
                      width={400}
                      height={300}
                      className="rounded-lg object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : solution.name === "하이퍼엣지" ? (
                    <div className="flex flex-col items-center">
                      <Image
                        src="/hyperedge.webp"
                        alt="POS/키오스크와 연동되는 다양한 서드파티 앱을 모바일에서 사용할 수 있는 하이퍼엣지 앱 아이콘"
                        width={150}
                        height={150}
                        className="rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      <p className="text-gray-600 font-medium text-lg">하이퍼엣지</p>
                    </div>
                  ) : (
                    <Image
                      src="https://placehold.co/400x300/e2e8f0/adb5bd?text=Image"
                      alt={`${solution.name} 이미지`}
                      width={400}
                      height={300}
                      className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                
                {/* 텍스트 영역 - 간소화 */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {solution.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    {solution.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-gray-700 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Google Play Store 다운로드 섹션 */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 border border-orange-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              하이퍼엣지 다운로드
            </h3>
            <p className="text-slate-600 mb-6">
              지금 바로 Google Play Store에서 하이퍼엣지를 다운로드하고 스마트한
              매장 관리를 시작하세요.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.zeonix.hyperedge&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/google-play logo.webp"
                alt="Google Play Store에서 하이퍼엣지 앱을 다운로드할 수 있는 공식 스토어 로고"
                width={180}
                height={54}
                className="h-14 w-auto hover:opacity-80 transition-opacity mx-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
