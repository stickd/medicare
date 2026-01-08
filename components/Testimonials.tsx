"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Олена П.",
    text: "Дуже задоволена обстеженням! Лікарі професійні, а результати швидкі та точні.",
    avatar: "/2.jpg",
  },
  {
    name: "Дашуля З.",
    text: "Сучасне обладнання та уважний персонал. Відчуваєш себе в надійних руках. Данька Любіт Дашку:)",
    avatar: "/4.jpg",
  },
  {
    name: "Марія С.",
    text: "Онлайн консультації зручно проходити з дому. Лікарі завжди на зв'язку. Приємний персонал і хороші ціни!",
    avatar: "/3.jpg",
  },
];

export default function Testimonials() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const handleNext = useCallback(() => {
    setIndex(([prev]) => [(prev + 1) % testimonials.length, 1]); // вправо
  }, []);

  const handlePrev = useCallback(() => {
    setIndex(([prev]) => [
      (prev - 1 + testimonials.length) % testimonials.length,
      -1,
    ]); // влево
  }, []);

  // Функция для анимации
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center py-20 px-4 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, #7DD3FC 0%, #BAE6FD 50%, #E0F2FE 100%)`,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      aria-labelledby="testimonials-title"
    >
      <h2
        id="testimonials-title"
        className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-14 text-blue-900"
      >
        Відгуки наших пацієнтів
      </h2>

      <div className="max-w-3xl mx-auto relative flex justify-center">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-2xl w-full sm:w-auto border border-blue-300"
            aria-live="polite"
          >
            <img
              src={testimonials[index].avatar}
              alt={testimonials[index].name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mb-6 object-cover border-2 border-blue-300 shadow-md"
              loading="lazy"
            />

            <TestimonialCard
              name={testimonials[index].name}
              text={testimonials[index].text}
              className="text-blue-900 text-lg sm:text-xl leading-relaxed"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
          <button
            type="button"
            onClick={handlePrev}
            className="text-blue-900 text-3xl p-2 hover:text-blue-700 transition-colors"
            aria-label="Попередній відгук"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="text-blue-900 text-3xl p-2 hover:text-blue-700 transition-colors"
            aria-label="Наступний відгук"
          >
            ›
          </button>
        </div>
      </div>
    </motion.section>
  );
}
