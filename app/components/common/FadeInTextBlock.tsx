"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description?: string;
  titleStyle?: string;
  descStyle?: string;
};

export default function FadeInTextBlock({
  title,
  description,
  titleStyle,
  descStyle,
}: Props) {
  return (
    <motion.div
      key={title}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
        hidden: {},
      }}
    >
      <motion.h3
        className={`text-2xl font-semibold text-black mb-4 ${titleStyle}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h3>

      {description && (
        <motion.p
          className={`text-base font-normal text-[#74767B] ${descStyle}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
