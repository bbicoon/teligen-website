import type { Metadata } from "next";
import {
  BarChart3,
  Users,
  Package,
  CreditCard,
  Settings,
} from "lucide-react";
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

      {/* 주요 기능 */}
      <section className="mb-12">
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
