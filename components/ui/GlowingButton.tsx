"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

/**
 * GlowingButton
 *
 * A reusable button component with a glowing gradient border and subtle
 * hover animations. The component accepts `variant` and `size` props to
 * adjust styling. Motion is leveraged via Framer Motion for smooth
 * interactions. Color values are pulled from Tailwind's theme using
 * classes defined in the tailwind config (see tailwind.config.js).
 */

const buttonVariants = cva(
  "relative inline-flex items-center justify-center font-medium transition-transform focus:outline-none", {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-accent to-violet text-black",
        secondary:
          "bg-transparent border border-accent text-accent hover:text-black hover:bg-accent/20",
      },
      size: {
        sm: "px-4 py-2 text-sm rounded-md",
        md: "px-6 py-3 text-base rounded-lg",
        lg: "px-8 py-4 text-lg rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface GlowingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const GlowingButton = React.forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        role="button"
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

GlowingButton.displayName = "GlowingButton";