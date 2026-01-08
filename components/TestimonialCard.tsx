"use client";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  text: string;
  className?: string; // <- сделали необязательным
}

export default function TestimonialCard({
  name,
  text,
  className = "",
}: TestimonialCardProps) {
  return (
    <motion.div
      className={`p-6 sm:p-8 bg-white rounded-2xl shadow-md w-full sm:w-auto ${className}`}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.1 },
      }}
    >
      <p className="mb-4 italic">"{text}"</p>
      <h4 className="font-semibold">{name}</h4>
    </motion.div>
  );
}
