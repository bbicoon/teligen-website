import type { Metadata } from "next";
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

      {/* 주요 특징 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          주요 특징
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">24시간 무인 운영</h3>
            <p className="text-sm text-slate-600">인건비 절약 및 매출 극대화</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">안전한 결제</h3>
            <p className="text-sm text-slate-600">다양한 결제 수단 지원</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">고객 만족도 향상</h3>
            <p className="text-sm text-slate-600">직관적인 UI/UX</p>
          </div>
        </div>
      </section>

      {/* 적용 업종 */}
      <section className="mb-12">
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
