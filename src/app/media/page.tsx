import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
            {/* 향후 이곳에 뉴스 목록이 표시됩니다. */}
            <p className="text-center text-gray-500 py-8">등록된 뉴스가 없습니다.</p>
            {/* 
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <Badge>카테고리</Badge>
                    <p className="text-sm text-gray-500">YYYY년 MM월 DD일</p>
                  </div>
                  <CardTitle className="text-2xl">뉴스 제목</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">뉴스 요약 내용</CardDescription>
                  <Button variant="link" className="p-0">자세히 보기 →</Button>
                </CardContent>
              </Card>
            */}
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
