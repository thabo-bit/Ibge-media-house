import Hero from "@/component/Hero";
import FeatureCards from "@/component/FeatureCards";
import AnimatedGallery from "@/component/AnimatedGallery";
import Packages from "@/component/Packages";
import AboutUs from "@/component/aboutus";
import Testimonials from "@/component/Testimonials";
import Studio from "@/component/rentingStudio";
import FAQ from "@/component/FAQ";
import Contact from "@/component/Contact";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="features">
        <FeatureCards />
      </section>

      <section id="portfolio">
        <AnimatedGallery />
      </section>

      <section id="services">
        <Packages />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="reviews">
        <Testimonials />
      </section>

      <section id="studio">
        <Studio />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}