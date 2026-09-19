"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Camera,
  Lightbulb,
  Sparkles,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Check,
  MapPin,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const STUDIO_PHOTOS = [
  { src: "/studio1.jpeg", alt: "Ibge Media House studio — wide view" },
  { src: "/studio2.jpeg", alt: "Ibge Media House studio — lighting setup" },
  { src: "/studio3.jpeg", alt: "Ibge Media House studio — camera equipment" },
];

const STUDIO_PACKAGES = [
  {
    id: "package-one",
    number: "01",
    name: "Studio Space Only",
    price: 150,
    includes: ["Use of studio space"],
    icon: <MapPin size={20} strokeWidth={1.5} />,
  },
  {
    id: "package-two",
    number: "02",
    name: "Space + Lighting",
    price: 200,
    includes: ["Studio space", "Lighting equipment"],
    icon: <Lightbulb size={20} strokeWidth={1.5} />,
  },
  {
    id: "package-three",
    number: "03",
    name: "Space + Camera",
    price: 250,
    includes: ["Studio space", "Camera equipment"],
    icon: <Camera size={20} strokeWidth={1.5} />,
  },
  {
    id: "package-four",
    number: "04",
    name: "Full Studio Access",
    price: 300,
    includes: ["Studio space", "Camera equipment", "Lighting equipment"],
    icon: <Sparkles size={20} strokeWidth={1.5} />,
    featured: true,
  },
];

const WHATSAPP_NUMBER = "27782185601";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const formatPrice = (n: number) => n.toLocaleString("en-ZA");

export default function Studio() {
  return (
    <section className="relative bg-[var(--color-cream)] py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-honey)]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-blush)]/15 blur-[140px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="relative max-w-3xl mx-auto px-6 text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 border border-[#E87C2B]/40 bg-[#E87C2B]/8 rounded-full px-4 py-2 mb-6">
          <Camera size={12} className="text-[#E87C2B]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#E87C2B] font-semibold">
            Studio Hire · Kimberley
          </span>
        </div>

        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.1] font-light text-[var(--color-ink)]">
          Hire the{" "}
          <em className="italic font-medium text-[#E87C2B]">Ibge Studio</em>
        </h2>
        <p className="mt-7 text-base text-[var(--color-ink-soft)]/70 max-w-xl mx-auto leading-relaxed">
          A fully-equipped photo and video studio in Diamant Park, Kimberley —
          available for photographers and videographers by the hour.
        </p>
      </motion.div>

      {/* Photo gallery + video */}
      <div className="relative max-w-[1400px] mx-auto px-6 mb-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {STUDIO_PHOTOS.map((photo) => (
            <motion.div
              key={photo.src}
              variants={item}
              whileHover={{ y: -4 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_40px_-20px_rgba(31,27,22,0.2)] border border-[var(--color-ink)]/8 group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Video — centered, large */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mt-8 mx-auto w-full max-w-5xl lg:max-w-6xl"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(31,27,22,0.3)] border border-[var(--color-ink)]/8 bg-black">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/studio1.jpeg"
              className="w-full h-full object-cover"
            >
              <source src="/vid (1).mp4" type="video/mp4" />
              <source src="/vid%20(1).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        <p className="text-center text-[11px] uppercase tracking-[0.3em] text-[var(--color-ink-soft)]/50 mt-4">
          A look inside the studio
        </p>
      </div>

      {/* Packages header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative max-w-3xl mx-auto px-6 text-center mb-12"
      >
        <p className="text-[10px] uppercase tracking-[0.45em] text-[var(--color-ink-soft)]/50 mb-4">
          Hire Rates
        </p>
        <h3 className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] leading-tight font-light text-[var(--color-ink)]">
          Studio{" "}
          <em className="italic font-normal text-[#E87C2B]">packages</em>
        </h3>
        <p className="mt-5 text-sm text-[var(--color-ink-soft)]/70 max-w-xl mx-auto">
          For photographers &amp; videographers only · One-hour sessions
        </p>
      </motion.div>

      {/* Packages grid */}
      <div className="relative max-w-[1400px] mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {STUDIO_PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={item}
              whileHover={{ y: -6 }}
              className={`relative rounded-[2rem] p-7 border transition-all duration-300 ${
                pkg.featured
                  ? "bg-white border-[#E87C2B]/30 shadow-[0_30px_60px_-25px_rgba(232,124,43,0.35)]"
                  : "bg-white/95 border-[var(--color-ink)]/8 shadow-[0_20px_40px_-20px_rgba(31,27,22,0.12)]"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-[#E87C2B] bg-white px-3 py-1 rounded-full border border-[#E87C2B]/30 font-semibold">
                  Full access
                </span>
              )}

              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-full bg-[#E87C2B]/10 flex items-center justify-center text-[#E87C2B]">
                  {pkg.icon}
                </div>
                <span className="font-serif text-4xl text-[var(--color-ink)]/10 font-bold">
                  {pkg.number}
                </span>
              </div>

              <h4 className="font-serif text-lg text-[var(--color-ink)] mb-4 leading-tight">
                {pkg.name}
              </h4>

              <div className="flex items-baseline gap-2 mb-5">
                <span className="font-serif text-3xl text-[var(--color-ink)]">
                  <span className="text-base align-top text-[var(--color-ink-soft)]/50 mr-0.5">
                    R
                  </span>
                  {formatPrice(pkg.price)}
                </span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-ink-soft)]/60">
                  / hour
                </span>
              </div>

              <div className="h-px bg-[var(--color-ink)]/8 mb-5" />

              <ul className="space-y-2.5">
                {pkg.includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-start gap-2.5 text-[13px] text-[var(--color-ink-soft)]/85"
                  >
                    <Check
                      size={12}
                      className="mt-1 shrink-0 text-[#E87C2B]/70"
                      strokeWidth={2.5}
                    />
                    {inc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        className="relative max-w-3xl mx-auto px-6 mt-14"
      >
        <div className="rounded-2xl bg-white/60 border border-[var(--color-ink)]/8 p-6 lg:p-7">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={14} className="text-[#E87C2B]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#E87C2B] font-bold">
              Important notes
            </span>
          </div>
          <ul className="space-y-3 text-[14px] text-[var(--color-ink-soft)]/85 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-[#E87C2B]" />
              <span>
                An extra <strong className="text-[var(--color-ink)]">R80 per hour</strong> is
                charged for any additional time used or held before or after the session.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-[#E87C2B]" />
              <span>
                Camera and lighting equipment may only be used{" "}
                <strong className="text-[var(--color-ink)]">inside the studio</strong>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-[#E87C2B]" />
              <span>
                Studio hire is available for{" "}
                <strong className="text-[var(--color-ink)]">
                  photographers and videographers only
                </strong>
                .
              </span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* CTA — WhatsApp only, centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
        className="relative max-w-3xl mx-auto px-6 mt-12 text-center"
      >
        <a
          href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
            "Hi Ibge Media House! I'd like to book the studio for a session."
          )}`}
          className="group inline-flex items-center justify-center gap-3 bg-[#E87C2B] text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#c96620] transition-colors duration-300 rounded-sm shadow-lg shadow-[#E87C2B]/25"
        >
          <MessageCircle size={14} />
          Book the Studio on WhatsApp
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
          />
        </a>

        <p className="text-center text-[11px] text-[var(--color-ink-soft)]/60 mt-6">
          36 Anderson Road · Diamant Park · Kimberley
        </p>
      </motion.div>
    </section>
  );
}