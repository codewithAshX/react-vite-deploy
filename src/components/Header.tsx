"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Listings", href: "/listings" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-lg border-b border-white/5 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* ================= LOGO ================= */}
          <Link href="/" className="relative z-[110] transition-transform hover:scale-105">
            <Image
              src="/Riddhi-Builders-4-1-1024x611.PNG"
              alt="Riddhi Builders"
              width={120}
              height={45}
              priority
              className={`object-contain transition-all duration-500 ${
                scrolled ? "brightness-110" : "brightness-100 grayscale invert"
              }`}
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                    active ? "text-emerald-400" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span 
                      layoutId="navUnderline"
                      className="absolute -bottom-2 left-0 w-full h-px bg-emerald-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            
            {/* CTA Button in Nav */}
            <Link 
              href="/contact"
              className="ml-4 px-6 py-2 border border-emerald-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
            >
              Inquire
            </Link>
          </nav>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-[110] md:hidden text-white p-2"
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-zinc-950 z-[100] flex flex-col justify-center px-10 md:hidden"
          >
            <div className="space-y-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-4xl font-light tracking-tighter ${
                      pathname === link.href ? "text-emerald-500 italic serif" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-white/10 space-y-4">
              <p className="text-zinc-500 text-xs uppercase tracking-widest">Global Headquarters</p>
              <p className="text-zinc-300 text-sm">Hyderabad, Telangana</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}