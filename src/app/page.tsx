"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Use Link for internal navigation
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";

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
    }, 25); 
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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mb-12"
      >
        <Image 
          src="/Riddhi-Builders-4-1-1024x611.PNG" 
          alt="Riddhi Builders" 
          width={280} 
          height={160} 
          className="grayscale brightness-125 sepia-[0.2] hue-rotate-[100deg] saturate-[5] drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          priority
        />
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent skew-x-12"
        />
      </motion.div>

      <div className="w-64">
        <div className="flex justify-between items-end mb-3 px-1">
          <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-800 font-bold">
            Building Legacy
          </span>
          <span className="text-xl font-serif italic text-emerald-400">
            {percentage}%
          </span>
        </div>
        <div className="h-[1px] w-full bg-emerald-950/30 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-emerald-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

/* ================= ANIMATION VARIANTS ================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ================= HERO SECTION ================= */

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
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isLoaded ? { scale: 1, opacity: 0.6 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image 
          src="/HERO.PNG" 
          alt="Luxury Architecture" 
          fill 
          className="object-cover" 
          priority 
          sizes="100vw"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-zinc-950" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={isLoaded ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.4em] text-emerald-500">
            Est. 2009 — Riddhi Builders
          </span>
          <h1 className="max-w-5xl text-5xl font-light leading-[1] text-white sm:text-7xl lg:text-8xl tracking-tighter">
            Architecture that <br />
            <span className="italic font-serif text-emerald-100">Breathes Life.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-zinc-400">
            Curating environments where legacy meets modernity. Discover our portfolio of iconic residential spaces.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/properties" className="bg-emerald-600 px-12 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-emerald-500 active:scale-95 shadow-lg shadow-emerald-900/20">
              View Collection
            </Link>
            <Link href="/services" className="text-xs font-bold uppercase tracking-widest text-white border-b border-emerald-500/50 pb-1 hover:border-emerald-500 hover:text-emerald-400 transition-all">
              The Methodology
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-16 w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-pulse" />
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
          <Preloader key="loader" finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection isLoaded={!isLoading} />
        
        {/* Philosophy Section */}
        <section className="bg-zinc-950 py-32 text-zinc-300">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500 mb-6">The Philosophy</h2>
                <h3 className="text-4xl font-light leading-tight text-white sm:text-5xl tracking-tight">
                  Precision in every <span className="italic font-serif">millimeter</span>. <br />
                  Trust in every <span className="italic font-serif text-emerald-100">corner</span>.
                </h3>
                <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-zinc-400">
                  <p>Real estate is a canvas for human experience. Every layout we design is optimized for natural light and emotional resonance.</p>
                  <p>Our commitment to "On-Time Delivery" is not just a policy—it is a respect for your time and your generational dreams.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl"
              >
                  <Image 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200" 
                    alt="Detailing" 
                    fill 
                    className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white py-32 text-zinc-900 rounded-t-[3rem] md:rounded-t-[5rem]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-100 pt-16">
              {[
                { id: "01", title: "Sustainability", desc: "Kind to the planet, engineered for your family's future." },
                { id: "02", title: "Connectivity", desc: "Strategically located at the heartbeat of Chandrapur." },
                { id: "03", title: "Community", desc: "More than buildings—we create thriving neighborhoods." }
              ].map((value) => (
                <div key={value.id} className="group">
                  <span className="text-4xl font-serif italic text-emerald-600/30 group-hover:text-emerald-600 transition-colors duration-500">
                    {value.id}
                  </span>
                  <h4 className="mt-4 text-xl font-bold uppercase tracking-tight">{value.title}</h4>
                  <p className="mt-4 text-zinc-500 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-zinc-950 py-40 text-center">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.3)_0%,transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-5xl font-light text-white sm:text-7xl tracking-tighter">
                Ready to elevate your <br />
                <span className="font-serif italic text-emerald-400">standard of living?</span>
              </h2>
              <Link href="/contact" className="mt-12 inline-block rounded-full bg-emerald-600 px-12 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-emerald-500 hover:scale-105 active:scale-95">
                Request Private Tour
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Floating CTA */}
        <button className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all hover:bg-emerald-600 hover:text-white group">
          <span className="h-2 w-2 rounded-full bg-emerald-500 group-hover:bg-white animate-pulse" />
          Schedule Visit
        </button>
      </motion.div>
    </main>
  );
}