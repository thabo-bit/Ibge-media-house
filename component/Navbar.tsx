"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Packages & Rates", href: "#services" },
  { label: "The Studio", href: "#studio" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  // Track scroll for the navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Track which section is currently in view (for the active link underline)
  useEffect(() => {
    const ids = ["home", "portfolio", "about", "services", "studio", "reviews", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        }
        if (best) setActiveId(best.target.id);
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Smooth scroll to the section
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 90;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
    }
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[var(--color-cream)]/85 backdrop-blur-md border-b border-[var(--color-ink)]/10 py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-12 gap-4 sm:gap-8">
        {/* Logo — left */}
        <Link
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="flex items-center shrink-0 group -mt-1 sm:-mt-2 lg:-mt-3"
          aria-label="Ibge Media House — home"
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

        {/* Nav links — right aligned (desktop only) */}
        <ul className="hidden lg:flex items-center gap-7 xl:gap-9 text-[15px] ml-auto">
          {links.map((l) => {
            const active = activeId === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                  className={`relative transition-colors group font-medium whitespace-nowrap ${
                    active
                      ? "text-[var(--color-terracotta)]"
                      : "text-[var(--color-ink)] hover:text-[var(--color-terracotta)]"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-[var(--color-terracotta)] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden ml-auto text-[var(--color-ink)] p-2 -mr-2 rounded-full hover:bg-[var(--color-ink)]/5 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[var(--color-cream)] border-t border-[var(--color-ink)]/10"
          >
            <ul className="px-5 sm:px-6 py-2">
              {links.map((l) => {
                const active = activeId === l.href.slice(1);
                return (
                  <li
                    key={l.href}
                    className="border-b border-[var(--color-ink)]/5 last:border-none"
                  >
                    <a
                      href={l.href}
                      onClick={(e) => handleClick(e, l.href)}
                      className={`block py-4 text-base transition-colors ${
                        active
                          ? "text-[var(--color-terracotta)] font-medium"
                          : "text-[var(--color-ink-soft)] hover:text-[var(--color-terracotta)]"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}