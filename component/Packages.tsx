"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Check, ArrowUpRight, MessageCircle, Camera, Cake, Baby, GraduationCap, Sparkles, Users, Building2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVar: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/* ------------------------------------------------------------------ */
/* Types                                                                */
/* ------------------------------------------------------------------ */

type Session = {
  duration: string;
  price: number;
  prints: string;
  digital: string;
  extras?: string[];
  popular?: boolean;
};

type Category = {
  id: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  outdoor: Session[];
  studio: Session[];
};

/* ------------------------------------------------------------------ */
/* Data — paraphrased from the Ibge Media House rate card              */
/* ------------------------------------------------------------------ */

const categories: Category[] = [
  {
    id: "ordinary",
    name: "Ordinary Portrait",
    tagline: "Relaxed, natural portraits — outdoors or in-studio.",
    icon: <Camera size={20} strokeWidth={1.5} />,
    outdoor: [
      { duration: "30 min", price: 600, prints: "No prints", digital: "10 naturally edited digital photos" },
      { duration: "1 hour", price: 750, prints: "10 printed photos", digital: "30 naturally edited digital photos", popular: true },
      { duration: "2 hours", price: 1400, prints: "20 printed photos", digital: "60 naturally edited digital photos" },
    ],
    studio: [
      { duration: "30 min", price: 700, prints: "No prints", digital: "10 naturally edited digital photos" },
      { duration: "1 hour", price: 950, prints: "10 printed photos", digital: "30 naturally edited digital photos", popular: true },
      { duration: "2 hours", price: 1700, prints: "20 printed photos", digital: "60 naturally edited digital photos" },
    ],
  },
  {
    id: "birthday",
    name: "Birthday Shoot",
    tagline: "Celebrate another year with warmth and colour.",
    icon: <Cake size={20} strokeWidth={1.5} />,
    outdoor: [
      { duration: "30 min", price: 600, prints: "No prints", digital: "10 naturally edited digital photos" },
      { duration: "1 hour", price: 800, prints: "10 printed photos", digital: "30 naturally edited digital photos", popular: true },
      { duration: "2 hours", price: 1500, prints: "20 printed photos", digital: "60 naturally edited digital photos" },
    ],
    studio: [
      { duration: "30 min", price: 700, prints: "No prints", digital: "10 naturally edited digital photos" },
      { duration: "1 hour", price: 1000, prints: "10 printed photos", digital: "30 naturally edited digital photos", popular: true },
      { duration: "2 hours", price: 1800, prints: "20 printed photos", digital: "60 naturally edited digital photos" },
    ],
  },
  {
    id: "maternity",
    name: "Maternity Shoot",
    tagline: "Gentle, glowing portraits for the season of waiting.",
    icon: <Baby size={20} strokeWidth={1.5} />,
    outdoor: [
      { duration: "30 min", price: 650, prints: "No prints", digital: "10 naturally edited digital photos" },
      { duration: "1 hour", price: 850, prints: "10 printed photos", digital: "30 naturally edited digital photos", popular: true },
      { duration: "2 hours", price: 1600, prints: "20 printed photos", digital: "60 naturally edited digital photos" },
    ],
    studio: [
      { duration: "30 min", price: 750, prints: "No prints", digital: "10 naturally edited digital photos" },
      { duration: "1 hour", price: 1000, prints: "10 printed photos", digital: "30 naturally edited digital photos", popular: true },
      { duration: "2 hours", price: 1800, prints: "20 printed photos", digital: "60 naturally edited digital photos" },
    ],
  },
  {
    id: "kids",
    name: "Babies & Kids",
    tagline: "Playful, patient sessions built around little ones.",
    icon: <Sparkles size={20} strokeWidth={1.5} />,
    outdoor: [
      { duration: "30 min", price: 650, prints: "No prints", digital: "10 naturally edited digital photos" },
      { duration: "1 hour", price: 850, prints: "10 printed photos", digital: "30 naturally edited digital photos", popular: true },
      { duration: "2 hours", price: 1600, prints: "20 printed photos", digital: "60 naturally edited digital photos" },
    ],
    studio: [
      { duration: "30 min", price: 750, prints: "No prints", digital: "10 naturally edited digital photos" },
      { duration: "1 hour", price: 1000, prints: "10 printed photos", digital: "30 naturally edited digital photos", popular: true },
      { duration: "2 hours", price: 1800, prints: "20 printed photos", digital: "60 naturally edited digital photos" },
    ],
  },
  {
    id: "graduation",
    name: "Graduation",
    tagline: "Mark the milestone with portraits that last.",
    icon: <GraduationCap size={20} strokeWidth={1.5} />,
    outdoor: [
      { duration: "30 min", price: 600, prints: "No prints", digital: "10 naturally edited digital photos" },
      { duration: "1 hour", price: 800, prints: "10 printed photos", digital: "30 naturally edited digital photos", popular: true },
      { duration: "2 hours", price: 1500, prints: "20 printed photos", digital: "60 naturally edited digital photos" },
    ],
    studio: [
      { duration: "30 min", price: 700, prints: "No prints", digital: "10 naturally edited digital photos" },
      { duration: "1 hour", price: 1000, prints: "10 printed photos", digital: "30 naturally edited digital photos", popular: true },
      { duration: "2 hours", price: 1800, prints: "20 printed photos", digital: "60 naturally edited digital photos" },
    ],
  },
  {
    id: "matric",
    name: "Matric Farewell",
    tagline: "A little more time, a little more sparkle.",
    icon: <Sparkles size={20} strokeWidth={1.5} />,
    outdoor: [
      { duration: "30 min", price: 750, prints: "No prints", digital: "20 naturally edited digital photos" },
      { duration: "45 min", price: 900, prints: "10 printed photos", digital: "30 naturally edited digital photos", popular: true },
      { duration: "1 hour", price: 1000, prints: "15 printed photos", digital: "40 naturally edited digital photos" },
      { duration: "2 hours", price: 2000, prints: "30 printed photos", digital: "80 naturally edited digital photos" },
    ],
    studio: [
      { duration: "30 min", price: 850, prints: "No prints", digital: "20 naturally edited digital photos" },
      { duration: "45 min", price: 1000, prints: "10 printed photos", digital: "30 naturally edited digital photos", popular: true },
      { duration: "1 hour", price: 1200, prints: "15 printed photos", digital: "40 naturally edited digital photos" },
      { duration: "2 hours", price: 2400, prints: "30 printed photos", digital: "80 naturally edited digital photos" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Event packages                                                       */
/* ------------------------------------------------------------------ */

type EventPkg = {
  name: string;
  icon: React.ReactNode;
  tiers: {
    duration: string;
    price: number;
    includes: string[];
  }[];
};

const eventPackages: EventPkg[] = [
  {
    name: "Family Ceremonies",
    icon: <Users size={20} strokeWidth={1.5} />,
    tiers: [
      { duration: "1 hour", price: 1500, includes: ["20 printed photos", "100 edited digital photos", "Google Drive delivery"] },
      { duration: "2 hours", price: 3000, includes: ["40 printed photos", "200 edited digital photos", "Google Drive delivery"] },
    ],
  },
  {
    name: "Corporate Events",
    icon: <Building2 size={20} strokeWidth={1.5} />,
    tiers: [
      { duration: "1 hour", price: 3000, includes: ["20 printed photos", "100 edited digital photos", "Google Drive delivery"] },
      { duration: "2 hours", price: 6000, includes: ["40 printed photos", "200 edited digital photos", "Google Drive delivery"] },
    ],
  },
  {
    name: "Events Videography",
    icon: <Camera size={20} strokeWidth={1.5} />,
    tiers: [
      { duration: "Family · 1 hour", price: 3500, includes: ["Cinematic trailer", "Edited video on memory stick", "Google Drive delivery"] },
      { duration: "Family · 2 hours", price: 6500, includes: ["Cinematic trailer", "Edited video on memory stick", "Google Drive delivery"] },
      { duration: "Corporate · 1 hour", price: 5000, includes: ["Cinematic trailer", "Edited video on memory stick", "Google Drive delivery"] },
      { duration: "Corporate · 2 hours", price: 10000, includes: ["Cinematic trailer", "Edited video on memory stick", "Google Drive delivery"] },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

const formatPrice = (n: number) => n.toLocaleString("en-ZA");

/* ------------------------------------------------------------------ */
/* Main component                                                       */
/* ------------------------------------------------------------------ */

export default function Packages() {
  return (
    <section className="relative bg-[var(--color-cream)] py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-honey)]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-blush)]/15 blur-[140px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="relative max-w-3xl mx-auto px-6 text-center mb-24"
      >
        <p className="text-[10px] uppercase tracking-[0.45em] text-[var(--color-ink-soft)]/50 mb-6">
          Rates
        </p>
        <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[1.08] font-light text-[var(--color-ink)]">
          Photoshoot{" "}
          <em className="italic font-normal text-[var(--color-terracotta)]">
            packages
          </em>
        </h2>
        <p className="mt-8 text-base text-[var(--color-ink-soft)]/70 max-w-xl mx-auto leading-relaxed">
          Choose a session length that suits your story. Every booking includes
          natural colour grading and a private online gallery.
        </p>
      </motion.div>

      {/* Portrait categories */}
      <div className="relative max-w-[1400px] mx-auto px-6 space-y-28">
        {categories.map((cat) => (
          <CategoryBlock key={cat.id} category={cat} />
        ))}
      </div>

      {/* Events */}
      <div className="relative max-w-[1400px] mx-auto px-6 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.45em] text-[var(--color-ink-soft)]/50 mb-4">
            Events
          </p>
          <h3 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-light text-[var(--color-ink)]">
            Ceremony &{" "}
            <em className="italic font-normal text-[var(--color-terracotta)]">
              corporate coverage
            </em>
          </h3>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {eventPackages.map((pkg) => (
            <EventCard key={pkg.name} pkg={pkg} />
          ))}
        </motion.div>
      </div>

      {/* Contact footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative mt-24 max-w-3xl mx-auto px-6 text-center"
      >
        <p className="text-xs text-[var(--color-ink-soft)]/60 tracking-wide mb-4">
          Travel outside Kimberley quoted on request · Custom packages welcome
        </p>

      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Category block                                                       */
/* ------------------------------------------------------------------ */

function CategoryBlock({ category }: { category: Category }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-full bg-[var(--color-terracotta)]/10 flex items-center justify-center text-[var(--color-terracotta)]">
          {category.icon}
        </div>
        <div>
          <h3 className="font-serif text-2xl lg:text-3xl font-normal text-[var(--color-ink)]">
            {category.name}
          </h3>
          <p className="text-sm text-[var(--color-ink-soft)]/65 mt-1">
            {category.tagline}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SessionColumn label="Outdoor" sessions={category.outdoor} />
        <SessionColumn label="Studio" sessions={category.studio} />
      </div>
    </motion.div>
  );
}

function SessionColumn({ label, sessions }: { label: string; sessions: Session[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="rounded-[2rem] bg-white/95 border border-[var(--color-ink)]/8 shadow-[0_20px_40px_-20px_rgba(31,27,22,0.12)] p-7"
    >
      <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-ink-soft)]/50 mb-6">
        {label}
      </p>

      <div className="space-y-5">
        {sessions.map((s) => (
          <motion.div
            key={s.duration}
            variants={cardVar}
            className={`relative rounded-2xl p-5 transition-colors ${
              s.popular
                ? "bg-[var(--color-honey)]/10 border border-[var(--color-terracotta)]/25"
                : "bg-[var(--color-cream)]/60 border border-transparent"
            }`}
          >
            {s.popular && (
              <span className="absolute -top-2.5 right-5 text-[9px] uppercase tracking-[0.3em] text-[var(--color-terracotta)] bg-white px-3 py-1 rounded-full border border-[var(--color-terracotta)]/25">
                Most loved
              </span>
            )}

            <div className="flex items-baseline justify-between mb-3">
              <span className="font-serif text-lg text-[var(--color-ink)]">
                {s.duration}
              </span>
              <span className="font-serif text-2xl text-[var(--color-ink)]">
                <span className="text-sm align-top text-[var(--color-ink-soft)]/50 mr-0.5">R</span>
                {formatPrice(s.price)}
              </span>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2.5 text-[13px] text-[var(--color-ink-soft)]/80">
                <Check size={12} className="mt-1 shrink-0 text-[var(--color-terracotta)]/60" strokeWidth={2.5} />
                {s.prints}
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-[var(--color-ink-soft)]/80">
                <Check size={12} className="mt-1 shrink-0 text-[var(--color-terracotta)]/60" strokeWidth={2.5} />
                {s.digital}
              </li>
            </ul>
          </motion.div>
        ))}
      </div>

      <Link
        href="/contact"
        className="group flex items-center justify-between gap-2 mt-7 pt-5 border-t border-[var(--color-ink)]/10 hover:border-[var(--color-terracotta)] transition-colors"
      >
        <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[var(--color-ink)]">
          Book {label.toLowerCase()}
        </span>
        <ArrowUpRight
          size={16}
          className="text-[var(--color-ink)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
        />
      </Link>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Event card                                                           */
/* ------------------------------------------------------------------ */

function EventCard({ pkg }: { pkg: EventPkg }) {
  return (
    <motion.div
      variants={cardVar}
      className="flex flex-col rounded-[2rem] bg-white/95 border border-[var(--color-ink)]/8 shadow-[0_20px_40px_-20px_rgba(31,27,22,0.12)] p-7"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-[var(--color-terracotta)]/10 flex items-center justify-center text-[var(--color-terracotta)]">
          {pkg.icon}
        </div>
        <h4 className="font-serif text-lg text-[var(--color-ink)]">{pkg.name}</h4>
      </div>

      <div className="space-y-4 flex-1">
        {pkg.tiers.map((tier) => (
          <div
            key={tier.duration}
            className="rounded-xl bg-[var(--color-cream)]/60 p-4"
          >
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-[12px] uppercase tracking-[0.15em] text-[var(--color-ink-soft)]/70">
                {tier.duration}
              </span>
              <span className="font-serif text-xl text-[var(--color-ink)]">
                <span className="text-xs align-top text-[var(--color-ink-soft)]/50 mr-0.5">R</span>
                {formatPrice(tier.price)}
              </span>
            </div>
            <ul className="space-y-1.5">
              {tier.includes.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-[12px] text-[var(--color-ink-soft)]/75"
                >
                  <Check size={10} className="mt-1 shrink-0 text-[var(--color-terracotta)]/60" strokeWidth={2.5} />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-[var(--color-ink)]/10 space-y-3">
        <Link
          href="/contact"
          className="group flex items-center justify-between gap-2 hover:text-[var(--color-terracotta)] transition-colors"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[var(--color-ink)]">
            Reserve date
          </span>
          <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </Link>
        <a
          href="https://wa.me/27782185601"
          className="group flex items-center justify-between gap-2 text-[var(--color-ink-soft)]/70 hover:text-[var(--color-ink)] transition-colors"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] flex items-center gap-2">
            <MessageCircle size={11} />
            WhatsApp
          </span>
          <ArrowUpRight size={13} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </motion.div>
  );
}