import BusinessNav from "./_components/BusinessNav";

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-8">
          {/* 왼쪽 사이드바 - BusinessNav */}
          <aside className="hidden lg:block">
            <BusinessNav />
          </aside>
          
          {/* 오른쪽 메인 콘텐츠 */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
