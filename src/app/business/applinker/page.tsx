import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Wifi, Eye, Hand, Bell, Calendar, Share2 } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '앱링커 - TELIGEN',
  description: '언제 어디서든 모바일 앱으로 매장 장비를 원격으로 제어하고 상태를 확인할 수 있습니다.',
};

export default function ApplinkerPage() {
  return (
    <div>
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <Image 
                src="/applinker-icon.webp" 
                alt="앱링커 아이콘" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
            </div>
            <h1 className="text-4xl font-bold text-slate-800">앱링커</h1>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            언제 어디서든 모바일 앱으로 매장 장비를 원격으로 제어하고 상태를 확인할 수 있습니다.
          </p>
        </div>

        {/* 주요 기능 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">주요 기능</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">원격 연결</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  스마트폰으로 키오스크를 원격으로 연결해 전원을 끄거나 재부팅할 수 있습니다
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">뷰어모드</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  키오스크의 상태를 확인할 수 있는 기능으로, 간단한 모니터링에 적합합니다
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Hand className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">터치모드</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  원격으로 조작이 필요할 때 사용하여 즉각적인 수정과 보완을 가능하게 합니다
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 고급 기능 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">고급 기능</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Bell className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-xl">실시간 알림</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  실시간 알림 기능을 통해 키오스크의 장애를 즉각 파악하고 대응할 수 있습니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-purple-600" />
                  <CardTitle className="text-xl">스케줄러</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  반복적인 작업을 자동화하여 시간 효율성을 극대화할 수 있습니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Share2 className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">공유 기능</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  다른 사용자와 단말기를 공유하여 협력적인 매장 관리를 도울 수 있습니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Smartphone className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-xl">마이크 기능</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  마이크 기능을 통해 고객과 직접 소통할 수 있어 고객 만족도를 높입니다.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 사용법 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">간편한 사용법</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle className="text-xl">앱 다운로드</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  스마트폰에 앱링커 앱을 다운로드합니다
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <CardTitle className="text-xl">QR코드 스캔</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  스마트폰 카메라로 QR코드를 스캔해 단말기를 등록합니다
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <CardTitle className="text-xl">원격 관리</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  바로 원격 관리 기능을 사용할 수 있습니다
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Google Play Store 링크 */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Image 
                  src="/google-play logo.webp" 
                  alt="Google Play Store" 
                  width={40} 
                  height={40}
                />
                <h3 className="text-2xl font-bold text-slate-800">앱링커 다운로드</h3>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-lg mb-6">
                지금 바로 Google Play Store에서 앱링커를 다운로드하고 스마트한 매장 관리를 시작하세요.
              </CardDescription>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.zeonix.applinker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Google Play Store에서 다운로드
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
    </div>
  );
}
