"use client";
import React from "react";
// Added Variants for TS stability
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// Added LucideIcon for proper typing
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

/* ================= ANIMATION VARIANTS ================= */

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-zinc-400 overflow-hidden pt-12 md:pt-20 border-t border-white/5">
      
      {/* Background Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/5 to-transparent hidden lg:block pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-white/5 to-transparent hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* PRE-FOOTER: NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-16 border-b border-white/5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={footerVariants}>
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-tighter mb-4">
              Stay updated on <span className="italic font-serif text-emerald-100">upcoming landmarks.</span>
            </h3>
            <p className="text-sm text-zinc-500 max-w-md">
              Join our private mailing list for early access to premium listings and market intelligence reports.
            </p>
          </motion.div>
          
          <div className="flex items-center">
            <form className="relative w-full max-w-md group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                autoComplete="email"
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-emerald-500 transition-colors placeholder:text-zinc-700 text-white"
              />
              <button 
                type="submit"
                aria-label="Subscribe"
                className="absolute right-0 bottom-4 text-emerald-500 hover:text-white transition-transform hover:translate-x-1"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 md:gap-16 py-16">
          
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-6 transition-all hover:opacity-80">
              <Image
                src="/Riddhi-Builders-4-1-1024x611.PNG"
                alt="Riddhi Builders Logo"
                width={160}
                height={57}
                // Consistency: Applying the Emerald Filter to the footer logo too
                className="object-contain grayscale brightness-[1.2] sepia-[1] hue-rotate-[100deg] saturate-[5]"
                loading="lazy"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs text-zinc-500">
              Defining the skyline of Maharashtra with high-yield residential 
              assets and sustainable commercial architecture.
            </p>
            <div className="flex gap-3">
              <SocialIcon href="#" Icon={Linkedin} label="LinkedIn" />
              <SocialIcon href="#" Icon={Instagram} label="Instagram" />
              <SocialIcon href="#" Icon={Facebook} label="Facebook" />
              <SocialIcon href="#" Icon={Youtube} label="YouTube" />
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              <FooterLink href="/about">Perspective</FooterLink>
              <FooterLink href="/services">Expertise</FooterLink>
              <FooterLink href="/listings">Inventory</FooterLink>
              <FooterLink href="/contact">Inquiry</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-6">Capabilities</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-emerald-400 transition-colors cursor-default">Strategic Acquisitions</li>
              <li className="hover:text-emerald-400 transition-colors cursor-default">Capital Appreciation</li>
              <li className="hover:text-emerald-400 transition-colors cursor-default">Asset Stewardship</li>
              <li className="hover:text-emerald-400 transition-colors cursor-default">Yield Management</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-6">Headquarters</h4>
            <address className="not-italic space-y-5 text-sm">
              <ContactItem Icon={MapPin} text="Chandrapur, Maharashtra, India" />
              <ContactItem Icon={Phone} text="+91 95495 46568" />
              <ContactItem Icon={Mail} text="info@riddhibuilders.com" />
            </address>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          <p>© {currentYear} Riddhi Builders — Legacy in Every Dimension.</p>
          <p>
            Developed by <span className="text-zinc-400">CodewithAshX</span>
          </p>
        </div>
      </div>

      {/* Decorative Background Text */}
      <div 
        className="absolute -bottom-6 md:-bottom-10 left-0 right-0 pointer-events-none select-none opacity-[0.02] text-[15vw] font-bold text-white leading-none text-center whitespace-nowrap will-change-transform"
        aria-hidden="true"
      >
        RIDDHI BUILDERS
      </div>
    </footer>
  );
}

/* ================= TYPED HELPERS ================= */

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm hover:text-emerald-400 transition-colors flex items-center group py-1"
      >
        <span className="h-px w-0 bg-emerald-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
        {children}
      </Link>
    </li>
  );
}

function ContactItem({ Icon, text }: { Icon: LucideIcon; text: string }) {
  return (
    <div className="flex gap-4 items-start">
      <Icon size={18} className="text-emerald-500 shrink-0 mt-0.5" />
      <span className="leading-relaxed">{text}</span>
    </div>
  );
}

function SocialIcon({ href, Icon, label }: { href: string; Icon: LucideIcon; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all duration-300 active:scale-95"
    >
      <Icon size={16} />
    </a>
  );
}