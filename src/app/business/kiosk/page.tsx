import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MonitorSmartphone,
  Clock,
  Shield,
  Users,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "키오스크 - TELIGEN",
  description:
    "다양한 업종에 최적화된 무인 주문 및 결제 시스템으로 운영 효율을 높여보세요.",
};

export default function KioskPage() {
  return (
    <div>
      {/* 헤더 섹션 */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <MonitorSmartphone className="w-6 h-6 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">키오스크</h1>
        </div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          24시간 무인 주문 및 결제 시스템
        </p>
      </div>

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
            <Badge
              key={industry}
              variant="secondary"
              className="text-center py-2 text-sm"
            >
              {industry}
            </Badge>
          ))}
        </div>
      </section>

      {/* 앱링커 연동 */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Smartphone className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-slate-800">
              앱링커와의 완벽한 연동
            </h3>
          </div>
          <p className="text-slate-600 mb-4">
            스마트폰으로 언제 어디서나 원격 관리 가능
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/business/applinker">앱링커 자세히 보기</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
