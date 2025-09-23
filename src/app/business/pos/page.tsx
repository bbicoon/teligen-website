import type { Metadata } from "next";
import {
  BarChart3,
  Users,
  Package,
  CreditCard,
  Settings,
  Monitor,
} from "lucide-react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "유통포스 프로그램 - TELIGEN",
  description: "유통업 전용 POS 시스템",
};

export default function PosPage() {
  return (
    <div>
      <PageHeader 
        title="유통포스 프로그램" 
        description="유통업 전용 POS 시스템"
      />

      {/* 메인 이미지 섹션 */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-800">
                전문 유통포스 시스템
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                유통업에 특화된 텔리젠 POS 시스템으로 매장 운영을 효율화하세요. 
                재고 관리부터 고객 관리, 매출 분석까지 모든 기능을 하나의 
                시스템에서 통합 관리할 수 있습니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">실시간 재고 관리</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">매출 분석 리포트</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">고객 관리 시스템</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/webpos.webp"
                  alt="유통포스 프로그램 화면"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-contain bg-gray-50"
                />
              </div>
              {/* 데코레이션 요소 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 기능 */}
      <section className="mb-12 mt-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          주요 기능
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">재고 관리</h3>
            <p className="text-sm text-slate-600">실시간 재고 추적</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">매출 분석</h3>
            <p className="text-sm text-slate-600">상세한 매출 리포트</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">고객 관리</h3>
            <p className="text-sm text-slate-600">고객 정보 및 구매 이력</p>
          </div>
        </div>
      </section>

      {/* Delphi 이미지 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Image
          src="/delphipos.png"
          alt="Delphi 개발 환경"
          width={600}
          height={400}
          className="w-full h-[400px] object-contain bg-gray-50"
        />
      </div>

      {/* 시스템 특징 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          시스템 특징
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">다양한 결제</h3>
            <p className="text-sm text-slate-600">현금, 카드, 모바일 결제</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Settings className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">맞춤형 설정</h3>
            <p className="text-sm text-slate-600">업종별 최적화</p>
          </div>
        </div>
      </section>

      {/* 적용 업종 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          적용 업종
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "편의점",
            "마트",
            "문구점",
            "약국",
            "의류점",
            "화장품",
            "전자제품",
            "기타 유통업",
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
    </div>
  );
}
