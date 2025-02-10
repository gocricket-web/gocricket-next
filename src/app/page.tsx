import dynamic from "next/dynamic";

// Lazy loading Client Components (No `ssr: false`)
const Benefits = dynamic(() => import("@/components/sections/Benefits"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Footer = dynamic(() => import("@/components/sections/Footer"));
const HowToPlay = dynamic(() => import("@/components/sections/HowToPlay"));
const TeamCarousel = dynamic(() => import("@/components/sections/TeamCarousel"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));

// Keeping Hero Static (Above-the-Fold Content)
import Hero from "@/components/sections/Hero";

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
    </main>
  );
}
