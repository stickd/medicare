"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Олена П.",
    text: "Дуже задоволена обстеженням! Лікарі професійні, а результати швидкі та точні.",
    avatar: "/avatars/doctor1.jpg",
  },
  {
    name: "Ігор К.",
    text: "Сучасне обладнання та уважний персонал. Відчуваєш себе в надійних руках.",
    avatar: "/avatars/doctor2.jpg",
  },
  {
    name: "Марія С.",
    text: "Онлайн консультації зручно проходити з дому. Лікарі завжди на зв'язку.",
    avatar: "/avatars/doctor3.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <motion.section
      className="bg-blue-700 text-white min-h-screen flex flex-col justify-center py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      aria-labelledby="testimonials-title"
    >
      <h2
        id="testimonials-title"
        className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-14"
      >
        Відгуки наших пацієнтів
      </h2>

      <div className="max-w-3xl mx-auto relative flex justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center shadow-lg w-full sm:w-auto"
            aria-live="polite"
          >
            <img
              src={testimonials[index].avatar}
              alt={testimonials[index].name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mb-4 object-cover border-2 border-blue-400"
              loading="lazy"
            />

            <TestimonialCard
              name={testimonials[index].name}
              text={testimonials[index].text}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
          <button
            type="button"
            onClick={handlePrev}
            className="text-white text-3xl p-2 hover:text-blue-300 transition-colors"
            aria-label="Попередній відгук"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="text-white text-3xl p-2 hover:text-blue-300 transition-colors"
            aria-label="Наступний відгук"
          >
            ›
          </button>
        </div>
      </div>
    </motion.section>
  );
}
