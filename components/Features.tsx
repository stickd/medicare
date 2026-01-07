"use client";
import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

// Иконки для мед сайта
const icons = [
  // Сердце
  <svg
    className="w-10 h-10 text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21C12 21 4 13 4 8a4 4 0 018-4 4 4 0 018 4c0 5-8 13-8 13z"
    />
  </svg>,

  // Аптечка
  <svg
    className="w-10 h-10 text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h8a2 2 0 012 2v5a2 2 0 01-2 2z"
    />
  </svg>,

  // Шприц
  <svg
    className="w-10 h-10 text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 7l-7 7-5-5m0 0L5 13v6h6l2-2"
    />
  </svg>,

  // Монитор
  <svg
    className="w-10 h-10 text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 17v-2h6v2M4 4h16v12H4V4z"
    />
  </svg>,
];

export default function Features() {
  const features = [
    {
      title: "Професійна діагностика",
      text: "Сучасне обладнання та досвідчені лікарі для точних обстежень.",
      icon: icons[0],
    },
    {
      title: "Повний спектр послуг",
      text: "Консультації, терапія, лабораторні аналізи та більше — все в одному місці.",
      icon: icons[1],
    },
    {
      title: "Безпечні процедури",
      text: "Стерильні інструменти та сучасні стандарти безпеки для всіх пацієнтів.",
      icon: icons[2],
    },
    {
      title: "Онлайн моніторинг",
      text: "Контроль стану здоров’я та консультації віддалено через наш додаток.",
      icon: icons[3],
    },
  ];

  return (
    <section
      id="features"
      className="bg-gradient-to-b from-[#BEE3F8] via-blue-500/80 to-blue-600 text-white min-h-screen flex flex-col justify-center py-20 px-4"
    >
      <h2 className="text-4xl font-bold text-center mb-14">Наші послуги</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
}
