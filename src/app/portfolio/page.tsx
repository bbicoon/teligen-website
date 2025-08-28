import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: '구축사례 - TELIGEN',
  description: '다양한 성공 사례를 통해 텔리젠의 검증된 기술력을 확인하세요.',
};

const portfolioItems = [
  {
    client: "메가딜 커피",
    industry: "프랜차이즈 카페",
    solution: "키오스크 200대",
    description: "전국 100여 개 매장에 키오스크를 도입하여 피크타임 주문 처리 속도를 50% 향상시키고 인건비를 절감했습니다.",
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=MegaDeal+Coffee"
  },
  {
    client: "스마트 스터디카페",
    industry: "교육 공간",
    solution: "키오스크 및 앱링커 연동",
    description: "입/퇴실 관리 키오스크와 모바일 원격제어 앱링커를 연동하여 24시간 완벽한 무인 운영 시스템을 구축했습니다.",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Smart+Study"
  },
  {
    client: "오늘의 밀키트",
    industry: "무인 스토어",
    solution: "스마트 자동판매기",
    description: "유동인구가 많은 오피스 상권에 밀키트 스마트 자동판매기를 설치하여 24시간 추가 매출을 확보했습니다.",
    image: "https://placehold.co/600x400/f97316/ffffff?text=Today's+Meal"
  },
  {
    client: "행복마트",
    industry: "중소형 마트",
    solution: "유통 전문 POS",
    description: "복잡했던 상품 재고와 회원 관리를 유통 전문 POS로 교체하며 업무 효율을 2배 이상 높였습니다.",
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Happy+Mart"
  },
];

export default function PortfolioPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            구축사례
          </h1>
          <p className="text-lg text-gray-600">
            다양한 업종에 성공적으로 도입된 텔리젠의 솔루션 구축 사례들을 소개합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.client} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image src={item.image} alt={`${item.client} 구축사례 이미지`} width={600} height={400} className="w-full h-64 object-cover" />
              <CardHeader>
                <CardTitle className="text-2xl">{item.client}</CardTitle>
                <div className="flex gap-2 pt-2">
                  <Badge variant="secondary">{item.industry}</Badge>
                  <Badge variant="outline">{item.solution}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
