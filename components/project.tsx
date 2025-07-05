/*"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  title1,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <h3 className="text-xl font-semibold">{title1}</h3>
          <p className="text-m mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
} */

/* "use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type ProjectProps = {
  title: string;
  title1?: string;
  description: string[];
  tags: string[];
  imageUrl: any;
  githubUrl?: string;
  doiUrl?: string;
};

export default function Project({
  title,
  title1,
  description,
  tags,
  imageUrl,
  githubUrl,
  doiUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          // {Title and optional subtitle }
          <h3 className="text-2xl font-semibold">{title}</h3>
          {title1 && <h4 className="text-lg font-medium mt-1">{title1}</h4>}

          // {Description as paragraphs }
          <div className="mt-2 text-sm text-gray-700 dark:text-white/70 leading-relaxed space-y-1">
            {Array.isArray(description)
              ? description.map((point, i) => (
                  <p key={i} className="mb-1">
                    {point}
                  </p>
                ))
              : <p>{description}</p>}
          </div>

          // { Tags + GitHub + DOI buttons }
          <div className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </span>
            ))}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-[0.7rem] uppercase tracking-wider bg-gray-800 text-white rounded-full hover:bg-gray-700 transition dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                GitHub
              </a>
            )}

            {doiUrl && (
              <a
                href={doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-[0.7rem] uppercase tracking-wider bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
              >
                DOI
              </a>
            )}
          </div>
        </div>

        // { Project Image }
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
} */

  "use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type ProjectProps = {
  title: string;
  title1?: string;
  description: string[];
  tags: string[];
  imageUrl: StaticImageData;
  githubUrl?: string;
  doiUrl?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  doiUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Define the link target (GitHub takes priority over DOI)
  const actionLink = githubUrl || doiUrl;
  const hoverLabel = githubUrl ? "View Code" : doiUrl ? "Read Paper" : "";

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <a
        href={actionLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <section className="relative bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem] transition hover:bg-gray-200 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:ml-[2rem] sm:group-even:ml-[20rem]">
            <h3 className={`font-semibold ${title.length > 35 ? 'text-xl' : 'text-2xl'}`}>
              {title}
            </h3>

            {/* Description */}
            <div className="mt-2 text-sm text-gray-700 dark:text-white/70 leading-relaxed space-y-1">
              {description.map((point, i) => (
                <p key={i} className="mb-1">
                  {point}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project image */}
          <Image
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
              transition 
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2

              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2

              group-even:right-[initial] group-even:-left-40"
          />

          {/* Hover overlay label */}
          {actionLink && (
            <div className="absolute bottom-4 right-4 text-xs sm:text-sm px-3 py-1 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {hoverLabel}
            </div>
          )}
        </section>
      </a>
    </motion.div>
  );
}

