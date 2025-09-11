import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Wifi,
  Eye,
  Bell,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "하이퍼엣지 - TELIGEN",
  description: "POS/키오스크 연동 모바일 관리 솔루션",
};

export default function ApplinkerPage() {
  return (
    <div>
      <PageHeader 
        title="하이퍼엣지" 
        description="POS/키오스크 연동 모바일 관리 솔루션"
      />

      {/* 주요 기능 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          주요 기능
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Wifi className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">하이퍼 원격관리 (자동매핑)</h3>
            <p className="text-sm text-slate-600">설치코드와 설치암호만 입력하면 바로 PC에 접속</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">하이퍼 원격관리 (QR등록)</h3>
            <p className="text-sm text-slate-600">QR코드 스캔으로 간편한 등록 및 연결</p>
          </div>
        </div>
      </section>

      {/* 고급 기능 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          고급 기능
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Bell className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">서드파티 앱 연동</h3>
            <p className="text-sm text-slate-600">다양한 외부 앱과 연동</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">모바일 환경 지원</h3>
            <p className="text-sm text-slate-600">모바일에서 다양한 업무 처리</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Smartphone className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">B2B 솔루션</h3>
            <p className="text-sm text-slate-600">기업용 전문 솔루션</p>
          </div>
        </div>
      </section>

      {/* 사용법 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          간편한 사용법
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">하이퍼엣지 다운로드</h3>
            <p className="text-sm text-slate-600">Google Play Store에서 앱 설치</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-green-600">2</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">연결 방식 선택</h3>
            <p className="text-sm text-slate-600">자동매핑 또는 QR등록 방식 선택</p>
          </div>
        </div>
      </section>

      {/* Google Play Store 링크 */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Image
              src="/google-play logo.webp"
              alt="Google Play Store에서 하이퍼엣지 앱을 다운로드할 수 있는 공식 스토어 로고"
              width={40}
              height={40}
            />
            <h3 className="text-xl font-bold text-slate-800">
              하이퍼엣지 다운로드
            </h3>
          </div>
          <p className="text-slate-600 mb-4">
            Google Play Store에서 하이퍼엣지를 다운로드하세요
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <a
              href="https://play.google.com/store/apps/details?id=com.zeonix.hyperedge&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play Store에서 다운로드
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
