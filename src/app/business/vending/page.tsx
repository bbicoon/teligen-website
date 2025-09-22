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

      {/* 주요 특징 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          주요 특징
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">24시간 무인 판매</h3>
            <p className="text-sm text-slate-600">연중무휴 상품 판매</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">다양한 결제</h3>
            <p className="text-sm text-slate-600">현금, 카드, 모바일 결제</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Thermometer className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">온도 관리</h3>
            <p className="text-sm text-slate-600">정밀한 온도 제어</p>
          </div>
        </div>
      </section>

      {/* 자동판매기 이미지 1 */}
      <section className="mb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/vending-2.webp"
              alt="텔리젠 자동판매기 내부 - 다양한 상품 진열과 온도 조절 시스템"
              width={600}
              height={800}
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* 판매 상품 */}
      <section className="mb-12">
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
      <section className="mb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/vending-1.png"
              alt="텔리젠 자동판매기 시스템 - 현대적인 스마트 자동판매기"
              width={600}
              height={800}
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

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
