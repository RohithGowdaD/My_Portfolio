import About from "@/components/about";
import Contact from "../components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks"; 
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 sm:px-8 space-y-32">
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
