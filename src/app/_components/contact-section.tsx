"use client";

import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 콜센터 제목 */}
        <motion.h3 
          className="text-2xl font-semibold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          콜센터
        </motion.h3>

        {/* 전화번호 */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a 
            href="tel:1577-2220" 
            className="text-5xl font-bold text-blue-600 hover:underline transition-all duration-200"
          >
            1577-2220
          </a>
        </motion.div>

        {/* 업무시간 */}
        <motion.p 
          className="text-lg text-gray-600 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          업무시간: 평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
