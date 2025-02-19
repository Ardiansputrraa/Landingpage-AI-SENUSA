"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Acknowledgment = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-12 md:px-16 gap-16"
    >
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="text-2xl md:text-5xl font-bold text-gray-400 mb-8">
          Acknowledgment
        </h2>
        <p className="text-gray-500 text-lg mt-4">
          This project is partially funded by PT Pandu Bioinformatika. We
          appreciate the support and contribution from both parties in making
          this project possible.
        </p>
      </motion.div>

      <motion.div
        className="w-[250px] h-[250px] flex justify-center items-center"
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.img
          src="pandu.png"
          className="w-[250px] h-[250px] object-contain"
          alt="Company Logo"
          animate={{
            rotateY: inView ? [0, 360] : 0,
          }}
          transition={{
            rotateY: { duration: 2, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: 5, ease: "linear" },
          }}
        />
      </motion.div>
    </div>
  );
};

export default Acknowledgment;
