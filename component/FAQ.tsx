"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVar: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

type QA = {
  question: string;
  answer: string;
};

const faqs: QA[] = [
  {
    question: "How do I book a photoshoot session with IBGE Media House?",
    answer:
      "Simply click any 'Book Session' or 'Reserve' button on the site, or send us a message directly on WhatsApp. We'll confirm availability, answer any questions, and lock in your preferred date and time. A 50% deposit secures your slot — the balance is due on the day of the shoot.",
  },
  {
    question: "What print sizes do you offer and can I see how it looks on my wall?",
    answer:
      "We offer archival prints from 8″×10″ up to 24″×36″ museum-grade, plus custom sizes on request. Our Wall Simulator tool lets you upload a photo of your wall and preview any print in true-to-scale proportion before you commit — so you never guess the size.",
  },
  {
    question: "How long does photo editing and delivery take?",
    answer:
      "Portrait sessions are delivered in 48 hours, editorial and gala shoots within 5–7 days, and weddings or full campaigns within 2–3 weeks. You'll receive a private online gallery with full-resolution downloads, plus a curated selection of teaser previews within 24 hours.",
  },
  {
    question: "Can you help with styling, wardrobe, and creative direction?",
    answer:
      "Absolutely. Every session includes a pre-shoot consultation where we plan outfits, backdrops, color palettes, and mood. Higher packages include a full creative director, wardrobe assistant, and hair & makeup on set — so you just show up and shine.",
  },
  {
    question: "Do you shoot on-location or in your studio?",
    answer:
      "Both! We have a state-of-the-art studio equipped with continuous LED lights, Profoto strobes, multiple seamless paper colors, cyc walls, and fog machines. We also love shooting at golden hour outdoor locations, urban streetscapes, and client estates.",
  },
  {
    question: "What if I'm nervous in front of the camera?",
    answer:
      "Most of our clients are! We guide every pose with calm direction, play music that puts you at ease, and keep the whole shoot relaxed and conversational. By the end, you'll forget the camera is even there.",
  },
  {
    question: "Do you travel outside Kimberely?",
    answer:
      "Yes — we shoot across South Africa and internationally. Travel within Gauteng is included. For destinations beyond, we quote a flat travel fee that covers transport, accommodation, and any permits needed.",
  },
];

export default function FAQ() {
  // Allow only one open at a time — set to null to close all
  const [openIndex, setOpenIndex] = useState<number | null>(4); // 5th item open by default (like the reference)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="relative bg-[var(--color-cream)] py-32 overflow-hidden">
      {/* Ambient warmth */}
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-[var(--color-honey)]/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full bg-[var(--color-blush)]/15 blur-[130px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="relative max-w-3xl mx-auto px-6 text-center mb-16"
      >
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 bg-[var(--color-honey)]/20 border border-[var(--color-honey)]/40 rounded-full px-4 py-2 mb-6">
          <HelpCircle
            size={12}
            className="text-[var(--color-terracotta)]"
          />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink)] font-semibold">
            Helpful Questions & Answers
          </span>
        </div>

        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.1] font-light text-[var(--color-ink)]">
          Frequently Asked Questions
        </h2>
      </motion.div>

      {/* FAQ list */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="relative max-w-4xl mx-auto px-6 space-y-4"
      >
        {faqs.map((faq, i) => (
          <FAQItem
            key={faq.question}
            faq={faq}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </motion.div>
    </section>
  );
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: QA;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={itemVar}
      className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-[var(--color-ink)]/12 shadow-[0_25px_50px_-25px_rgba(31,27,22,0.15)]"
          : "border-[var(--color-ink)]/8 shadow-[0_15px_30px_-20px_rgba(31,27,22,0.08)] hover:shadow-[0_20px_40px_-20px_rgba(31,27,22,0.12)] hover:border-[var(--color-ink)]/15"
      }`}
    >
      {/* Question button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 text-left px-7 py-6 cursor-pointer"
      >
        <span className="font-serif text-[1.05rem] md:text-[1.15rem] leading-snug text-[var(--color-ink)] pr-4">
          {faq.question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[var(--color-ink)]/4 group-hover:bg-[var(--color-ink)]/8 transition-colors"
        >
          <ChevronDown
            size={16}
            className="text-[var(--color-ink-soft)]"
            strokeWidth={2}
          />
        </motion.span>
      </button>

      {/* Answer — animated expand */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: EASE },
              opacity: { duration: 0.3, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-7 border-t border-[var(--color-ink)]/8">
              <p className="pt-5 text-[14.5px] leading-[1.75] text-[var(--color-ink-soft)]/85">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}