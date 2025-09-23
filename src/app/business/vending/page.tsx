import type { Metadata } from "next";
import Image from "next/image";
import { Clock, DollarSign, Thermometer, Package } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "자동판매기 - TELIGEN",
  description: "스마트 무인 판매 시스템",
};

export default function VendingPage() {
  return (
    <div>
      <PageHeader 
        title="자동판매기" 
        description="스마트 무인 판매 시스템"
      />

      {/* 메인 이미지 섹션 */}
      <section className="py-12 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-800">
                스마트 자동판매기
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                텔리젠 자동판매기는 24시간 무인 판매로 매장 운영을 효율화합니다. 
                다양한 결제 수단과 정밀한 온도 관리로 고객에게 최적의 서비스를 
                제공하며, 매출 증대와 인건비 절약을 동시에 실현합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">24시간 무인 판매</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">다양한 결제 수단</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">정밀한 온도 관리</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/vending-2.webp"
                  alt="텔리젠 자동판매기 내부 - 다양한 상품 진열과 온도 조절 시스템"
                  width={600}
                  height={800}
                  className="w-full h-[600px] object-contain bg-gray-50"
                />
              </div>
              {/* 데코레이션 요소 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500 rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 판매 상품 */}
      <section className="mb-12 mt-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          판매 상품
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "음료",
            "간식",
            "과자",
            "아이스크림",
            "생활용품",
            "문구용품",
            "의료용품",
            "기타 상품",
          ].map((product) => (
            <div
              key={product}
              className="bg-white rounded-lg p-4 text-center shadow-sm border"
            >
              <h3 className="font-semibold text-slate-800">{product}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 자동판매기 이미지 2 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Image
          src="/vending-1.png"
          alt="텔리젠 자동판매기 시스템 - 현대적인 스마트 자동판매기"
          width={600}
          height={800}
          className="w-full h-[600px] object-contain bg-gray-50"
        />
      </div>

      {/* 설치 장소 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          추천 설치 장소
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "사무실",
            "학교",
            "병원",
            "공항/역",
            "아파트",
            "공장",
          ].map((place) => (
            <div
              key={place}
              className="bg-white rounded-lg p-4 text-center shadow-sm border"
            >
              <h3 className="font-semibold text-slate-800">{place}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
