/* "use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-4">
        Hi! I'm <span className="font-bold text-lg">Rohith Gowda</span> — a 
        <span className="font-bold"> Software Engineer</span> and 
        <span className="font-bold"> MSCS student at Indiana University Bloomington</span> with a passion for 
        <span className="font-medium"> research, system performance, and impactful software solutions</span>.
      </p>

      <p className="mb-4">
        At <span className="font-semibold">Boeing</span>, I worked on software systems for the International Space Station, 
        optimizing performance on HPC clusters using <span className="font-medium">PBS scripting and parallel Python</span>. 
        This resulted in a <span className="font-semibold text-green-700">60% reduction in runtime</span> for key simulations.
      </p>

      <p className="mb-4">
        During my internship at <span className="font-semibold">GyanSys</span>, I developed a 
        <span className="font-medium"> Salesforce-based Hospital Management System</span> to streamline patient workflows 
        and reduce manual overhead.
      </p>

      <p className="mb-4">
        Beyond industry experience, I enjoy working on meaningful research and personal projects — including a 
        <span className="font-medium"> sign language recognition system</span>, an 
        <span className="font-medium"> AI-based phishing detection platform</span>, and 
        <span className="font-medium"> accessibility tools</span> like speech-to-text converters and educational avatars, 
        created during my time at an NGO.
      </p>

      <p className="mb-4">
        I'm passionate about combining <span className="font-medium">technical depth</span> with 
        <span className="font-medium">human impact</span> — through code, creativity, and continuous learning.
      </p>

      <p className="mt-6 text-pink-600 font-medium">
        📍 I'm currently exploring roles and projects in 
        <span className="font-semibold"> AI-driven applications</span>, 
        <span className="font-semibold"> cloud platforms</span>, and 
        <span className="font-semibold"> intelligent systems</span>. 
        <br />Let’s build something meaningful together!
      </p>
      
    </motion.section>
  );
} */

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      aria-label="About Section"
      className="mb-28 max-w-[42rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      //className="relative h-[100vh] px-6 max-w-[42rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      //"mb-28 max-w-[42rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-4 text-gray-800 dark:text-gray-300">
        Hi, I’m <span className="font-bold text-lg">Rohith Gowda</span>, a
        <span className="font-bold"> Software Engineer</span> and
        <span className="font-bold"> MS Computer Science student at Indiana University Bloomington</span>.
      </p>

      <p className="mb-4 text-gray-800 dark:text-gray-300">
        I’ve worked across <span className="font-bold">OneMain Financial</span> and <span className="font-bold">Boeing</span>,
        building <span className="font-medium">automation, cloud infrastructure, and monitoring systems</span> for
        <span className="font-medium"> software that has to stay reliable at scale</span>. I like problems where the answer
        isn’t obvious yet, whether that’s <span className="font-medium">tracking down a production failure</span> or
        <span className="font-medium"> figuring out what a system is really telling you</span>.
      </p>

      <p className="mb-4 text-gray-800 dark:text-gray-300">
        Outside of work I spend time on <span className="font-medium">machine learning research</span>. My work on
        <span className="font-medium"> deep-learning sign language recognition</span> is
        <span className="font-semibold"> published with IEEE</span>.
      </p>

      <p className="mt-6 text-pink-600 dark:text-pink-400 font-medium">
        📍 I’m looking for <span className="font-semibold">full-time software engineering roles</span> across
        <span className="font-semibold"> development, DevOps, and platform engineering</span>.
        Let’s build something meaningful together!
      </p>
    </motion.section>
  );
}



