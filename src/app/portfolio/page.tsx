import type { Metadata } from "next";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "구축사례 - TELIGEN",
  description: "다양한 성공 사례를 통해 텔리젠의 검증된 기술력을 확인하세요.",
};

const portfolioItems = [
  {
    client: "꼬똥이네",
    industry: "애견 복합 문화공간",
    solution: "키오스크",
    description:
      "김포 최대 규모의 애견 운동장 '꼬똥이네'에 주문 및 결제 키오스크를 설치했습니다. 방문객들은 키오스크를 통해 수영장, 운동장 등 편의시설 이용과 함께 식음료를 간편하게 주문하여 고객 편의성과 매장 운영 효율을 크게 높였습니다.",
    image: "/ggoddong.webp",
    link: "https://blog.naver.com/teligen/223691121301",
  },
  {
    client: "오피스25",
    industry: "무인 문구점",
    solution: "키오스크 및 앱링커 연동",
    description:
      "오피스25 무인 문구점에 입/퇴실 관리 키오스크와 모바일 원격제어 앱링커를 연동하여 24시간 완벽한 무인 운영 시스템을 구축했습니다.",
    image: "/office25.webp",
  },
  {
    client: "와이케이",
    industry: "대형 매장",
    solution: "유통 전문 POS",
    description:
      "와이케이 매장에 포스기를 대량으로 운용하고 있으며, 문제없이 안정적으로 사용 중입니다. 대용량 거래 처리와 고객 관리를 위한 전문 POS 시스템으로 운영 효율을 극대화했습니다.",
    image: "/yk.jpg",
  },
  {
    client: "KT wiz샵",
    industry: "야구단 굿즈샵",
    solution: "키오스크",
    description:
      "KT wiz 야구단 공식 굿즈샵에 키오스크를 여러 대 설치하여 운영 중입니다. 경기 전후 팬들의 빠른 주문과 결제를 지원하며, 야구 팬들의 쇼핑 경험을 향상시켰습니다.",
    image: "/ktwiz.webp",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="구축사례" 
        description="다양한 업종에 성공적으로 도입된 텔리젠의 솔루션 구축 사례들을 소개합니다."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <Card
              key={item.client}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={`${item.client} 매장에 설치된 텔리젠 ${item.solution} 시스템의 실제 구축 사례`}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {item.client}
                    </a>
                  ) : (
                    item.client
                  )}
                </CardTitle>
                <div className="flex gap-2 pt-2">
                  <Badge variant="secondary">{item.industry}</Badge>
                  <Badge variant="outline">{item.solution}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
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
