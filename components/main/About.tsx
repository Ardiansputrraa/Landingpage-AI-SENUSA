"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [startTyping, setStartTyping] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setStartTyping(true);
      setKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full h-full px-4 sm:px-6 md:px-8 lg:px-16">
      <div 
        className="relative z-20 flex flex-col items-center justify-center w-full h-auto p-6 sm:p-8 
           shadow-teal-500/50 before:absolute before:inset-0 before:bg-gradient-to-r from-teal-500 to-cyan-500 before:blur-xl before:opacity-20"
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center w-full text-center"
        >
          <div className="max-w-full sm:max-w-3xl md:max-w-4xl mx-auto flex flex-col gap-5 justify-center items-center">
            <motion.div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                {startTyping && (
                  <Typewriter
                    key={key}
                    words={[
                      "Senusa is an advanced web platform that helps healthcare professionals efficiently analyze and manage patient genetic data. It simplifies the process of interpreting genetic variants, allowing for more accurate diagnoses and better-informed medical decisions, ultimately enhancing patient care and outcomes.",
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={0}
                    delaySpeed={500}
                  />
                )}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
