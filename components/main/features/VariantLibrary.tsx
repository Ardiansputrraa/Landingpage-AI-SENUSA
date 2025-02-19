"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { zoomIn, zoomOut } from "@/utils/motion";
import Image from 'next/image';

const VariantLibrary = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-6 md:px-16 gap-16 text-center md:text-left"
    >
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        variants={zoomIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="text-2xl md:text-5xl font-bold text-gray-400 mb-4">
          Real-Time Notification Patient Emergency
        </h2>
        <p className="text-gray-500 text-lg">
          The system monitors patient vital signs in real-time and
          automatically sends alerts to medical personnel if significant changes
          indicate a critical condition, such as a sudden drop in blood pressure
          or an increased heart rate beyond normal limits. These notifications
          allow medical personnel to respond quickly, improving the patient's
          chances of survival.
        </p>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-start"
        variants={zoomOut}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Image
          src="VariantLibrary.png"
          className="w-[450px] h-[450px] md:w-[500px] md:h-[500px] object-cover ml-auto"
          alt="Feature Variant Library"
        />
      </motion.div>
    </div>
  );
};

export default VariantLibrary;
