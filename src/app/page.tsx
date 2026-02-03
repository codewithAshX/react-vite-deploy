"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

/* ================= PRELOADER COMPONENT ================= */

const Preloader = ({ finishLoading }: { finishLoading: () => void }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 800); 
          return 100;
        }
        return prev + 2;
      });
    }, 30); 
    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.9, ease: [0.7, 0, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
    >
      {/* 1. Emerald Tinted Logo Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mb-12"
      >
        <Image 
          src="/Riddhi-Builders-4-1-1024x611.PNG" 
          alt="Riddhi Builders Logo" 
          width={280} 
          height={160} 
          // Advanced filter to convert Orange/Blue logo to Emerald
          className="brightness-[1.2] contrast-[1.2] sepia-[1] hue-rotate-[100deg] saturate-[10] drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]"
          priority
        />
        
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent skew-x-12 pointer-events-none"
        />
      </motion.div>

      {/* 2. Counter and Progress */}
      <div className="w-64 text-center">
        <div className="flex justify-between items-end mb-3 px-1">
          <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-900/80 font-bold">
            Building Legacy
          </span>
          <span className="text-2xl font-serif italic text-emerald-400">
            {percentage}%
          </span>
        </div>
        
        <div className="h-[1px] w-full bg-emerald-950/30 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-emerald-500 shadow-[0_0_10px_#10b981]"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* 3. The Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div 
          className="h-full w-full bg-[linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)] bg-[size:40px_40px]" 
        />
      </div>
    </motion.div>
  );
};

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ================= SUB-COMPONENTS ================= */

function HeroSection({ isLoaded }: { isLoaded: boolean }) {
  const router = useRouter();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={heroRef} className="relative h-[110vh] overflow-hidden bg-zinc-950">
      <motion.div 
        style={{ y }} 
        initial={{ scale: 1.1, filter: "blur(10px)" }}
        animate={isLoaded ? { scale: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image src="/HERO.PNG" alt="Luxury Architecture" fill className="object-cover opacity-60" priority />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-zinc-950" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={isLoaded ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
            Est. 2009 — Riddhi Builders
          </span>
          <h1 className="max-w-5xl text-5xl font-light leading-[1.1] text-white sm:text-7xl lg:text-8xl">
            Architecture that <br />
            <span className="italic font-serif text-emerald-200">Breathes Life.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-zinc-400">
            We don't just build structures; we curate environments where legacy meets 
            modernity. Discover our portfolio of iconic residential spaces.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <button onClick={() => router.push("/listings")} className="bg-emerald-600 px-12 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-emerald-500">
              View Collection
            </button>
            <button className="text-sm font-bold uppercase tracking-widest text-white border-b border-emerald-500/50 pb-1 hover:border-emerald-500 transition-all">
              The Process
            </button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-1/2 h-24 w-px bg-gradient-to-b from-transparent to-emerald-500" />
    </section>
  );
}

/* ================= MAIN PAGE ================= */

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-zinc-950 selection:bg-emerald-500 selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1.2 }}
      >
        <HeroSection isLoaded={!isLoading} />
        
        {/* Philosophy Section */}
        <section className="bg-zinc-950 py-32 text-zinc-300">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">The Philosophy</h2>
                <h3 className="mt-6 text-4xl font-light leading-tight text-white sm:text-5xl">
                  Precision in every <span className="italic">millimeter</span>. <br />
                  Trust in every <span className="italic">corner</span>.
                </h3>
                <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-400">
                  <p>Real estate is a canvas for human experience. Every layout is optimized for natural light.</p>
                  <p>Our commitment to "On-Time Delivery" is a respect for your time and your dreams.</p>
                </div>
              </motion.div>
              
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 lg:scale-110">
                 <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" alt="Detailing" fill className="object-cover opacity-80" />
                 <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          </div>
        </section>

        {/* DESIGN PILLARS */}
        <section className="bg-white py-32 text-zinc-900">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-200 pt-12">
              <div>
                <span className="text-4xl font-serif italic text-emerald-600">01</span>
                <h4 className="mt-4 text-xl font-bold uppercase tracking-tighter">Sustainability</h4>
                <p className="mt-4 text-zinc-600">Kind to the planet, kind to your family.</p>
              </div>
              <div>
                <span className="text-4xl font-serif italic text-emerald-600">02</span>
                <h4 className="mt-4 text-xl font-bold uppercase tracking-tighter">Connectivity</h4>
                <p className="mt-4 text-zinc-600">At the heartbeat of the city.</p>
              </div>
              <div>
                <span className="text-4xl font-serif italic text-emerald-600">03</span>
                <h4 className="mt-4 text-xl font-bold uppercase tracking-tighter">Community</h4>
                <p className="mt-4 text-zinc-600">Thriving neighborhoods.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-zinc-950 py-40 text-center">
          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-5xl font-light text-white sm:text-7xl">
                Ready to elevate your <br />
                <span className="font-serif italic text-emerald-400">standard of living?</span>
              </h2>
              <button className="mt-12 inline-block rounded-full bg-emerald-600 px-12 py-6 text-lg font-bold text-white transition-transform hover:scale-105">
                Request Private Tour
              </button>
            </motion.div>
          </div>
        </section>

        {/* FLOATING ACTION */}
        <button className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold uppercase tracking-widest text-zinc-900 shadow-2xl transition-all hover:bg-emerald-500 hover:text-white group">
          <span className="h-2 w-2 rounded-full bg-emerald-500 group-hover:bg-white animate-pulse" />
          Schedule Visit
        </button>
      </motion.div>
    </main>
  );
}