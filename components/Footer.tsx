"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setStatus(null);

    if (formData.get("company")) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-start pt-32 px-6 relative overflow-hidden
    bg-gradient-to-t from-[#6CA8FF] via-[#7BB4FF] to-[#9CCBFF] text-white"
      style={{ scrollMarginTop: 100 }} // щоб navbar не перекривав
    >
      {/* Декоративні плями */}
      <div className="absolute top-6 left-1/3 w-36 h-36 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-12 right-1/4 w-52 h-52 bg-white/10 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto w-full flex flex-col justify-center gap-8 z-10">
        {/* Контактна інформація */}
        <div className="text-center space-y-3">
          <h3 className="text-3xl sm:text-4xl font-bold">
            Медичний центр “Здоров’я”
          </h3>
          <p className="text-base sm:text-lg">
            Адреса: вул. Лікарська 12, Київ, Україна
          </p>
          <p className="text-base sm:text-lg">
            Телефон: +380 44 123 45 67 | Email: info@healthcare.ua
          </p>
        </div>

        {/* Форма зворотного зв’язку */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full"
          aria-live="polite"
        >
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />
          <input
            name="name"
            required
            placeholder="Ваше ім’я"
            className="w-full h-14 px-4 rounded-3xl border border-white/30 bg-white/25 text-white placeholder-white text-base
        focus:outline-none focus:border-white focus:ring-2 focus:ring-white transition"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full h-14 px-4 rounded-3xl border border-white/30 bg-white/25 text-white placeholder-white text-base
        focus:outline-none focus:border-white focus:ring-2 focus:ring-white transition"
          />
          <textarea
            name="message"
            required
            placeholder="Повідомлення"
            rows={5}
            className="w-full p-4 rounded-3xl border border-white/30 bg-white/25 text-white placeholder-white text-base
        focus:outline-none focus:border-white focus:ring-2 focus:ring-white transition resize-none"
          />
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={!loading ? { scale: 1.05 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
            className="w-full px-6 py-3 bg-white/80 hover:bg-white text-blue-700 rounded-3xl font-semibold transition shadow-md
        disabled:opacity-50 disabled:cursor-not-allowed text-lg sm:text-xl"
          >
            {loading ? "Відправка..." : "Записатися на прийом"}
          </motion.button>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-green-200 mt-2 text-center"
              >
                ✔ Ваше повідомлення успішно надіслано
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-red-200 mt-2 text-center"
              >
                ❌ Сталася помилка. Спробуйте ще раз.
              </motion.p>
            )}
          </AnimatePresence>
        </form>

        {/* Посилання */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mt-6">
          <a href="#" className="hover:text-white transition">
            Політика конфіденційності
          </a>
          <a href="#" className="hover:text-white transition">
            Умови використання
          </a>
          <a href="#" className="hover:text-white transition">
            Контакти
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
