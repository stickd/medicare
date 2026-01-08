"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onScroll?: (id: string) => void;
}

export default function Navbar({ onScroll }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true);

  const sections = [
    "home",
    "features",
    "about",
    "testimonials",
    "pricing",
    "footer",
  ];

  const labels: Record<string, string> = {
    home: "Головна",
    features: "Послуги",
    about: "Про нас",
    testimonials: "Відгуки",
    pricing: "Ціна",
    footer: "Контакти",
  };

  // Відстежуємо скрол
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress((scrollTop / docHeight) * 100);

      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop - 80;
          if (scrollTop >= offsetTop - window.innerHeight / 2) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Відстежуємо ширину вікна
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // 30 см ≈ 1134px
      setShowNavbar(width > 1134);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // ініціалізація
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Якщо ширина < 30см, navbar ховається
  if (!showNavbar) return null;

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-blue-200 z-[100]">
        <motion.div
          className="h-full bg-blue-600 origin-left rounded"
          style={{ scaleX: scrollProgress / 100 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        />
      </div>

      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 py-4 bg-white/20 backdrop-blur-lg border-b border-white/20 shadow-md">
        <div className="flex items-center w-full max-w-6xl mx-auto px-4">
          {/* Лого */}
          <span
            className="font-extrabold text-4xl text-blue-600 cursor-pointer select-none hover:text-blue-700 transition-colors duration-300"
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => handleClick("home")}
          >
            MediCare
          </span>

          {/* Навігаційні кнопки */}
          <div className="flex gap-12 ml-auto text-2xl font-semibold">
            {sections.map((section) => {
              const isActive = activeSection === section;
              return (
                <button
                  key={section}
                  onClick={() => handleClick(section)}
                  className={`relative transition-all duration-300 ${
                    isActive
                      ? "text-blue-600 font-bold"
                      : "text-blue-800 hover:text-blue-500"
                  }`}
                >
                  {labels[section]}
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 rounded-full"
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
