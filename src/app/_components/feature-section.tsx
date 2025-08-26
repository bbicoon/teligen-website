import { BrainCircuit, LayoutDashboard, ShieldCheck } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      icon: BrainCircuit,
      title: "자체 개발 AI 엔진",
      description: "수십만 건의 상점 데이터를 학습한 자체 AI가 가장 정확한 비즈니스 분석과 상담을 제공합니다.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      icon: LayoutDashboard,
      title: "하나의 대시보드",
      description: "여러 대의 키오스크와 AI 상담 내역을 하나의 관리자 페이지에서 직관적으로 관리하세요.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "안전한 데이터 처리",
      description: "금융기관 수준의 보안 시스템으로 고객의 소중한 데이터를 안전하게 보호합니다.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 제목 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            왜 TELIGEN의 기술인가?
          </h2>
        </div>

        {/* 특징 카드 그리드 */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* 아이콘 컨테이너 */}
              <div className={`mx-auto mb-6 w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              {/* 제목 */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              {/* 설명 */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
