"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] text-zinc-300 selection:bg-emerald-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image 
             src="/Riddhi-Builders-4-1-1024x611.PNG" 
             alt="Architectural Blueprint" 
             fill 
             className="object-cover grayscale"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald-500 uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
          >
            Our Legacy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-light tracking-tighter text-white"
          >
            Crafting the <span className="italic font-serif text-emerald-100">Future</span>.
          </motion.h1>
        </div>
      </section>

      {/* ================= BRAND STORY (The "Text-Heavy" Section) ================= */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
              An ethical approach to <br />
              <span className="text-emerald-500 font-serif italic">Human-Centric</span> Architecture.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-zinc-400">
            <p>
              RiddhiBuilders operates at the intersection of luxury and integrity. Our foundation 
              is built on a unique ethical and humanistic approach to the real estate business—one 
              where we prioritize the heartbeat of the home over the hardness of the concrete.
            </p>
            <p>
              Supported by thousands of earnest employees and a global family of happy customers, 
              we strive to be the definitive destination for investors who seek more than just 
              returns. We offer a legacy. Transparency and trust are not just buzzwords for us; 
              they are the fundamental laws of our operation.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION GRID ================= */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            <div className="bg-[#0a0a0a] p-12 lg:p-20">
              <span className="text-emerald-500 text-sm font-bold uppercase tracking-widest">01. Vision</span>
              <h3 className="text-3xl text-white mt-6 mb-8 font-light">To redefine urban landscapes with global standards.</h3>
              <p className="text-zinc-400 leading-relaxed">
                To be Chandrapur’s most trusted real estate developer, delivering luxury spaces 
                that don’t just meet expectations, but redefine what "living" feels like in 
                the modern era.
              </p>
            </div>
            <div className="bg-[#0a0a0a] p-12 lg:p-20">
              <span className="text-emerald-500 text-sm font-bold uppercase tracking-widest">02. Mission</span>
              <h3 className="text-3xl text-white mt-6 mb-8 font-light">Transforming aspirations into architectural reality.</h3>
              <p className="text-zinc-400 leading-relaxed">
                We bridge the gap between imagination and inhabitancy. Through ethical practices, 
                eco-friendly initiatives, and uncompromising quality, we create landmarks across 
                Telangana and Andhra Pradesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUOTE STRIP (Professional Re-imagining) ================= */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-600/5 skew-y-3 translate-y-12" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
           <blockquote className="text-3xl md:text-5xl font-light text-white leading-tight italic font-serif">
             "If we multiply numbers, it is <span className="text-emerald-500">mathematics</span>. <br />
             If we multiply your investments, it is <span className="text-emerald-500 not-italic font-sans font-bold uppercase tracking-tighter">RiddhiBuilders</span>."
           </blockquote>
        </div>
      </section>

      {/* ================= LEADERSHIP SECTION ================= */}
      <section className="py-32 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border border-zinc-200 translate-x-8 translate-y-8 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
              <img
                src="/indian_buisnessman.png"
                alt="Dr. Rajesh Thakur"
                className="relative z-10 w-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div>
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Leadership</span>
              <h2 className="text-5xl font-light mt-4 mb-2">
                Dr. Rajesh <span className="font-serif italic text-zinc-500">Thakur</span>
              </h2>
              <p className="text-zinc-500 font-medium mb-10 tracking-widest uppercase text-xs">
                Founder-Chairman & Managing Director
              </p>
              
              <div className="space-y-6 text-lg leading-relaxed text-zinc-600 italic border-l-2 border-emerald-500 pl-8">
                <p>
                  "With over three decades of experience, our journey hasn't been about building 
                  walls, but about building trust. Every landmark project we've developed in 
                  Telangana is a testament to our commitment to transparency."
                </p>
                <p className="not-italic text-zinc-500 text-base">
                  Dr. Thakur strongly believes that the true value of real estate is measured 
                  not in square feet, but in the long-term prosperity of the families who 
                  live within them.
                </p>
              </div>
              
              <div className="mt-12">
                 <p className="font-serif text-3xl text-zinc-400">Rajesh Thakur</p>
                 <p className="text-[10px] uppercase tracking-[0.3em] mt-2 text-zinc-400">Signature of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}