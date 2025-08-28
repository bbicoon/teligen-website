import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: '미디어 - TELIGEN',
  description: '텔리젠의 최신 소식, 보도자료, 업계 동향을 전해드립니다.',
};

const mediaItems = [
  {
    category: "보도자료",
    title: "텔리젠, '스마트 상점' 부문 기술혁신 대상 수상",
    date: "2025년 8월 15일",
    excerpt: "텔리젠이 자체 개발한 유통 전문 POS와 앱링커 솔루션의 기술력을 인정받아 '2025 스마트 상점 기술혁신 대상'을 수상했습니다."
  },
  {
    category: "업데이트",
    title: "앱링커 2.0 출시: 더욱 강력해진 원격 관리 기능",
    date: "2025년 7월 28일",
    excerpt: "사용자 피드백을 반영하여 UI를 개선하고, 다중 기기 제어 기능을 추가한 앱링커 2.0 버전을 새롭게 출시했습니다."
  },
  {
    category: "기술 동향",
    title: "2025년 무인 매장 트렌드: 키오스크를 넘어 스마트 자판기로",
    date: "2025년 6월 10일",
    excerpt: "단순 결제를 넘어 재고 관리와 데이터 분석까지 가능한 스마트 자판기가 새로운 무인 매장의 핵심으로 떠오르고 있습니다."
  }
];

export default function MediaPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            미디어
          </h1>
          <p className="text-lg text-gray-600">
            텔리젠 관련 뉴스, 보도자료, 기술 동향 등 최신 소식을 전해드립니다.
          </p>
        </div>

        <div className="space-y-8">
          {mediaItems.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Badge>{item.category}</Badge>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">{item.excerpt}</CardDescription>
                <Button variant="link" className="p-0">자세히 보기 →</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
