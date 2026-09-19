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
    question: "How do I book a photoshoot with Ibge Media House?",
    answer:
      "Tap any 'Book Session' button on the site, or message us directly on WhatsApp at 078 218 5601. We'll confirm availability, chat through your ideas, and lock in your date and time. We're open on Sundays and public holidays — great if you can only shoot on weekends.",
  },
  {
    question: "Do you shoot outdoors or in a studio?",
    answer:
      "Both. We work from a well-equipped studio at 36 Anderson Road in Diamant Park, Kimberley — with a dedicated photo and video setup, secure parking, and free WiFi. We also love shooting outdoors at golden hour, in the veld, and at client homes or venues across the Northern Cape.",
  },
  {
    question: "How many photos do I get, and are prints included?",
    answer:
      "It depends on the package you choose. Our 30-minute sessions include 10 edited digital photos with no prints. Our 1-hour sessions include 30 edited photos plus 10 printed photos. Our 2-hour sessions include 60 edited photos plus 20 printed photos. Everything is delivered via a private Google Drive link, and prints are ready for collection at the studio.",
  },
  {
    question: "How long until I receive my edited photos?",
    answer:
      "Most sessions are delivered within 48 hours. Larger shoots like matric farewells, weddings, and events may take a little longer — usually 5 to 7 days. We'll always give you a clear timeline when you book.",
  },
  {
    question: "I've never done a photoshoot before — will I feel awkward?",
    answer:
      "Almost everyone says that before their first shoot. We guide every pose with calm, friendly direction, play music that keeps things relaxed, and keep the whole session conversational. By the end, you'll forget the camera is even there.",
  },
  {
    question: "What should I wear or bring?",
    answer:
      "Bring 2–3 outfit changes if your package allows — solid colours and textures photograph beautifully. We'll chat through your look before the shoot and can offer guidance on colours that work with your skin tone and the backdrop. Feel free to bring props, kids' favourite toys, or anything meaningful to you.",
  },
  {
    question: "Do you travel outside Kimberley?",
    answer:
      "Yes — we shoot across the Northern Cape, including Barkly West, Warrenton, Klerksdorp, and Bloemfontein. Travel outside Kimberley is quoted on request, based on distance and shoot length. Reach out on WhatsApp for a quick quote.",
  },
  {
    question: "What types of sessions do you offer?",
    answer:
      "Portraits, birthdays, maternity, babies and kids, graduations, matric farewells, weddings, and anniversary shoots. We also cover family ceremonies, corporate events, and provide event videography with cinematic trailers. Custom packages are always welcome — just ask.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="relative bg-[var(--color-cream)] py-32 overflow-hidden">
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-[var(--color-honey)]/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full bg-[var(--color-blush)]/15 blur-[130px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="relative max-w-3xl mx-auto px-6 text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-[var(--color-honey)]/20 border border-[var(--color-honey)]/40 rounded-full px-4 py-2 mb-6">
          <HelpCircle size={12} className="text-[var(--color-terracotta)]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink)] font-semibold">
            Helpful Questions & Answers
          </span>
        </div>

        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.1] font-light text-[var(--color-ink)]">
          Frequently Asked Questions
        </h2>
      </motion.div>

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