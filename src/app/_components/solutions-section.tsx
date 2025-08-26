import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, MonitorSmartphone } from "lucide-react";

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 제목 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            비즈니스의 핵심을 바꾸는 두 가지 솔루션
          </h2>
        </div>

        {/* 솔루션 카드들 */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* 첫 번째 카드 - AI 상담 솔루션 */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <BrainCircuit className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                AI 상담 솔루션
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-lg text-gray-600 leading-relaxed">
                24시간 자동 응대, 고객 데이터 분석, 맞춤형 컨설팅을 통해 비즈니스 효율을 극대화합니다.
              </CardDescription>
            </CardContent>
          </Card>

          {/* 두 번째 카드 - 무인결제 키오스크 */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <MonitorSmartphone className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                무인결제 키오스크
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-lg text-gray-600 leading-relaxed">
                직관적인 UI/UX와 안정적인 결제 시스템으로 어떤 업종에서든 최적의 무인 운영 환경을 제공합니다.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
