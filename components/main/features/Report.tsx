"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { slideInFromBottom, slideInFromTop } from "@/utils/motion";
import Image from 'next/image';

const Report = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-6 md:px-16 gap-16 text-center md:text-right"
    >
      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end"
        variants={slideInFromTop}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Image
          src="Report.png"
          className="w-[450px] h-[450px] md:w-[500px] md:h-[500px] object-cover mr-auto"
          alt="Features Variant Report"
        />
      </motion.div>

      <motion.div
        className="md:w-1/2"
        variants={slideInFromBottom}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="text-2xl md:text-5xl font-bold text-gray-400 mb-4">
          Variant Report
        </h2>
        <p className="text-gray-500 text-lg">
          The Variant Report Manager is an advanced tool for analyzing patient
          VCF files, allowing precise filtering of key genetic data like GENE
          ID, SYMBOL, Clinical Significance, Zygosity, and ACMG Classification.
          It enables users to extract insights, make informed interpretations,
          and generate recommendations based on genetic profiles. The final
          report can be exported in PDF, JSON, or XML formats for further
          evaluation and clinical decisions.
        </p>
      </motion.div>
    </div>
  );
};

export default Report;
