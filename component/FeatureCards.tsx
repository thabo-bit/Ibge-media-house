"use client";
import { motion, Variants } from "framer-motion";
import { Heart, Tag, Sparkles, Coffee } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const features = [
  {
    icon: Heart,
    title: "Zero Pressure Shoots",
    body: "Never been in front of a camera? No problem — we guide your angles step-by-step with warm direction and easy laughter.",
    tint: "bg-[var(--color-blush)]/50",
    iconColor: "text-[var(--color-terracotta)]",
  },
  {
    icon: Tag,
    title: "Clear Upfront Prices",
    body: "Packages start at just R600 — prints included. What you see is what you pay, with no surprise charges.",
    tint: "bg-[var(--color-honey)]/25",
    iconColor: "text-[#b8860b]",
  },
  {
    icon: Sparkles,
    title: "Master Skin Retouch",
    body: "Natural colour grading and gentle skin polish that keeps your genuine glow intact — never overdone.",
    tint: "bg-[var(--color-blush)]/40",
    iconColor: "text-[var(--color-terracotta)]",
  },
  {
    icon: Coffee,
    title: "Warm Kimberley Hospitality",
    body: "Free WiFi, a comfortable studio, secure parking and open Sunday bookings — you're always welcome here.",
    tint: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
];

export default function FeatureCards() {
  return (
    <section className="relative bg-[var(--color-cream)] py-14 sm:py-16 md:py-20 px-5 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5"
        >
          {features.map(({ icon: Icon, title, body, tint, iconColor }) => (
            <motion.div
              key={title}
              variants={card}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group bg-white rounded-2xl p-5 sm:p-6 shadow-sm shadow-[var(--color-ink)]/5 border border-[var(--color-ink)]/5 hover:shadow-lg hover:shadow-[var(--color-ink)]/8 hover:border-[var(--color-ink)]/10 transition-all duration-300"
            >
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${tint} flex items-center justify-center mb-3.5 sm:mb-4 group-hover:scale-105 transition-transform duration-300`}
              >
                <Icon
                  size={20}
                  className={`${iconColor} sm:w-[22px] sm:h-[22px]`}
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-semibold text-[var(--color-ink)] mb-1.5 sm:mb-2 leading-tight">
                {title}
              </h3>
              <p className="text-[13px] sm:text-sm text-[var(--color-ink-soft)]/80 leading-relaxed">
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}