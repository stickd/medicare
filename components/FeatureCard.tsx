"use client";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  text: string;
  icon: React.ReactNode;
}

export default function FeatureCard({ title, text, icon }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)", // синій glow при ховері
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative h-full bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center backdrop-blur-lg"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-200 text-sm">{text}</p>

      {/* subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-inner shadow-blue-200/10" />
    </motion.div>
  );
}
