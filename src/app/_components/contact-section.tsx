const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 콜센터 제목 */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">콜센터</h3>

        {/* 전화번호 */}
        <div className="mb-8">
          <p className="text-5xl font-bold text-blue-600">1577-2220</p>
        </div>

        {/* 업무시간 */}
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          업무시간: 평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
