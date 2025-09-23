import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Shield,
  Users,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "키오스크 - TELIGEN",
  description:
    "다양한 업종에 최적화된 무인 주문 및 결제 시스템으로 운영 효율을 높여보세요.",
};

export default function KioskPage() {
  return (
    <div>
      <PageHeader 
        title="키오스크" 
        description="24시간 무인 주문 및 결제 시스템"
      />

      {/* 메인 이미지 섹션 */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-800">
                스마트 키오스크 시스템
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                텔리젠 키오스크는 24시간 무인 운영으로 인건비를 절약하고 매출을 극대화합니다. 
                직관적인 터치 인터페이스와 안전한 결제 시스템으로 고객 만족도를 높이고, 
                다양한 업종에 최적화된 솔루션을 제공합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">24시간 무인 운영</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">안전한 결제 시스템</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">직관적인 UI/UX</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/kiosk-1.jpg"
                  alt="텔리젠 키오스크 시스템 - 매장에서 사용 중인 메인 키오스크"
                  width={600}
                  height={800}
                  className="w-full h-[600px] object-contain bg-gray-50"
                />
              </div>
              {/* 데코레이션 요소 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 적용 업종 */}
      <section className="mb-12 mt-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          적용 업종
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "음식점",
            "카페",
            "편의점",
            "문구점",
            "약국",
            "미용실",
            "세탁소",
            "기타 서비스업",
          ].map((industry) => (
            <div
              key={industry}
              className="bg-white rounded-lg p-4 text-center shadow-sm border"
            >
              <h3 className="font-semibold text-slate-800">{industry}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 키오스크 이미지 2 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Image
          src="/kiosk-3.jpg"
          alt="텔리젠 키오스크 설치 현장 - 다양한 매장 환경에 최적화"
          width={800}
          height={500}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* 키오스크 이미지 3 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Image
          src="/kiosk-2.png"
          alt="텔리젠 키오스크 UI 화면 - 직관적인 터치 인터페이스"
          width={800}
          height={500}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* 하이퍼엣지 연동 */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Smartphone className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-slate-800">
              하이퍼엣지와의 완벽한 연동
            </h3>
          </div>
          <p className="text-slate-600 mb-4">
            POS/키오스크 연동 모바일 관리 솔루션
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/business/hyperedge">하이퍼엣지 자세히 보기</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
