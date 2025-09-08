import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '미디어 - TELIGEN',
  description: '키오스크 관련 최신 뉴스와 유튜브 영상을 만나보세요.',
};

export default function MediaPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            미디어
          </h1>
          <p className="text-lg text-gray-600">
            키오스크 관련 최신 뉴스와 유튜브 영상을 제공합니다.
          </p>
        </div>

        {/* 뉴스 섹션 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">키오스크 뉴스</h2>
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Badge className="bg-blue-100 text-blue-800">키오스크 소식</Badge>
                </div>
                <CardTitle className="text-2xl">다양한 형태의 무인매장키오스크 만나요</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  카페, 식당, 문구점 등 다양한 업종에서 무인 운영이 확산되고 있습니다. 
                  키위오더는 소상공인을 위한 IOT 판매 및 렌탈 솔루션을 제공하며, 
                  PSD215, i-10P, i-20R 등 다양한 키오스크 모델을 만나볼 수 있습니다.
                </CardDescription>
                <Button asChild variant="link" className="p-0 text-blue-600 hover:text-blue-800">
                  <a 
                    href="https://blog.naver.com/teligen/223622894646" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    자세히 보기 →
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Badge className="bg-green-100 text-green-800">앱링커 소식</Badge>
                </div>
                <CardTitle className="text-2xl">앱링커 키오스크 원격관리</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  앱링커는 키오스크 관리에 혁신을 가져오는 스마트 솔루션입니다. 
                  스마트폰 하나로 어디서든 키오스크를 원격으로 제어할 수 있으며, 
                  원격 연결, 실시간 알림, 스케줄러 등 다양한 기능으로 매장 운영 효율성을 극대화합니다.
                </CardDescription>
                <Button asChild variant="link" className="p-0 text-blue-600 hover:text-blue-800">
                  <a 
                    href="https://blog.naver.com/teligen/223652204759" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    자세히 보기 →
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Badge className="bg-purple-100 text-purple-800">키오스크 창업</Badge>
                </div>
                <CardTitle className="text-2xl">문구점키오스크 저비용 창업과 무인 운영도 가능합니다</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  문구점은 학용품부터 간식, 장난감, 아이돌 굿즈까지 다양한 상품을 판매하는 공간으로 확장되고 있습니다. 
                  문구점키오스크를 활용하면 인건비 절약과 무인 운영이 가능하여 주부, 직장인 등이 투잡으로 창업할 수 있습니다. 
                  카드 및 현금 결제 모두 지원하는 제품으로 저렴한 렌탈 비용으로 부담 없이 시작할 수 있습니다.
                </CardDescription>
                <Button asChild variant="link" className="p-0 text-blue-600 hover:text-blue-800">
                  <a 
                    href="https://blog.naver.com/teligen/223638147274" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    자세히 보기 →
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 유튜브 영상 섹션 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">키오스크 관련 영상</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 향후 이곳에 유튜브 영상이 표시됩니다. */}
            <div className="md:col-span-2 text-center text-gray-500 py-8">
              <p>등록된 영상이 없습니다.</p>
            </div>
            {/*
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">영상 제목</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video mb-4 bg-gray-200 flex items-center justify-center rounded-md">
                    <p className="text-gray-500">유튜브 영상 영역</p>
                  </div>
                  <CardDescription className="text-base">영상에 대한 설명</CardDescription>
                </CardContent>
              </Card>
            */}
          </div>
        </section>
      </div>
    </main>
  );
}
