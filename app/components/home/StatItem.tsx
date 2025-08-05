"use client";

import { motion } from "framer-motion";

type StatItemProps = {
  keyId: number;
  value: string;
  label: string;
  delay: number;
};

export default function StatItem({
  keyId,
  value,
  label,
  delay,
}: StatItemProps) {
  return (
    <motion.div
      key={keyId}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="border-l-2 md:border-l-3 border-[#4641B5] p-2"
    >
      <p className="text-[16px] md:text-[26px] font-semibold text-[#4641B5]">
        {value}
      </p>
      <p className="text-[12px] md:text-[13px] font-normal text-[#6C6C6C]">
        {label}
      </p>
    </motion.div>
  );
}
