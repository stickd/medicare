"use client";
import React from "react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  text: string;
}

export default function TestimonialCard({ name, text }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{
        boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)", // синій glow
        scale: 1.02,
        transition: { duration: 0.1 },
      }}
      className="p-6 sm:p-8 bg-gradient-to-br from-blue-400/20 via-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-200/30 backdrop-blur-md"
    >
      <p className="text-gray-100 text-sm sm:text-base mb-4 italic">"{text}"</p>
      <h4 className="font-semibold text-white text-sm sm:text-base">{name}</h4>
    </motion.div>
  );
}
