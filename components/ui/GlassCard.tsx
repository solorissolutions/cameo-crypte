"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * GlassCard
 *
 * A semi-transparent card component with blur and border that uses
 * Tailwind classes defined in globals.css for a glassmorphism effect.
 * It gently lifts on hover with a subtle shadow. Use this to frame
 * content on dark backgrounds while maintaining legibility.
 */
export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <motion.div
      className={
        "glass-card border border-accent/30 backdrop-blur-md outline-none focus:outline-accent" +
        (className ? ` ${className}` : "")
      }
      whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(255, 71, 0, 0.2)" }}
      tabIndex={0}
    >
      {children}
    </motion.div>
  );
};