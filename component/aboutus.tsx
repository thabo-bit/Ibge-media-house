"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Camera, MapPin, Users, Building2, Phone, Mail, ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function AboutUs() {
  return (
    <section className="relative bg-[var(--color-cream)] overflow-hidden">
      {/* Ambient warmth */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-honey)]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-blush)]/15 blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* LEFT — sticky logo & quick facts */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="lg:col-span-4 lg:sticky lg:top-32 self-start"
          >
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-[var(--color-ink)]/6 shadow-[0_30px_60px_-30px_rgba(31,27,22,0.2)]">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <Image
                  src="/IBGE LOGO.png"
                  alt="Ibge Media House"
                  width={320}
                  height={120}
                  className="h-24 lg:h-28 w-auto object-contain"
                />
              </div>

              <div className="h-px bg-[var(--color-ink)]/8 mb-8" />

              {/* Quick facts */}
              <ul className="space-y-5">
                <FactRow icon={<MapPin size={16} />} label="Based in">
                  36 Anderson Road, Diamant Park, Kimberley
                </FactRow>
                <FactRow icon={<Camera size={16} />} label="Founded">
                  June 2018 · Relaunched 2021
                </FactRow>
                <FactRow icon={<Users size={16} />} label="Founders">
                  Bvoopfoo N. Ndlela &amp; Tafara T. Bwerinofa
                </FactRow>
                <FactRow icon={<Building2 size={16} />} label="Studio">
                  A five-roomed property with photo &amp; video studio, kitchen,
                  secure parking and free WiFi
                </FactRow>
              </ul>

              <div className="h-px bg-[var(--color-ink)]/8 my-8" />

              {/* Contact */}
              <div className="space-y-3">
                <a
                  href="tel:0782185601"
                  className="flex items-center gap-3 text-[13px] text-[var(--color-ink)] hover:text-[var(--color-terracotta)] transition-colors group"
                >
                  <Phone size={14} className="text-[var(--color-terracotta)]" />
                  <span>078 218 5601</span>
                  <ArrowUpRight
                    size={12}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
                <a
                  href="mailto:hello@ibgemediahouse.co.za"
                  className="flex items-center gap-3 text-[13px] text-[var(--color-ink)] hover:text-[var(--color-terracotta)] transition-colors group"
                >
                  <Mail size={14} className="text-[var(--color-terracotta)]" />
                  <span className="truncate">hello@ibgemediahouse.co.za</span>
                  <ArrowUpRight
                    size={12}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>

              <Link
                href="/contact"
                className="mt-8 flex items-center justify-between gap-3 bg-[var(--color-ink)] text-[var(--color-cream)] px-6 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[var(--color-terracotta)] transition-colors duration-300 group"
              >
                Book a session
                <ArrowUpRight
                  size={14}
                  className="group-hover:rotate-45 transition-transform duration-300"
                />
              </Link>
            </div>
          </motion.aside>

          {/* RIGHT — the story */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8 space-y-14"
          >
            {/* Eyebrow + headline */}
            <motion.header variants={item}>
              <p className="text-[10px] uppercase tracking-[0.45em] text-[var(--color-terracotta)] mb-5">
                About Ibge Media House
              </p>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.05] font-light text-[var(--color-ink)] mb-8">
                A Kimberley studio built on{" "}
                <em className="italic font-medium text-[var(--color-terracotta)]">
                  warmth, craft
                </em>{" "}
                and community.
              </h1>
              <p className="text-lg text-[var(--color-ink-soft)]/80 leading-relaxed max-w-2xl">
                Since 2018, we&apos;ve been telling the stories of families,
                artists, schools and businesses across the Northern Cape — with
                photographs and films that feel honest, generous and unmistakably
                yours.
              </p>
            </motion.header>

            {/* Our story */}
            <Section title="Our story" variants={item}>
              <p>
                Ibge Media House was founded in June 2018 by Bvoopfoo N. Ndlela and
                Tafara T. Bwerinofa in the heart of Kimberley. What began as a
                small photography outfit grew into a full-service media production
                house serving families, schools, community events and businesses
                across the province.
              </p>
              <p>
                After a quiet 2020, we returned in 2021 with an expanded studio, new
                offerings and a renewed commitment to quality. Today we work from a
                well-equipped five-roomed property at 36 Anderson Road, Diamant
                Park — complete with a dedicated photo and video studio, kitchen,
                secure parking and free WiFi for our team and clients alike.
              </p>
            </Section>

            {/* Mission */}
            <Section title="Our mission" variants={item}>
              <p className="font-serif text-[1.35rem] lg:text-[1.5rem] leading-relaxed text-[var(--color-ink)] italic">
                &ldquo;To be the leading art, media and entertainment company in the
                province and country — uplifting lives by delivering relatable and
                relevant content.&rdquo;
              </p>
            </Section>

            {/* What we do — condensed into one paragraph */}
            <Section title="What we do" variants={item}>
              <p>
                Photography and videography for families, businesses, schools and
                community events. Music videos, documentaries, short and feature
                films, podcasts and commercial adverts. Shoots for media, art and
                entertainment personalities. Plus digital magazine publication,
                graphic design and digital marketing.
              </p>
            </Section>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-components                                                       */
/* ------------------------------------------------------------------ */

function FactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 text-[var(--color-terracotta)] shrink-0">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-soft)]/50 mb-1">
          {label}
        </p>
        <p className="text-[13.5px] leading-relaxed text-[var(--color-ink)]">
          {children}
        </p>
      </div>
    </li>
  );
}

function Section({
  title,
  variants,
  children,
}: {
  title: string;
  variants?: Variants;
  children: React.ReactNode;
}) {
  return (
    <motion.section variants={variants}>
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-px bg-[var(--color-terracotta)]" />
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-terracotta)] font-semibold">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-[15px] leading-[1.85] text-[var(--color-ink-soft)]/85">
        {children}
      </div>
    </motion.section>
  );
}