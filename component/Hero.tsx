"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      <div className="relative w-full min-h-screen lg:h-screen pt-28 sm:pt-32 lg:pt-24 pb-8">
        {/* ── MOBILE background image (full bleed, no torn edge) ── */}
        <Image
          src="/images/alif-ngoylung-jg-6ARMiaPM-unsplash-e1680551576364.webp"
          alt="Ibge Media House photographer on a mountain peak"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:hidden"
        />

        {/* ── DESKTOP background image (torn paper edge on right) ── */}
        <Image
          src="/Gemini_Generated_Image_2w3dhr2w3dhr2w3d(1).jpeg"
          alt="Ibge Media House photographer on a mountain peak"
          fill
          priority
          sizes="100vw"
          className="hidden lg:block object-contain object-left"
        />

        {/* Soft gradient on mobile so text stays readable over the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 lg:hidden pointer-events-none" />

        {/* Text overlay */}
        <div className="absolute inset-0 pt-28 sm:pt-32 lg:pt-24 pb-8">
          <div className="max-w-7xl w-full h-full mx-auto px-5 sm:px-6 flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              className="w-full max-w-md lg:max-w-none lg:w-[42%] flex flex-col justify-center text-center lg:text-left items-center lg:items-start"
            >
              {/* Eyebrow */}
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-[#d4a017] font-semibold mb-4 sm:mb-5">
                Kimberley · Est. 2018
              </span>

              {/* Heading */}
              <h1 className="font-serif text-[clamp(2rem,7vw,4.5rem)] leading-[1.05] text-white lg:text-[#1e293b] mb-5 sm:mb-8">
                <span className="block font-bold">Photography</span>
                <span className="block font-normal">& Videography</span>
              </h1>

              {/* Description */}
              <p className="text-white/85 lg:text-[#64748b] text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mb-8 sm:mb-10">
                A full-service media house in the Northern Cape — telling the
                stories of families, artists, schools and businesses with
                photographs and films that feel honest, generous and
                unmistakably yours.
              </p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
                className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto"
              >
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center justify-center gap-3 bg-[#d4a017] text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#b8860b] transition-colors duration-300 rounded-sm shadow-md"
                >
                  View Portfolio
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 border border-white/40 lg:border-[#1e293b]/20 text-white lg:text-[#1e293b] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] hover:border-white/80 lg:hover:border-[#1e293b]/60 transition-colors duration-300 rounded-sm backdrop-blur-sm lg:backdrop-blur-none"
                >
                  Book a Session
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}