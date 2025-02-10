import Benefits from "@/components/sections/Benefits";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import HowToPlay from "@/components/sections/HowToPlay";
import TeamCarousel from "@/components/sections/TeamCarousel";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <TeamCarousel />
      <HowToPlay />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Footer />
      {/* <Footer /> */}
    </main>
  );
}
