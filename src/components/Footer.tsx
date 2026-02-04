"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-zinc-400 overflow-hidden pt-12 md:pt-20 border-t border-white/5">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/5 to-transparent hidden lg:block pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-white/5 to-transparent hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* ================= NEWSLETTER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-16 border-b border-white/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-tighter mb-4">
              Stay updated on{" "}
              <span className="italic font-serif text-emerald-100">
                upcoming landmarks.
              </span>
            </h3>
            <p className="text-sm text-zinc-500 max-w-md">
              Get early access to premium listings, upcoming launches, and real
              estate insights.
            </p>
          </motion.div>

          <form
            className="relative w-full max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email address"
              autoComplete="email"
              className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-emerald-500 transition-colors text-white placeholder:text-zinc-700"
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

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 md:gap-16 py-16">
          {/* Brand */}
          <div className="md:col-span-4">
           <Link href="/" className="inline-block mb-6 group">
  <div className="relative inline-flex items-center">
    <Image
      src="/Riddhi-Builders-4-1-1024x611.PNG"
      alt="Riddhi Builders"
      width={160}
      height={57}
      priority
      className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
    />

    {/* Soft brand glow (very subtle) */}
    <span className="pointer-events-none absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-emerald-500/10 blur-2xl" />
  </div>
</Link>


            <p className="text-sm leading-relaxed mb-8 max-w-xs text-zinc-500">
              Shaping Maharashtra’s skyline with premium residential and
              commercial developments designed for long-term value.
            </p>

            <div className="flex gap-3">
              <SocialIcon href="#" Icon={Linkedin} label="LinkedIn" />
              <SocialIcon href="#" Icon={Instagram} label="Instagram" />
              <SocialIcon href="#" Icon={Facebook} label="Facebook" />
              <SocialIcon href="#" Icon={Youtube} label="YouTube" />
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/properties">Listings</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-6">
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Residential Development</li>
              <li>Commercial Projects</li>
              <li>Investment Advisory</li>
              <li>Property Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-6">
              Headquarters
            </h4>
            <address className="not-italic space-y-5 text-sm">
              <ContactItem
                Icon={MapPin}
                text="Chandrapur, Maharashtra, India"
              />
              <ContactItem Icon={Phone} text="+91 95495 46568" />
              <ContactItem
                Icon={Mail}
                text="info@riddhibuilders.com"
              />
            </address>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/5 py-8 flex flex-col gap-6 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {currentYear} Riddhi Builders. All rights reserved.</p>
            <p>
              Developed by <span className="text-zinc-400">CodewithAshX</span>
            </p>
          </div>

          {/* Legal Disclaimer */}
          <p className="text-[10px] text-zinc-500 leading-relaxed max-w-4xl text-center sm:text-left">
            All images, layouts, plans, and specifications shown are artistic
            impressions for representation purposes only and are subject to
            change without prior notice. MahaRERA registration numbers are
            available on request.
          </p>
        </div>
      </div>

      {/* Background Wordmark */}
      <div
        aria-hidden="true"
        className="absolute -bottom-8 md:-bottom-12 left-0 right-0 text-center text-[15vw] font-bold text-white opacity-[0.02] select-none pointer-events-none whitespace-nowrap"
      >
        RIDDHI BUILDERS
      </div>
    </footer>
  );
}

/* ================= HELPERS ================= */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm hover:text-emerald-400 transition-colors flex items-center group"
      >
        <span className="h-px w-0 bg-emerald-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
        {children}
      </Link>
    </li>
  );
}

function ContactItem({
  Icon,
  text,
}: {
  Icon: LucideIcon;
  text: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <Icon size={18} className="text-emerald-500 shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

function SocialIcon({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: LucideIcon;
  label: string;
}) {
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
