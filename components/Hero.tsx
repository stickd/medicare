"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  onScroll: (id: string) => void;
}

export default function Hero({ onScroll }: HeroProps) {
  const { scrollY } = useScroll();

  // Параллакс: текст зміщується при скроллі
  const titleY = useTransform(scrollY, [0, 300], [0, -20]);
  const subtitleY = useTransform(scrollY, [0, 300], [0, -10]);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #56CCF2 0%, #2F80ED 50%, #BEE3F8 100%)",
      }}
    >
      {/* Заголовок з параллаксом */}
      <motion.h1
        style={{ y: titleY }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Ваше здоров'я — наша турбота
      </motion.h1>

      {/* Підзаголовок з параллаксом */}
      <motion.p
        style={{ y: subtitleY }}
        className="text-white/90 text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Сучасна медична клініка «MediCare» пропонує консультації, діагностику та
        повний спектр медичних послуг.
      </motion.p>

      {/* Кнопки */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <button
          onClick={() => onScroll("pricing")}
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-blue-100 transition"
        >
          Записатися
        </button>
        <button
          onClick={() => onScroll("features")}
          className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition"
        >
          Наші послуги
        </button>
      </motion.div>
    </section>
  );
}
