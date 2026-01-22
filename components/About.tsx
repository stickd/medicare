// About.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative text-blue-900 min-h-screen flex items-center py-20 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #E0F2FE 0%, #BAE6FD 50%, #7DD3FC 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Ліва колонка - текст */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Про нашу клініку</h2>
          <p className="mb-4 text-lg text-blue-900/90">
            Ми надаємо повний спектр медичних послуг з високими стандартами
            якості та безпеки.
          </p>
          <p className="mb-4 text-lg text-blue-900/90">
            Наші лікарі мають багаторічний досвід, а сучасне обладнання дозволяє
            проводити точні обстеження та швидко діагностувати будь-які
            проблеми.
          </p>
          <p className="text-lg text-blue-900/90">
            Ми дбаємо про здоров'я кожного пацієнта та забезпечуємо комфорт і
            професіоналізм на кожному етапі обслуговування.
          </p>
        </motion.div>

        {/* Права колонка - зображення */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg max-w-full"
        >
          <Image
            src="/1.jpg"
            alt="Наша клініка"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>

      {/* Декор */}
      <div className="absolute -top-10 left-1/4 w-32 h-32 bg-white/50 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute -bottom-10 right-1/3 w-48 h-48 bg-white/40 rounded-full blur-3xl hidden sm:block" />
    </section>
  );
}
