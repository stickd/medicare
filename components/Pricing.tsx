"use client";

import React from "react";
import { motion } from "framer-motion";

const GradientButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-8 py-3 rounded-xl font-semibold text-white overflow-hidden shadow-lg transition-all duration-300 bg-blue-600"
    >
      <span className="relative z-10">{text}</span>

      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
        }}
      />
    </motion.button>
  );
};

export default function Pricing() {
  const tiers = [
    {
      name: "Базовий пакет",
      oldPrice: "₴1500",
      price: "₴1200",
      features: [
        "Консультація терапевта",
        "Базові аналізи",
        "Огляд та рекомендації",
      ],
    },
    {
      name: "Преміум пакет",
      oldPrice: "₴3000",
      price: "₴2500",
      featured: true,
      features: [
        "Всі послуги базового пакету",
        "Повний медичний огляд",
        "Онлайн моніторинг стану здоров'я",
      ],
    },
    {
      name: "Сімейний пакет",
      oldPrice: "₴5000",
      price: "₴4200",
      features: [
        "Послуги преміум пакету",
        "Консультації для всієї родини",
        "Пріоритетний запис та підтримка",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="min-h-screen flex flex-col justify-center py-20 px-4 relative"
      style={{
        background: `linear-gradient(to bottom, #7DD3FC 0%, #BAE6FD 50%, #E0F2FE 100%)`,
      }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-900">
        Наші пакети послуг
      </h2>

      <p className="text-center text-blue-900/80 max-w-2xl mx-auto mb-12">
        Виберіть пакет, який відповідає вашим потребам. Сучасна діагностика та
        медичний контроль у зручному форматі.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-6xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: tier.featured ? 1.05 : 1.03 }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-2xl p-8 flex flex-col justify-between text-center w-full sm:w-1/3 ${
              tier.featured
                ? "bg-white/80 shadow-2xl border-2 border-blue-500"
                : "bg-white/60 shadow-lg"
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 text-xs font-bold rounded-full shadow-md">
                ПОПУЛЯРНО
              </span>
            )}

            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-900">
                {tier.name}
              </h3>

              <p className="text-lg mb-6">
                <span className="line-through text-blue-700/50 mr-2">
                  {tier.oldPrice}
                </span>
                <span className="text-blue-900 font-bold">{tier.price}</span>
              </p>

              <ul className="text-sm space-y-2 mb-6 text-blue-900/90">
                {tier.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
            </div>

            <GradientButton text="Записатися" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
