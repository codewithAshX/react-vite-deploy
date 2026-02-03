"use client";

import React from "react";
import Link from "next/link"; // FIXED: Added missing import
import { motion, Variants } from "framer-motion";
import {
  Building2,
  KeyRound,
  Wrench,
  TrendingUp,
  Scale,
  FileText,
  ArrowRight,
} from "lucide-react";

/* ================= ANIMATION VARIANTS ================= */

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ================= DATA ================= */

const SERVICES = [
  {
    title: "Strategic Acquisitions",
    icon: Building2,
    tagline: "High-yield Property Sales",
    description: "Our acquisition desk moves beyond standard listings. We utilize proprietary market data to identify residential and commercial assets with significant upside potential.",
    features: ["Market Valuation", "Growth Forecasting", "Due Diligence", "Portfolio Matching"],
  },
  {
    title: "Capital Appreciation",
    icon: TrendingUp,
    tagline: "Investment Consulting",
    description: "Real estate is the cornerstone of generational wealth. Our consultants provide a macro-view of the markets, helping you hedge against inflation.",
    features: ["ROI Modeling", "Exit Planning", "Wealth Advisory", "Risk Analysis"],
  },
  {
    title: "Asset Stewardship",
    icon: Wrench,
    tagline: "Premium Management",
    description: "We treat your property as an asset, not just a building. Our management division handles technical maintenance and vendor management ensuring pristine condition.",
    features: ["24/7 Support", "Maintenance", "Financial Reporting", "Tenant Care"],
  },
  {
    title: "Yield Management",
    icon: KeyRound,
    tagline: "End-to-End Rentals",
    description: "Maximize occupancy rates with our digital-first rental ecosystem. We vet tenants through a rigorous multi-point check and handle lease cycles.",
    features: ["Tenant Vetting", "Rent Disbursement", "Lease Management", "Market Pricing"],
  },
];

const STEPS = [
  { number: "01", title: "Strategic Briefing", description: "Intensive discovery session to align with your financial objectives." },
  { number: "02", title: "Market Intelligence", description: "Deep-dive into regional data, infrastructure projects, and trends." },
  { number: "03", title: "Structural Excellence", description: "High-grade materials and sustainable engineering updates." },
  { number: "04", title: "Legal Fortification", description: "Meticulous filing of RERA documents and tax clearance." },
  { number: "05", title: "Asset Handover", description: "Seamless transition into our management ecosystem." },
];

/* ================= SUB-COMPONENTS ================= */



function ProcessTimeline() {
  return (
    <section className="bg-[#0a0a0a] py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-left">
          <span className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-xs">Our Methodology</span>
          <h2 className="text-4xl md:text-6xl font-light text-white mt-4">
            The Riddhi <span className="italic font-serif text-emerald-100">Protocol</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="relative group">
              <div className="text-6xl font-serif italic text-white/5 mb-6 group-hover:text-emerald-500/20 transition-colors">
                {step.number}
              </div>
              
              {/* Connector lines logic */}
              {idx !== STEPS.length - 1 && (
                <>
                  <div className="absolute top-8 left-0 h-px w-full bg-gradient-to-r from-emerald-500/50 to-transparent hidden md:block -z-10" />
                  <div className="absolute left-8 top-20 w-px h-16 bg-gradient-to-b from-emerald-500/50 to-transparent md:hidden" />
                </>
              )}

              <h4 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= MAIN PAGE ================= */

export default function ServicesPage() {
  return (
    <div className="bg-zinc-950 text-zinc-300 selection:bg-emerald-500">
      
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)]" />
        </div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10">
          <span className="text-emerald-500 uppercase tracking-[0.5em] text-xs font-bold mb-6 block">
            Capabilities & Expertise
          </span>
          <h1 className="text-5xl md:text-8xl font-light text-white tracking-tighter mb-8 leading-[0.9]">
            Integrated <br />
            <span className="italic font-serif text-emerald-100 font-normal">Solutions.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed">
            From initial land acquisition to long-term asset management, 
            Riddhi Builders provides a 360-degree real estate ecosystem.
          </p>
        </motion.div>
      </section>

      <ProcessTimeline />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/5 p-8 md:p-12 transition-all duration-500 hover:border-emerald-500/30 ${
                index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5"
              }`}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-zinc-800 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all duration-500">
                    <service.icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold bg-zinc-800/50 px-3 py-1 rounded-full">
                    {service.tagline}
                  </span>
                </div>

                <h2 className="text-3xl font-light text-white mb-6 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h2>

                <p className="text-zinc-400 leading-relaxed mb-8 flex-grow text-sm md:text-base">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/5">
                  {service.features.map((feature, idx) => (
                    <div key={`${service.title}-${idx}`} className="flex items-center gap-2 text-[10px] md:text-xs font-medium uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      <div className="h-1 w-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-emerald-500/5 blur-[100px] group-hover:bg-emerald-500/10 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-32 bg-white text-zinc-950 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-12 leading-tight">
              The <span className="italic font-serif">In-House</span> <br />
              Legal & Valuation Desk
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-full border border-zinc-200 flex items-center justify-center bg-zinc-50">
                  <Scale size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Rigorous Due Diligence</h4>
                  <p className="text-zinc-600 leading-relaxed text-sm">
                    Our legal team performs exhaustive title searches ensuring your investment is shielded from litigation and title defects.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-full border border-zinc-200 flex items-center justify-center bg-zinc-50">
                  <FileText size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Transparent Valuations</h4>
                  <p className="text-zinc-600 leading-relaxed text-sm">
                    We utilize three-tier valuation methods—Comparative, Income, and Cost analysis—to provide an accurate market assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden bg-zinc-900 p-12 flex items-center justify-center group min-h-[400px]">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.4)_0%,transparent_70%)]" />
             <div className="relative z-10 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-500 mb-6">Ready to Begin?</p>
                <h3 className="text-4xl font-light mb-10 text-white">Let's discuss your <br />property goals.</h3>
                <Link 
                  href="/contact"
                  className="bg-white text-zinc-950 px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest flex items-center gap-4 hover:bg-emerald-500 hover:text-white transition-all mx-auto active:scale-95"
                >
                  Consult an Expert <ArrowRight size={18} />
                </Link>
             </div>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-zinc-950 text-center border-t border-white/5">
        <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase">
          Riddhi Builders — Excellence in Every Dimension
        </p>
      </footer>
    </div>
  );
}