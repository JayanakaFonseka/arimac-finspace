"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  keyId: string | number;
  className?: string;
  xValue?: number;
  yValue?: number;
  delay?: number;
};

export default function SlideFadeWrapper({
  children,
  keyId,
  className = "",
  xValue = 75,
  yValue = 0,
  delay = 0,
}: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyId}
        initial={{ opacity: 0, x: xValue, y: yValue }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -xValue, y: -yValue }}
        transition={{ duration: 0.5, delay: delay }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
