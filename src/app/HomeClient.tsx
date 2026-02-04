"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  Variants,
  useInView,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";

/* ================= ANIMATIONS ================= */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const titleItem: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ================= HERO ================= */

function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* BACKGROUND IMAGE WITH SLIGHT ZOOM */}
      <motion.div
        initial={prefersReducedMotion ? false : { scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero.webp"
          alt="Luxury Architecture"
          fill
          priority
          className="object-cover opacity-60" // Lowered opacity for better text contrast
        />
        {/* VIGNETTE & GRADIENT FOR READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-zinc-950" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </motion.div>

      {/* HERO CONTENT */}
      <div className="relative z-20 w-full max-w-5xl px-6 pt-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* CREATIVE SUBTITLE */}
          <motion.span 
            variants={titleItem}
            className="mb-4 text-[10px] md:text-xs font-bold tracking-[0.5em] text-emerald-500 uppercase"
          >
            Redefining Luxury
          </motion.span>

          {/* MAIN TITLES WITH EYE-CATCHY STYLING */}
          <motion.h1 
            variants={titleItem}
            className="text-[clamp(2.5rem,10vw,6rem)] leading-[1.1] font-light text-white"
          >
            Crafting <span className="italic font-serif">Timeless</span>
            <span className="block font-medium bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent">
              Living Spaces
            </span>
          </motion.h1>

          {/* DECORATIVE LINE */}
          <motion.div 
            variants={titleItem}
            className="my-8 h-[1px] w-24 bg-emerald-500/50"
          />

          {/* DETAILS */}
          <motion.div 
            variants={titleItem}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[11px] tracking-[0.2em] text-zinc-400 uppercase"
          >
            <span>Est. 2008</span>
            <span className="hidden md:block text-zinc-700">•</span>
            <span>Premium Property Developments</span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* SCROLL INDICATOR (MOBILE OPTIMIZED) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-[1px] bg-gradient-to-b from-emerald-500 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}

/* ================= STATS ================= */

function StatItem({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
     viewport={{ once: true, margin: "-20px" }}

      className="flex flex-col items-center py-6 md:py-0 border-b border-white/5 md:border-none last:border-none"
    >
      <div className="text-4xl md:text-6xl font-light text-white tracking-tighter">
        {count.toLocaleString()}+
      </div>
      <div className="mt-2 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-emerald-500 font-semibold">
        {label}
      </div>
    </motion.div>
  );
}

/* ================= PROJECTS ================= */

/* ================= CREATIVE PROJECTS SECTION ================= */

function FeaturedProjects() {
  return (
    <section className="bg-zinc-950 py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* HEADER WITH CREATIVE TYPOGRAPHY */}
        <header className="mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-emerald-500 font-bold">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight">
              Signature <span className="italic font-serif">Curations</span>
            </h2>
          </motion.div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
             <div className="h-[1px] w-32 bg-zinc-800" />
          </div>
        </header>

        {/* ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
          {PROJECTS.map((p, i) => {
            // Creative logic: Every 2nd and 3rd item has different column spans
            const isWide = i === 1 || i === 3;
            const colSpan = isWide ? "md:col-span-7" : "md:col-span-5";
            const marginTop = i % 2 !== 0 ? "md:mt-24" : "md:mt-0";

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`${colSpan} ${marginTop} group relative`}
              >
                <Link href={`/properties/${p.id}`} className="block overflow-visible">
                  {/* CREATIVE IMAGE CONTAINER */}
                  <div className="relative overflow-hidden bg-zinc-900 aspect-[4/5] md:aspect-auto md:h-[600px] will-change-transform transition-all duration-700 ease-out group-hover:shadow-[0_30px_60px_-15px_rgba(16,185,129,0.15)]">
                    
                    {/* PARALLAX IMAGE EFFECT */}
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                      className="h-full w-full"
                    >
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-filter duration-700 group-hover:brightness-75"
                      />
                    </motion.div>

                    {/* INTERACTIVE OVERLAYS */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* FLOATING TAG */}
                    <div className="absolute top-6 left-6 overflow-hidden">
                       <motion.span 
                         initial={{ y: "100%" }}
                         whileInView={{ y: 0 }}
                         className="block bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] uppercase tracking-[0.2em] px-4 py-2"
                       >
                         {p.tag}
                       </motion.span>
                    </div>

                    {/* HIDDEN CURSOR REPLACEMENT ON HOVER */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                       <div className="h-20 w-20 rounded-full bg-emerald-500 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                          <span className="text-black text-[10px] font-bold uppercase tracking-widest">Explore</span>
                       </div>
                    </div>
                  </div>

                  {/* BOTTOM TEXT CONTENT */}
                  <div className="mt-8 flex justify-between items-start">
                    <div className="max-w-[70%]">
                      <h3 className="text-2xl font-light text-white mb-2 leading-none group-hover:text-emerald-400 transition-colors duration-300">
                        {p.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-medium">
                        {p.location}
                      </p>
                    </div>
                    
                    {/* CREATIVE INDEX NUMBER */}
                    <span className="text-zinc-800 font-serif italic text-4xl">
                      0{i + 1}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= PAGE ================= */

export default function HomePage() {
  return (
    <main className="bg-zinc-950 selection:bg-emerald-500/30">
      <HeroSection />

      {/* STATS SECTION: VERTICAL ON MOBILE, HORIZONTAL ON DESKTOP */}
      <section className="bg-zinc-900/30 border-y border-white/5">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 px-6 py-12 md:py-24">
          <StatItem value={15} label="Years of Trust" />
          <StatItem value={1200} label="Homes Delivered" />
          <StatItem value={18} label="Projects Completed" />
          <StatItem value={100} label="Satisfaction" />
        </div>
      </section>

      <FeaturedProjects />
    </main>
  );
}

const PROJECTS = [
  {
    id: 1,
    title: "Riddhi Skyline",
    location: "Mul Road, Chandrapur",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000",
    tag: "Premium Project",
  },
  {
    id: 2,
    title: "Riddhi Ventura",
    location: "Mul Road, Chandrapur",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2000",
    tag: "Luxury Living",
  },
  {
    id: 3,
    title: "Riddhi Legacy Towers",
    location: "Padoli – Kosara Area, Chandrapur",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2b6a2f3f38?q=80&w=2000",
    tag: "Luxury Towers",
  },
  {
    id: 4,
    title: "Riddhi 55 Villas",
    location: "Mul Road, Chandrapur",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000",
    tag: "Ultra Luxury Villas",
  },
];
