"use client";
import Image from "next/image";
import { motion, useTime, useTransform, useScroll } from "motion/react";

export default function Section2() {
  const time = useTime();
  const rotate = useTransform(time, [0, 2000], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #571BF2, #ffffff, #571BF2)`;
  });

  // skew effect
  const { scrollYProgress } = useScroll();

  const translateZ = useTransform(scrollYProgress, [0, 1], [-300, 150]);

  const transform3D = useTransform(translateZ, (z) => `translateZ(${z}px)`);

  return (
    <div className="mt-10 mb-20 flex justify-center   ">
      <div className="relative rounded-md px-2 py-2">
        <motion.div
          className="px-2 py-2 rounded-md"
          style={{
            background: rotatingBg,
            perspective: "1000px",
          }}
        >
          <motion.div
            style={{
              transform: transform3D,
            }}
          >
            <Image
              src="/screenshot-new.jpg"
              alt="screenshot"
              width={1000}
              height={800}
              className="self-center rounded-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
