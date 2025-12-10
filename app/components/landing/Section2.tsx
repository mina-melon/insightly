'use client'
import Image from "next/image";
import {motion, useTime, useTransform} from 'motion/react'

export default function Section2() {
  const time = useTime();
  const rotate = useTransform(time, [0, 2000], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #571BF2, #ffffff, #571BF2)`
  })
  return (
    <div className="mt-10 mb-20 flex justify-center   ">
      <div className='relative rounded-md px-2 py-2'>
        <motion.div className='absolute inset-px -z-10 w-[1015px] h-[665px] rounded-md'
        style={{background: rotatingBg}}
        />
        <div className='w-[1000px] h-[800px]'>
        <Image
            src="/screenshot.png"
            alt="screenshot"
            width={1000}
            height={800}
            className="self-center rounded-md"
          />
        </div>
        
      </div>
    </div>
  );
}
