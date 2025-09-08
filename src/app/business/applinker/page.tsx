import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Wifi,
  Eye,
  Hand,
  Bell,
  Calendar,
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "앱링커 - TELIGEN",
  description: "스마트폰 원격 관리",
};

export default function ApplinkerPage() {
  return (
    <div>
      {/* 헤더 섹션 */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <Image
              src="/applinker-icon.webp"
              alt="스마트폰에서 키오스크를 원격으로 제어할 수 있는 앱링커 모바일 앱 아이콘"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">앱링커</h1>
        </div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          스마트폰 원격 관리
        </p>
      </div>

      {/* 주요 기능 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          주요 기능
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Wifi className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">원격 연결</h3>
            <p className="text-sm text-slate-600">스마트폰으로 원격 제어</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">뷰어모드</h3>
            <p className="text-sm text-slate-600">상태 모니터링</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Hand className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">터치모드</h3>
            <p className="text-sm text-slate-600">원격 조작</p>
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
            <h3 className="font-semibold text-slate-800 mb-2">실시간 알림</h3>
            <p className="text-sm text-slate-600">장애 즉시 알림</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">스케줄러</h3>
            <p className="text-sm text-slate-600">자동화 작업</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Smartphone className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">마이크 기능</h3>
            <p className="text-sm text-slate-600">고객과 소통</p>
          </div>
        </div>
      </section>

      {/* 사용법 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          간편한 사용법
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">앱 다운로드</h3>
            <p className="text-sm text-slate-600">스마트폰에 앱 설치</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-green-600">2</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">QR코드 스캔</h3>
            <p className="text-sm text-slate-600">단말기 등록</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-orange-600">3</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">원격 관리</h3>
            <p className="text-sm text-slate-600">즉시 사용 가능</p>
          </div>
        </div>
      </section>

      {/* Google Play Store 링크 */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Image
              src="/google-play logo.webp"
              alt="Google Play Store에서 앱링커 앱을 다운로드할 수 있는 공식 스토어 로고"
              width={40}
              height={40}
            />
            <h3 className="text-xl font-bold text-slate-800">
              앱링커 다운로드
            </h3>
          </div>
          <p className="text-slate-600 mb-4">
            Google Play Store에서 앱링커를 다운로드하세요
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <a
              href="https://play.google.com/store/apps/details?id=com.zeonix.applinker"
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
