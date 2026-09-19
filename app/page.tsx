import Hero from "@/component/Hero";
import FeatureCards from "@/component/FeatureCards";
import AnimatedGallery from "@/component/AnimatedGallery";
import Packages from "@/component/Packages";
import AboutUs from "@/component/aboutus";
import Testimonials from "@/component/Testimonials";
import FAQ from "@/component/FAQ";
import Contact from "@/component/Contact";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <AnimatedGallery />
      <Packages />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <Contact />

      <section className="bg-[var(--color-ink)] text-[var(--color-cream)] py-28">
        {/* ...final CTA... */}
      </section>
    </main>
  );
}