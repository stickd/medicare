// About.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#2F80ED] via-blue-600 to-blue-700 text-white min-h-screen flex items-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Ліва колонка - текст */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Про нашу клініку</h2>
          <p className="mb-4 text-lg">
            Ми надаємо повний спектр медичних послуг з високими стандартами
            якості та безпеки.
          </p>
          <p className="mb-4 text-lg">
            Наші лікарі мають багаторічний досвід, а сучасне обладнання дозволяє
            проводити точні обстеження та швидко діагностувати будь-які
            проблеми.
          </p>
          <p className="text-lg">
            Ми дбаємо про здоров'я кожного пацієнта та забезпечуємо комфорт і
            професіоналізм на кожному етапі обслуговування.
          </p>
        </motion.div>

        {/* Права колонка - зображення */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/clinic.jpg"
            alt="Наша клініка"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>

      {/* Декоративні елементи */}
      <div className="absolute -top-10 left-1/4 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 right-1/3 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl"></div>
    </section>
  );
}
