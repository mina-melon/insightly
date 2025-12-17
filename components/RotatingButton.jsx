import { motion } from "framer-motion";
import { useState } from "react";

export default function RotatingButton({ label, buttonClass, arrowColor }) {
  const [rotate, setRotate] = useState(false);

  return (
    <button
      className={`flex flex-row items-center justify-center gap-2 ${buttonClass}`}
      onMouseEnter={() => setRotate(true)}
      onMouseLeave={() => setRotate(false)}
    >
      {label}
      <motion.svg
        width="18"
        height="14"
        fill="none"
        stroke={arrowColor}
        strokeWidth="2.5"
        initial={{ rotate: 0 }}
        animate={{ rotate: rotate ? -30 : 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <line x1="2" y1="8" x2="14" y2="8" />
        <polyline points="10 4 14 8 10 12" />
      </motion.svg>
    </button>
  );
}
