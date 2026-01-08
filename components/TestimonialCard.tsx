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
        boxShadow: "0 8px 30px rgba(14, 165, 233, 0.4)", // м'який блакитний glow
        scale: 1.03,
        transition: { duration: 0.15 },
      }}
      className="p-6 sm:p-8 bg-gradient-to-br from-blue-200/50 via-blue-300/50 to-teal-200/50 rounded-2xl border border-blue-300/40 backdrop-blur-lg"
    >
      <p className="text-gray-900 text-base sm:text-lg mb-4 leading-relaxed italic">
        "{text}"
      </p>
      <h4 className="font-semibold text-blue-900 text-sm sm:text-base mt-2">
        {name}
      </h4>
    </motion.div>
  );
}
