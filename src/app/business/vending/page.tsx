import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, Clock, DollarSign, MapPin, Thermometer, Wifi } from 'lucide-react';

export const metadata: Metadata = {
  title: '자동판매기 - TELIGEN',
  description: '최신 기술이 적용된 스마트 자판기로 24시간 무인 판매 솔루션을 구축할 수 있습니다.',
};

export default function VendingPage() {
  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-slate-100 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Package className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800">자동판매기</h1>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            최신 기술이 적용된 스마트 자판기로 24시간 무인 판매 솔루션을 구축할 수 있습니다.
          </p>
        </div>

        {/* 주요 특징 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">주요 특징</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">24시간 무인 판매</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  언제든지 고객이 원하는 상품을 구매할 수 있는 24시간 무인 판매 시스템
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">다양한 결제 수단</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  현금, 카드, 모바일 결제 등 다양한 결제 수단을 지원합니다
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Thermometer className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">온도 관리</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  상품의 신선도를 유지하는 정밀한 온도 관리 시스템
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 스마트 기능 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">스마트 기능</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Wifi className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">원격 모니터링</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  실시간으로 재고 상태, 매출 현황, 기기 상태를 모니터링할 수 있습니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-xl">위치 기반 서비스</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  GPS를 활용한 위치 기반 서비스로 고객에게 최적의 상품을 추천합니다.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 판매 상품 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">판매 상품</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              '음료', '간식', '과자', '아이스크림',
              '생활용품', '문구용품', '의료용품', '기타 상품'
            ].map((product) => (
              <Badge key={product} variant="secondary" className="text-center py-3 text-lg">
                {product}
              </Badge>
            ))}
          </div>
        </section>

        {/* 설치 장소 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">추천 설치 장소</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { place: '사무실', description: '직원들의 편의를 위한 다양한 상품 제공' },
              { place: '학교', description: '학생들의 간식 및 문구용품 판매' },
              { place: '병원', description: '환자 및 보호자들을 위한 편의 상품' },
              { place: '공항/역', description: '이동 중인 고객들을 위한 즉석 상품' },
              { place: '아파트', description: '주민들의 생활용품 구매 편의 제공' },
              { place: '공장', description: '근로자들의 간식 및 음료 판매' }
            ].map(({ place, description }) => (
              <Card key={place} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{place}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
