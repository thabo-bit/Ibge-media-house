"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Packages & Rates", href: "/services" },
  { label: "The Studio", href: "/studio" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-cream)]/90 backdrop-blur-xl border-b border-[var(--color-ink)]/10 py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center px-5 sm:px-8 lg:px-12 gap-4 sm:gap-8">
        {/* Logo — left */}
        <Link
          href="/"
          className="flex items-center shrink-0 group -mt-1 sm:-mt-2 lg:-mt-3"
        >
          <Image
            src="/IBGE LOGO.png"
            alt="IBGE Media House"
            width={320}
            height={120}
            priority
            className="h-12 sm:h-14 lg:h-20 xl:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </Link>

        {/* Nav links — centered (desktop only) */}
        <ul className="hidden lg:flex flex-1 items-center justify-center gap-7 xl:gap-9 text-[15px]">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative text-[var(--color-ink)] hover:text-[var(--color-terracotta)] transition-colors group font-medium whitespace-nowrap"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[var(--color-terracotta)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Spacer to keep links centered */}
        <div
          className="hidden lg:block shrink-0 w-[130px] xl:w-[160px]"
          aria-hidden="true"
        />

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-auto text-[var(--color-ink)] p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[var(--color-cream)] border-t border-[var(--color-ink)]/10 px-5 sm:px-6"
          >
            {links.map((l) => (
              <li
                key={l.href}
                className="py-4 border-b border-[var(--color-ink)]/5 last:border-none"
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-[var(--color-ink-soft)] text-base"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}