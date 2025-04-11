"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { zoomIn, zoomOut } from "@/utils/motion";
import Image from "next/image";

const VariantQuery = () => {
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
          Variant Query
        </h2>
        <p className="text-gray-500 text-lg">
          The Variant Library serves as a centralized repository for managing
          and accessing curated genetic variant data. It streamlines
          organization, retrieval, and comparison of analyzed variants,
          enhancing genomic research and clinical decision-making with accuracy
          and consistency.
        </p>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-start"
        variants={zoomOut}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <img
          src="VariantQuery.png"
          className="w-[450px] h-[450px] md:w-[500px] md:h-[500px] object-cover ml-auto"
          alt="Feature Variant Query"
        />
      </motion.div>
    </div>
  );
};

export default VariantQuery;
