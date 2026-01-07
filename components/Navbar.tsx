"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

interface NavbarProps {
  onScroll?: (id: string) => void;
}

export default function Navbar({ onScroll }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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
    pricing: "Прайс",
    footer: "Контакти",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress((scrollTop / docHeight) * 100);

      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && scrollTop >= el.offsetTop - window.innerHeight / 2) {
          current = section;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

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
      <nav className="hidden sm:flex fixed top-0 left-0 w-full z-50 py-4 bg-white/20 backdrop-blur-lg border-b border-white/20 shadow-md">
        <div className="flex items-center w-full max-w-6xl mx-4">
          {/* Лого */}
          <span
            className="font-extrabold text-4xl text-blue-600 cursor-pointer select-none hover:text-blue-700 transition-colors duration-300"
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => handleClick("home")}
          >
            MediCare
          </span>

          {/* Навігаційні кнопки */}
          <div
            className="flex gap-12 ml-auto text-2xl font-semibold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {sections.map((section) => {
              const isActive = activeSection === section;
              return (
                <button
                  key={section}
                  onClick={() => handleClick(section)}
                  className={`relative transition-all duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-blue-800 hover:text-blue-500"
                  }`}
                >
                  {labels[section]}
                  {/* Подсветка только для активной секции */}
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 rounded-full"
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                  />
                  {/* Убрано подчеркивание при hover */}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="sm:hidden fixed top-0 left-0 w-full z-50 bg-white/25 backdrop-blur-lg shadow-md border-b border-white/20">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Лого */}
          <span
            className="font-bold text-3xl text-blue-600 cursor-pointer select-none hover:text-blue-700 transition-colors duration-300"
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => handleClick("home")}
          >
            MediCare
          </span>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-600 text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col gap-4 px-4 pb-4 bg-white/90 backdrop-blur-md rounded-b-lg shadow-lg"
            >
              {sections.map((section) => {
                const isActive = activeSection === section;
                return (
                  <button
                    key={section}
                    onClick={() => handleClick(section)}
                    className={`text-left text-blue-800 py-2 px-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-blue-100 text-blue-600 font-bold shadow-md"
                        : "hover:bg-blue-50 hover:text-blue-500 font-medium"
                    } text-xl`}
                  >
                    {labels[section]}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
