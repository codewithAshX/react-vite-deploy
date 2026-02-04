"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_HEIGHT = 88;

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

  /* ================= SCROLL (OPTIMIZED) ================= */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= LOCK BODY SCROLL ================= */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ================= CLOSE ON ROUTE CHANGE ================= */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      style={{ height: NAV_HEIGHT }}
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6">
        <div className="flex h-full items-center justify-between">

          {/* LOGO — COMPLETELY UNTOUCHED */}
          <Link href="/" className="relative z-[110] flex items-center">
            <Image
              src="/Riddhi-Builders-4-1-1024x611.PNG"
              alt="Riddhi Builders"
              width={128}
              height={40}
              priority
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-12">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] font-medium uppercase tracking-[0.28em] transition-colors ${
                    active
                      ? "text-emerald-400"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}

                  {active && (
                    <motion.span
                      layoutId="lux-underline"
                      className="absolute -bottom-2 left-0 h-px w-full bg-emerald-500"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-6 rounded-full border border-emerald-500/40 px-6 py-2 text-[10px] font-semibold uppercase tracking-widest text-emerald-400 hover:bg-emerald-500 hover:text-black transition-colors"
            >
              Inquire
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[110] md:hidden p-2 text-white"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-black md:hidden"
          >
            <div className="flex h-full flex-col justify-center px-10">
              <div className="space-y-10">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-4xl font-light tracking-tight ${
                        isActive(link.href)
                          ? "text-emerald-500 italic"
                          : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-20 border-t border-white/10 pt-8">
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  Headquarters
                </p>
                <p className="mt-1 text-sm text-zinc-300">
                  Chandrapur, Maharashtra – 442401
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
