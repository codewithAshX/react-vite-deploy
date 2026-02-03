"use client";

import React, { useState } from "react";
// FIXED: Added AnimatePresence to the import list
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Clock, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    },
  },
};

const containerStagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

/* ================= MAIN COMPONENT ================= */

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate high-end concierge response time
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 selection:bg-emerald-500 selection:text-white">
      
      {/* ================= SUCCESS TOAST ================= */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed bottom-10 right-6 md:right-10 z-[100] bg-zinc-900 border border-emerald-500/50 p-6 rounded-2xl shadow-2xl flex items-center gap-4"
          >
            <div className="h-10 w-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-white font-bold">Inquiry Received</p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">Our team will respond shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* ================= HEADER ================= */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp} 
            className="mb-20"
          >
            <span className="text-emerald-500 uppercase tracking-[0.5em] text-xs font-bold mb-4 block">
              Concierge Desk
            </span>
            <h1 className="text-5xl md:text-8xl font-light text-white tracking-tighter leading-none mb-8">
              Let’s start a <br />
              <span className="italic font-serif text-emerald-100">Conversation.</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* ================= LEFT: FORM ================= */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-7 bg-zinc-900/50 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 ml-1">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 ml-1">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 ml-1">Inquiry Type</label>
                  <select className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all appearance-none cursor-pointer">
                    <option className="bg-zinc-900">Residential Investment</option>
                    <option className="bg-zinc-900">Commercial Property</option>
                    <option className="bg-zinc-900">Property Management</option>
                    <option className="bg-zinc-900">Legal Consulting</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 ml-1">Message</label>
                  <textarea 
                    required 
                    rows={5} 
                    placeholder="Tell us about your project or requirements..."
                    className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-600 resize-none"
                  />
                </div>

                <button 
                  disabled={loading}
                  type="submit"
                  className="group w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full font-bold uppercase tracking-tighter flex items-center justify-center gap-4 transition-all disabled:opacity-50"
                >
                  {loading ? "Transmitting..." : "Send Inquiry"}
                  {!loading && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            </motion.div>

            {/* ================= RIGHT: INFO ================= */}
            <div className="lg:col-span-5 space-y-12">
              
              <motion.div 
                variants={containerStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                {[
                  { icon: MapPin, label: "HQ Address", value: "Kabir Nagar, Vivek Nagar, Chandrapur, Maharashtra 442401" },
                  { icon: Phone, label: "Direct Line", value: "+91 98765 43210" },
                  { icon: Mail, label: "Official Correspondence", value: "riddhibuilders@gmail.com" },
                ].map((item, i) => (
                  <motion.div variants={fadeUp} key={i} className="flex gap-6 group">
                    <div className="h-14 w-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-1">{item.label}</p>
                      <p className="text-white text-lg font-light tracking-tight">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-emerald-500" size={20} />
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm">Service Hours</h3>
                </div>
                <div className="space-y-4 text-sm tracking-wide">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Monday – Friday</span>
                    <span className="text-white">09:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Saturday</span>
                    <span className="text-white">10:00 — 16:00</span>
                  </div>
                  <div className="flex justify-between text-zinc-600 italic">
                    <span>Sunday</span>
                    <span>By Appointment Only</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP PLACEHOLDER ================= */}
      <section className="h-[400px] w-full bg-zinc-900 relative flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
        <p className="text-zinc-500 text-xs uppercase tracking-[0.5em] relative z-20">Live Location Feed — Secure Interface</p>
      </section>
    </div>
  );
}