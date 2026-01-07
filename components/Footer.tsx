"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot (анти-бот)
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
    } catch (err) {
      console.error(err);
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
      className="min-h-screen flex flex-col justify-center py-16 px-4 relative overflow-hidden bg-gradient-to-t from-[#1E3A8A] via-[#3B82F6] to-[#60A5FA] text-white"
    >
      <div className="max-w-6xl mx-auto space-y-10 relative z-10 flex flex-col justify-center">
        {/* Контактна інформація */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-semibold">Медичний центр “Здоров’я”</h3>
          <p>Адреса: вул. Лікарська 12, Київ, Україна</p>
          <p>Телефон: +380 44 123 45 67 | Email: info@healthcare.ua</p>
        </div>

        {/* Форма зворотного зв’язку */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col gap-3"
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
            className="p-3 rounded-lg border border-blue-300 bg-white/10 text-white placeholder-white focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="p-3 rounded-lg border border-blue-300 bg-white/10 text-white placeholder-white focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
          />

          <textarea
            name="message"
            required
            placeholder="Повідомлення"
            rows={4}
            className="p-3 rounded-lg border border-blue-300 bg-white/10 text-white placeholder-white focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition resize-none"
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={!loading ? { scale: 1.05 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
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
                className="text-green-400 mt-2"
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
                className="text-red-400 mt-2"
              >
                ❌ Сталася помилка. Спробуйте ще раз.
              </motion.p>
            )}
          </AnimatePresence>
        </form>

        {/* Посилання */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-blue-300 transition">
            Політика конфіденційності
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            Умови використання
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            Контакти
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
