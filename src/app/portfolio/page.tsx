import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: '구축사례 - TELIGEN',
  description: '다양한 성공 사례를 통해 텔리젠의 검증된 기술력을 확인하세요.',
};

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "스타벅스 프랜차이즈 카페",
      description: "키오스크 15대 도입",
      image: "/placeholder-cafe.jpg",
    },
    {
      id: 2,
      title: "롯데마트 편의점",
      description: "자동판매기 8대 설치",
      image: "/placeholder-convenience.jpg",
    },
    {
      id: 3,
      title: "올리브영 화장품 매장",
      description: "유통포스 시스템 구축",
      image: "/placeholder-beauty.jpg",
    },
  ];

  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          구축사례
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center mb-16">
          다양한 업종에 성공적으로 도입된 텔리젠의 솔루션 구축 사례들을 소개합니다.
        </p>

        {/* 구축사례 그리드 */}
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">이미지</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
