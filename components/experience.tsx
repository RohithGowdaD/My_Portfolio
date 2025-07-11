"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28">
      <div className="mt-24">
        <SectionHeading>My experience</SectionHeading>
      </div>
      { /* @ts-ignore */}
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <div className="flex items-center gap-3 mb-1">
                {item.logo && (
                  <img
                    src={item.logo.src}
                    alt="Company Logo"
                    className="w-6 h-6 object-contain"
                  />
                )}
                <h3 className="font-semibold text-base sm:text-lg">{item.title}</h3>
              </div>
              <p className="!text-xs !font-normal !mt-0 text-gray-600 dark:text-gray-400">
                {item.location}
              </p>
              <ul className="list-disc pl-5 !mt-1 !font-normal text-sm text-gray-700 dark:text-white/75 space-y-2">
                {item.description.map((point: string, i: number) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
