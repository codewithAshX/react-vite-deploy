"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Words that cycle before the final reveal
  const words = ["Vision", "Precision", "Legacy", "Riddhi Builders"];

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => setIsVisible(false), 1000);
      return;
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 250); // Speed of word cycle

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
        >
          {/* Background Decorative Text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden whitespace-nowrap text-[20vw] font-bold text-white uppercase select-none pointer-events-none"
          >
            Riddhi Builders
          </motion.div>

          <div className="relative flex flex-col items-center">
            {/* The Animated Text */}
            <motion.p
              key={words[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-white text-3xl md:text-5xl font-light tracking-widest uppercase"
            >
              {index === words.length - 1 ? (
                <span className="font-serif italic text-emerald-400">{words[index]}</span>
              ) : (
                words[index]
              )}
            </motion.p>
            
            {/* Progress line */}
            <motion.div 
              className="mt-6 h-[1px] bg-emerald-500"
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}