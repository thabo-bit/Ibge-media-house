
import Hero from "@/component/Hero";
import Gallery from "@/component/Gallery";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featured = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
];

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-gold)] mb-3">
              Recent Sessions
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light">
              Selected Work
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden md:flex items-center gap-2 text-sm text-white/70 hover:text-[var(--color-gold)] transition"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <Gallery images={featured} />
      </section>

      <section className="bg-[var(--color-cream)] text-[var(--color-ink)] py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-gold)] mb-4">
            Let&apos;s Create
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Something Beautiful Together
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-xl mx-auto">
            Every session is unique. Tell us your story and we&apos;ll craft
            images you&apos;ll cherish for a lifetime.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-ink)] text-[var(--color-cream)] px-9 py-4 rounded-full font-semibold text-sm hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition"
          >
            Start Your Enquiry <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}