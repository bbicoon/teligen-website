import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MonitorSmartphone, Clock, Shield, Users, Smartphone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '키오스크 - TELIGEN',
  description: '다양한 업종에 최적화된 무인 주문 및 결제 시스템으로 운영 효율을 높여보세요.',
};

export default function KioskPage() {
  return (
    <div>
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <MonitorSmartphone className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800">키오스크</h1>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            다양한 업종에 최적화된 무인 주문 및 결제 시스템으로 운영 효율을 높여보세요.
          </p>
        </div>

        {/* 주요 특징 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">주요 특징</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">24시간 무인 운영</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  언제든지 고객이 이용할 수 있는 24시간 무인 주문 시스템
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">안전한 결제</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  다양한 결제 수단 지원으로 안전하고 편리한 결제 환경 제공
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">고객 만족도 향상</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  직관적인 UI/UX로 고객의 주문 경험을 향상시킵니다
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 적용 업종 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">적용 업종</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              '음식점', '카페', '편의점', '문구점',
              '약국', '미용실', '세탁소', '기타 서비스업'
            ].map((industry) => (
              <Badge key={industry} variant="secondary" className="text-center py-3 text-lg">
                {industry}
              </Badge>
            ))}
          </div>
        </section>

        {/* 앱링커 연동 */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-800">앱링커와의 완벽한 연동</h3>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-lg mb-6">
                키오스크를 앱링커와 연동하여 스마트폰으로 언제 어디서나 원격 관리가 가능합니다.
              </CardDescription>
              <div className="flex justify-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/business/applinker">앱링커 자세히 보기</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
    </div>
  );
}
