import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}
