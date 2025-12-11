"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  return (
    <div>
      {/* desktop nav */}
      <nav className="nav">
        <div className="logo-container">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <p className="logo">Insightly</p>
        </div>
        {/* mobile */}
        <Menu
          color="white"
          size={30}
          className="cursor-pointer lg:hidden"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        />
        <div className="hidden lg:flex flex-row justify-between gap-30 items-center bg-transparent">
          <div>
            <ul className="flex flex-row list-none gap-14 cursor-pointer text-sm items-center">
              <motion.li
                initial={{ x: 0 }}
                whileHover={{
                  x: 10,
                  transition: { type: "spring" },
                }}
              >
                Overview
              </motion.li>
              <motion.li
                initial={{ x: 0 }}
                whileHover={{
                  x: 10,
                  transition: { type: "spring" },
                }}
              >
                Benefits
              </motion.li>
              <motion.li
                initial={{ x: 0 }}
                whileHover={{
                  x: 10,
                  transition: { type: "spring" },
                }}
              >
                Features
              </motion.li>
              <motion.li
                initial={{ x: 0 }}
                whileHover={{
                  x: 10,
                  transition: { type: "spring" },
                }}
              >
                Testimonials
              </motion.li>
              <motion.li
                initial={{ x: 0 }}
                whileHover={{
                  x: 10,
                  transition: { type: "spring" },
                }}
              >
                Pricing
              </motion.li>
            </ul>
          </div>
          <div className="flex flex-row gap-16">
            <motion.button
              className="text-sm cursor-pointer"
              initial={{ x: 0 }}
              whileHover={{
                x: 10,
                transition: { type: "spring" },
              }}
            >
              Contact Us
            </motion.button>
            <button
              className="flex flex-row gap-3 items-center s-pbtn"
              onMouseOver={() => setRotate((prev) => !prev)}
            >
              Get Started
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="bg-transparent"
                initial={{ rotate: 0 }}
                animate={{ rotate: rotate ? -30 : 0 }}
              >
                <line x1="2" y1="8" x2="14" y2="8" />
                <polyline points="10 4 14 8 10 12" />
              </motion.svg>
            </button>
          </div>
        </div>
      </nav>

      {/* mobile nav */}

      <div
        className={` fixed inset-0 z-50 flex-col bg-black/50 backdrop-blur-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="navHeader flex flex-row justify-between items-center px-[26px] py-8">
          <div className="logo-container">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <p className="logo">Insightly</p>
          </div>
          <div className="X">
            <X
              color="white"
              size={50}
              className="cursor-pointer lg:hidden"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            />
          </div>
        </div>
        <div className="menu flex flex-col justify-center items-center bg-transparent gap-16">
          <ul className="flex flex-col list-none gap-10 items-center cursor-pointer text-xl bg-transparent">
            <motion.li
              className="bg-transparent"
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring" },
              }}
            >
              Overview
            </motion.li>
            <motion.li
              className="bg-transparent"
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring" },
              }}
            >
              Benefits
            </motion.li>
            <motion.li
              className="bg-transparent"
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring" },
              }}
            >
              Features
            </motion.li>
            <motion.li
              className="bg-transparent"
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring" },
              }}
            >
              Testimonials
            </motion.li>
            <motion.li
              className="bg-transparent"
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring" },
              }}
            >
              Pricing
            </motion.li>
          </ul>
          <button
            className="flex flex-row gap-3 items-center text-xl cursor-pointer p-btn"
            onMouseOver={() => setRotate((prev) => !prev)}
          >
            Get Started
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="bg-transparent"
              initial={{ rotate: 0 }}
              animate={{ rotate: rotate ? -30 : 0 }}
            >
              <line x1="2" y1="8" x2="14" y2="8" />
              <polyline points="10 4 14 8 10 12" />
            </motion.svg>
          </button>
        </div>
      </div>
    </div>
  );
}
