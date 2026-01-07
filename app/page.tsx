"use client";

import React from "react";
import Navbar from "../components/Navbar"; // імпорт Navbar
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function HomePage() {
  // функція для скролу до секції
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative bg-gradient-to-b from-[#E0F2FE] via-[#BAE6FD] to-[#7DD3FC]">
      {/* Navbar */}
      <Navbar onScroll={scrollTo} />

      {/* Hero секція */}
      <section id="home" className="min-h-screen">
        <Hero onScroll={scrollTo} />
      </section>

      {/* Features секція */}
      <section id="features" className="min-h-screen">
        <Features />
      </section>

      {/* About / Про нас секція */}
      <section id="about" className="min-h-screen">
        <About />
      </section>

      {/* Testimonials секція */}
      <section id="testimonials" className="min-h-screen">
        <Testimonials />
      </section>

      {/* Pricing / Прайсінг секція */}
      <section id="pricing" className="min-h-screen">
        <Pricing />
      </section>

      {/* Footer секція */}
      <section id="footer" className="min-h-screen">
        <Footer />
      </section>
    </main>
  );
}
