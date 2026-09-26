"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
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
      const top =
        el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[var(--color-cream)] overflow-hidden">
      <div className="relative w-full min-h-screen lg:h-screen pt-28 sm:pt-32 lg:pt-24 pb-8">
        <Image
          src="/batch_Website pic.png"
          alt="Ibge Media House photographer"
          fill
          priority
          sizes="(max-width: 639px) 100vw, 0px"
          className="object-cover object-center sm:hidden"
        />

        <Image
          src="/batch_Website pic.png"
          alt="Ibge Media House photographer"
          fill
          priority
          sizes="(min-width: 640px) 100vw, 0px"
          className="hidden sm:block object-cover object-[center_30%]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/60 to-black/75 sm:hidden pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent pointer-events-none" />

        <div className="absolute inset-0 pt-28 sm:pt-32 lg:pt-24 pb-8">
          <div className="max-w-7xl w-full h-full mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col justify-center text-center lg:text-left items-center lg:items-start"
            >
              {/* Brand lockup: IBGE MEDIA HOUSE with side rules */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6"
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
                  className="hidden sm:block h-px w-8 bg-[#E87C2B] origin-right"
                />
                <div className="relative overflow-hidden">
                  <span className="block text-[11px] sm:text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.42em] text-white whitespace-nowrap">
                    Ibge<span className="text-[#E87C2B]"> Media</span> House
                  </span>
                  {/* shimmer sweep */}
                  <motion.span
                    initial={{ x: "-120%" }}
                    animate={{ x: "220%" }}
                    transition={{
                      duration: 2.4,
                      delay: 1.2,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-20deg]"
                  />
                </div>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
                  className="hidden sm:block h-px w-8 bg-[#E87C2B] origin-left"
                />
              </motion.div>

              <span className="text-[10px] sm:text-[11px] lg:text-[12px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[#E87C2B] font-bold mb-4 sm:mb-5">
                Kimberley · Est. 2018
              </span>

              <h1 className="font-serif text-[clamp(2rem,8vw,4.75rem)] leading-[1.05] text-white mb-5 sm:mb-8 drop-shadow-lg">
                <span className="block font-bold">Photography</span>
                <span className="block font-normal italic">& Videography</span>
              </h1>

              <p className="text-white/95 text-[14px] sm:text-base lg:text-lg leading-[1.7] sm:leading-relaxed max-w-md mb-8 sm:mb-10 drop-shadow-md">
                A full-service media house in the Northern Cape — telling the
                stories of families, artists, schools and businesses with
                photographs and films that feel honest, generous and
                unmistakably ours.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
                className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto"
              >
                <a
                  href="#portfolio"
                  onClick={(e) => handleClick(e, "#portfolio")}
                  className="group inline-flex items-center justify-center gap-3 bg-[#E87C2B] text-white px-7 sm:px-8 py-3.5 sm:py-4 text-[11px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.25em] hover:bg-[#c96620] transition-colors duration-300 rounded-sm shadow-lg shadow-black/20"
                >
                  View Portfolio
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleClick(e, "#contact")}
                  className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-7 sm:px-8 py-3.5 sm:py-4 text-[11px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.25em] hover:bg-white hover:text-black transition-colors duration-300 rounded-sm backdrop-blur-sm"
                >
                  Book a Session
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
