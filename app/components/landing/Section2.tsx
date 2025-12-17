"use client";

import Image from "next/image";
import { motion, useTime, useTransform, useScroll } from "motion/react";
import { useRef } from "react";

const MotionImage = motion(Image);

export default function Section2() {
  const ref = useRef<HTMLDivElement>(null);

  /* ------------------ Scroll ------------------ */
  const { scrollYProgress } = useScroll({ target: ref });

  /* ------------------ Rotating border ------------------ */
  const time = useTime();
  const rotate = useTransform(time, [0, 2000], [0, 360], { clamp: false });

  const rotatingBg = useTransform(
    rotate,
    (r) => `conic-gradient(from ${r}deg, #571BF2, #06040a, #06040a)`
  );

  /* ------------------ 3D image motion ------------------ */
  const rotateX = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const translateZ = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  // borderOpacity
  const borderOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [0, 0, 1]);

  return (
    <div ref={ref} className="flex justify-center px-3 section-marg">
      <motion.div
        className="relative rounded-md p-[2px]"
        style={{ perspective: "1200px" }}
      >
        {/* 🔮 Decorative rotating border ONLY */}
        <motion.div
          className="absolute inset-0 rounded-md pointer-events-none"
          style={{
            background: rotatingBg,
            opacity: borderOpacity,
            zIndex: 0,
          }}
        />

        {/* 🧱 Solid image layer */}
        <motion.div
          className="relative rounded-md overflow-hidden bg-[#06040a]"
          style={{
            rotateX,
            translateZ,
            transformStyle: "preserve-3d",
            zIndex: 1,
          }}
        >
          <MotionImage
            src="/screenshot-new.jpg"
            alt="screenshot"
            width={1000}
            height={800}
            className="block rounded-md"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
