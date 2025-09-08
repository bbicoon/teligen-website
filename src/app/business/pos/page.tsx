import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, BarChart3, Users, Package, CreditCard, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: '유통포스 프로그램 - TELIGEN',
  description: '재고 관리부터 고객 관리까지, 유통업에 특화된 전문 POS 프로그램으로 매장을 스마트하게 관리하세요.',
};

export default function PosPage() {
  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-slate-100 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800">유통포스 프로그램</h1>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            재고 관리부터 고객 관리까지, 유통업에 특화된 전문 POS 프로그램으로 매장을 스마트하게 관리하세요.
          </p>
        </div>

        {/* 주요 기능 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">주요 기능</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">재고 관리</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  실시간 재고 현황 파악 및 자동 발주 시스템으로 효율적인 재고 관리
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">매출 분석</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  상세한 매출 분석 리포트로 비즈니스 인사이트를 제공합니다
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">고객 관리</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  고객 정보 관리 및 구매 이력 분석으로 맞춤형 서비스 제공
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 시스템 특징 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">시스템 특징</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">다양한 결제 수단</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  현금, 카드, 모바일 결제, 포인트 적립 등 다양한 결제 수단을 지원합니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Settings className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-xl">맞춤형 설정</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  매장 규모와 업종에 맞는 맞춤형 설정으로 최적의 운영 환경을 제공합니다.
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
              '편의점', '마트', '문구점', '약국',
              '의류점', '화장품', '전자제품', '기타 유통업'
            ].map((industry) => (
              <Badge key={industry} variant="secondary" className="text-center py-3 text-lg">
                {industry}
              </Badge>
            ))}
          </div>
        </section>

        {/* 프로그램 장점 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">프로그램 장점</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '사용자 친화적', description: '직관적인 인터페이스로 누구나 쉽게 사용 가능' },
              { title: '안정성', description: '검증된 시스템으로 안정적인 운영 보장' },
              { title: '확장성', description: '매장 규모에 따라 유연하게 확장 가능' },
              { title: '보안', description: '데이터 보안 및 백업 시스템으로 안전한 운영' },
              { title: '지원', description: '전문 기술 지원팀의 24시간 고객 지원' },
              { title: '업데이트', description: '지속적인 기능 개선 및 업데이트 제공' }
            ].map(({ title, description }) => (
              <Card key={title} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{title}</CardTitle>
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
