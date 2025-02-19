"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from 'next/image';

const ManagePatients = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-12 md:px-16 gap-16 text-center md:text-left"
    >
      <motion.div
        className="md:w-1/2"
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="text-2xl md:text-5xl font-bold text-gray-400 mb-4">
          Manage Patients
        </h2>
        <p className="text-gray-500 text-lg">
          The Manage Patients feature simplifies the organization and tracking
          of patient genetic data. Users can store medical records, manage IDs,
          status, disease history, and upload VCF files containing genome
          reference, sample date, and variant count. With tools for viewing,
          analyzing, and managing variant data, this feature supports genomic
          assessment, accurate diagnosis, and clinical decision-making.
        </p>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-start"
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Image
          src="ManagePatients.png"
          className="w-[450px] h-[450px] md:w-[500px] md:h-[500px] object-cover ml-auto"
          alt="Features Manage Patient"
        />
      </motion.div>
    </div>
  );
};

export default ManagePatients;
