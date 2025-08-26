const ClientsSection = () => {
  // 가상의 고객사 로고 데이터
  const clients = [
    {
      id: 1,
      name: "TechCorp",
      logo: "TC",
      color: "text-blue-600",
    },
    {
      id: 2,
      name: "InnovateLab",
      logo: "IL",
      color: "text-green-600",
    },
    {
      id: 3,
      name: "DataFlow",
      logo: "DF",
      color: "text-purple-600",
    },
    {
      id: 4,
      name: "SmartRetail",
      logo: "SR",
      color: "text-orange-600",
    },
    {
      id: 5,
      name: "CloudTech",
      logo: "CT",
      color: "text-red-600",
    },
    {
      id: 6,
      name: "FutureSystems",
      logo: "FS",
      color: "text-indigo-600",
    },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 제목 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            신뢰할 수 있는 파트너, TELIGEN
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 분야의 리더들이 텔리젠의 기술력과 함께합니다.
          </p>
        </div>

        {/* 고객사 로고 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex flex-col items-center justify-center group"
            >
              {/* 로고 컨테이너 */}
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-lg shadow-md flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <div className={`text-2xl lg:text-3xl font-bold text-gray-400 transition-colors duration-300 group-hover:${client.color}`}>
                  {client.logo}
                </div>
              </div>
              
              {/* 회사명 */}
              <p className="mt-4 text-sm text-gray-600 font-medium text-center group-hover:text-gray-900 transition-colors duration-300">
                {client.name}
              </p>
            </div>
          ))}
        </div>

        {/* 추가 설명 */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            * 위 기업들은 텔리젠의 AI 솔루션을 도입하여 비즈니스 혁신을 이룬 파트너사입니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
