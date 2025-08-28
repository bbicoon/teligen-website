import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '솔루션 - TELIGEN',
  description: '키오스크, 자동판매기, 유통포스, 앱링커 등 텔리젠의 혁신적인 매장 자동화 솔루션을 만나보세요.',
};

const solutions = [
  {
    name: "키오스크",
    description: "최신 터치스크린과 결제 시스템을 탑재하여 고객에게는 편리한 주문 경험을, 점주에게는 효율적인 매장 관리를 제공합니다. 어떤 인테리어에도 어울리는 세련된 디자인은 기본입니다.",
    features: ["직관적인 UI/UX 설계", "신용카드, 간편결제 완벽 지원", "매출 데이터 통계 분석", "업종별 맞춤형 소프트웨어"],
    image: "/placeholder-kiosk.svg"
  },
  {
    name: "자동판매기",
    description: "기존의 자판기를 넘어선 스마트 자동판매기입니다. 원격으로 재고를 확인하고, 다양한 결제 수단을 지원하여 24시간 안정적인 무인 판매 수익을 창출합니다.",
    features: ["실시간 재고 및 상태 관리", "카드/모바일 결제 연동", "다양한 상품 사이즈 지원", "강력한 보안 및 내구성"],
    image: "/placeholder-vending.svg"
  },
  {
    name: "유통포스 프로그램",
    description: "복잡한 유통 환경에 최적화된 POS 프로그램입니다. 재고 관리, 입출고, 고객 관리, 정산까지 하나의 프로그램으로 해결하여 유통 비즈니스의 효율을 극대화합니다.",
    features: ["실시간 재고 추적 및 관리", "바코드/QR코드 기반 입출고", "거래처 및 고객(CRM) 관리", "상세 매출 리포트 제공"],
    image: "/placeholder-pos.svg"
  },
  {
    name: "앱링커 (원격 제어)",
    description: "텔리젠의 모든 자동화 기기를 스마트폰 하나로 관리하세요. 앱링커를 통해 언제 어디서든 매장 상황을 확인하고 기기를 원격으로 제어할 수 있습니다.",
    features: ["실시간 기기 상태 모니터링", "원격 전원 제어 및 재부팅", "오류 발생 시 실시간 알림", "모바일 대시보드 제공"],
    image: "/placeholder-app.svg"
  }
];

export default function SolutionsPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            솔루션
          </h1>
          <p className="text-lg text-gray-600">
            텔리젠의 핵심 솔루션인 키오스크, 자동판매기, 유통포스, 앱링커에 대한 상세 정보를 제공합니다.
          </p>
        </div>

        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <div key={solution.name} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{solution.name}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map(feature => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`flex items-center justify-center bg-gray-100 rounded-lg p-8 h-80 ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                {/* 가상 이미지 Placeholder */}
                <Image src="https://placehold.co/400x300/e2e8f0/adb5bd?text=Image" alt={`${solution.name} 이미지`} width={400} height={300} className="rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
