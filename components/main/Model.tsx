"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromBottom,
} from "@/utils/motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';

const Model = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div
      className="relative flex flex-col h-full w-full px-4 sm:px-6 md:px-10 lg:px-20"
      id="about-me"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center min-h-screen w-full text-center z-[20]"
      >
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          {/* Judul */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 font-bold text-white max-w-[800px] w-full"
          >
            <span className="font-bold text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              SENUSA Model
            </span>
          </motion.div>

          {/* Deskripsi */}
          <motion.p
            variants={slideInFromRight(0.8)}
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-sm sm:text-lg text-gray-400 max-w-[800px] w-full px-4 sm:px-0"
          >
            Our model is the most advanced ever made for gene assessment.
          </motion.p>

          {/* Gambar */}
          <motion.div
            variants={slideInFromBottom}
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex justify-center items-center mt-10"
          >
            <img
              src="/model.svg"
              alt="Blackhole"
              className="max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] h-auto hover:scale-105 hover:-translate-y-1 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Model;
