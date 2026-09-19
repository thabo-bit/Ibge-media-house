"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVar: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "IBGE Media House brought an insane amount of energy and creative direction! The lighting with the coloured gels looked straight out of an international magazine cover. Booking through WhatsApp was instant and effortless!",
    name: "Amara Vance",
    role: "Fashion Model & Content Creator",
    avatar: "/images/32.jpg",
  },
  {
    quote:
      "The 24″×36″ museum grand print in our living room is a conversation starter every time guests visit. IBGE captured genuine emotion and helped us pick the exact right frame dimension!",
    name: "David & Maya Sterling",
    role: "Newlyweds",
    avatar: "/images/baby.jpg",
  },
  {
    quote:
      "Professional, punctual, and visionary. We shot our entire winter collection in one studio day. Turnaround was lightning fast and our e-commerce conversion jumped immediately. 10/10 recommendation.",
    name: "Kaelen Brody",
    role: "Founder, Kaelen Atelier",
    avatar: "/images/hero.jpg",
  },
  {
    quote:
      "Our matric farewell photos came out absolutely stunning. The team made all the nerves disappear and every single photo felt natural. We'll treasure these forever.",
    name: "Lerato Mokoena",
    role: "Matric Farewell Client",
    avatar: "/images/4.jpg",
  },
  {
    quote:
      "They photographed our baby's first birthday and captured the sweetest moments we didn't even notice happening. Warm, patient, and endlessly kind with the little ones.",
    name: "Thandi & Sipho Nkosi",
    role: "Parents",
    avatar: "/images/6.jpg",
  },
  {
    quote:
      "Our corporate headshots finally look professional. Fast turnaround, clear communication, and the whole team loved their photos. Highly recommended for any business.",
    name: "Ryan Petersen",
    role: "Operations Manager, Kimberley Finance",
    avatar: "/images/8.jpg",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Scroll to a specific card index
  const scrollToCard = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement;
    if (card) {
      el.scrollTo({
        left: card.offsetLeft - el.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const next = () =>
    scrollToCard(Math.min(activeIdx + 1, testimonials.length - 1));
  const prev = () => scrollToCard(Math.max(activeIdx - 1, 0));

  // Track active card based on scroll position (for dots + arrows)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const cardWidth = (el.children[0] as HTMLElement)?.offsetWidth ?? 1;
      const gap = 24; // matches gap-6
      const idx = Math.round(el.scrollLeft / (cardWidth + gap));
      setActiveIdx(Math.min(Math.max(idx, 0), testimonials.length - 1));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative bg-[var(--color-cream)] py-32 overflow-hidden">
      {/* Ambient warmth */}
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
        <div className="inline-flex items-center gap-2 bg-[var(--color-honey)]/20 border border-[var(--color-honey)]/40 rounded-full px-4 py-2 mb-8">
          <Star
            size={12}
            className="fill-[var(--color-terracotta)] text-[var(--color-terracotta)]"
          />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink)] font-semibold">
            Client Experiences & Testimonials
          </span>
        </div>

        <h2 className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] font-light text-[var(--color-ink)]">
          Loved for Our{" "}
          <em className="italic font-medium text-[var(--color-terracotta)]">
            Warmth & Artistry
          </em>
        </h2>
        <p className="mt-7 text-base text-[var(--color-ink-soft)]/70 max-w-xl mx-auto leading-relaxed">
          Hear from clients who stepped into our studio and discovered a
          welcoming, stress-free photography experience.
        </p>
      </motion.div>

      {/* Carousel viewport */}
      <div className="relative max-w-[1300px] mx-auto">
        {/* Left/right edge fades so cards seem to roll out of view */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 lg:w-24 z-10 bg-gradient-to-r from-[var(--color-cream)] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 lg:w-24 z-10 bg-gradient-to-l from-[var(--color-cream)] to-transparent" />

        {/* Scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px-6 lg:px-[max(1.5rem,calc((100%-1200px)/2))] pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
          {/* Trailing spacer so the last card can center */}  
          <div className="shrink-0 w-6 lg:w-24" aria-hidden="true" />
        </div>

        {/* Arrow buttons */}
        <div className="relative max-w-[1300px] mx-auto px-6 mt-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={prev}
            disabled={activeIdx === 0}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full bg-white border border-[var(--color-ink)]/10 shadow-sm flex items-center justify-center text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIdx
                    ? "w-8 bg-[var(--color-terracotta)]"
                    : "w-1.5 bg-[var(--color-ink)]/20 hover:bg-[var(--color-ink)]/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            disabled={activeIdx === testimonials.length - 1}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full bg-white border border-[var(--color-ink)]/10 shadow-sm flex items-center justify-center text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
  index,
}: {
  t: Testimonial;
  index: number;
}) {
  return (
    <motion.figure
      variants={cardVar}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (index % 3) * 0.05 }}
      whileHover={{ y: -6 }}
      className="snap-center shrink-0 w-[85vw] sm:w-[400px] lg:w-[420px] relative flex flex-col bg-white rounded-[1.75rem] p-8 border border-[var(--color-ink)]/6 shadow-[0_20px_40px_-20px_rgba(31,27,22,0.1)] hover:shadow-[0_30px_60px_-20px_rgba(31,27,22,0.18)] transition-shadow duration-500"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-[var(--color-honey)] text-[var(--color-honey)]"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-[14.5px] leading-[1.75] text-[var(--color-ink-soft)]/85 flex-1">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Divider */}
      <div className="h-px bg-[var(--color-ink)]/8 my-7" />

      {/* Author */}
      <figcaption className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-honey)]/40 bg-[var(--color-blush)]/40 shrink-0">
          <Image
            src={t.avatar}
            alt={t.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-[13.5px] font-semibold text-[var(--color-ink)] leading-tight">
            {t.name}
          </p>
          <p className="text-[12px] text-[var(--color-ink-soft)]/60 mt-0.5">
            {t.role}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
}