import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '미디어 - TELIGEN',
  description: '텔리젠의 최신 소식, 보도자료, 업계 동향을 전해드립니다.',
};

export default function MediaPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          미디어
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          텔리젠 관련 뉴스, 보도자료, 기술 동향 등 최신 소식을 전해드립니다.
        </p>
      </div>
    </main>
  );
}
