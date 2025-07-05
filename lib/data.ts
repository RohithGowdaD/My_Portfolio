import React from "react";
import Image from "next/image";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/Artha.png";
import rmtdevImg from "@/public/mutesign.png";
import wordanalyticsImg from "@/public/Phishing.png";
import wordanalyticsImg1 from "@/public/FWMS.png";
import wordanalyticsImg2 from "@/public/Mobile.png";
import boeingLogo from "@/public/images.jpeg";
import gyansysLogo from "@/public/gyan.jpg";
import light from "@/public/light.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
    
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Boeing - Software Engineer",
    location: "Bengaluru, India",
    description:
      ["Developed and reviewed 150+ ADA procedures and 60+ test cases for International Space Station software systems enhancing reliability and compliance.",
      "Containerized applications using Docker and automated CI/CD pipelines via GitLab, reducing manual deployment efforts by 80\%.",
      " Engineered an LLM-integrated chatbot with FastAPI and Angular, improving user response accuracy by 40%.",
      " Boosted HPC runtime efficiency by 60% through parallel scripting using PBS and Python on clustered Linux environments." ],
    logo: boeingLogo,
    icon: React.createElement(CgWorkAlt),
      // icon: React.createElement(LuGraduationCap),
    date: "September 2024 - Present",
  },
  {
    title: "Gyansys - Salesforce intern",
    location: "Bengaluru, India",
    description:
      [" Created a Salesforce-based Hospital Management System managing 500+ patient records,appointments, and medical histories,reducing manual overhead by 70%.",
        " Configured 10+ custom objects, role-based access controls, and SLDS-based Lightning App Pages, improving UI responsiveness and data integrity.",
        " Automated workflows using Process Builder and Flows to streamline operations."],
    logo: gyansysLogo,
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 – May 2024",
  },
  {
    title: "Light of The Self Foundation (NGO) - Software Intern",
    location: "Bengaluru, India",
    description:
      [" Developed speech-to-text and DOCX-to-MP3 conversion pipelines, facilitating accessibility for 100+ end users.",
      " Developed multilingual GUI tools and avatar generator transforming photos into MP4 avatars for educational content."],
    logo: light,
    icon: React.createElement(CgWorkAlt),
      //icon: React.createElement(FaReact),
    date: "May 2023 – November 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Artha - AI Finance Platform",
    description:
      ["Developed a smart app that reads receipts and gives helpful spending insights to manage money better."],
    tags: ["Python", "Next.js", "Supabase", "Gemini AI", "Streamlit"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/RohithGowdaD/Artha---AI-Finance-Platform",
  },
  {
    title1: "MuteSign: Deep Learning Sign Language Recognition",
    description:
      ["Built a tool that understands hand gestures and converts them into text, making communication easier for the hearing-impaired."],
    tags: ["TensorFlow/Keras","OpenCV", "Python", "Scikit-learn", "Pandas"],
    imageUrl: rmtdevImg,
    doiUrl: "https://ieeexplore.ieee.org/document/10435143",
  },
  {
    title: "Phishing Detection Website",
    description:
      ["Created a website that helps people identify fake or dangerous links, protecting users from online scams."],
    tags: ["Anaconda", "Flask", "Python", "Sklearn"],
    imageUrl: wordanalyticsImg,
    githubUrl: "https://github.com/RohithGowdaD/Phishing_Detection_Website",
  },

  {
    title: "Notes App (Android)",
    description:
      ["Developed a secure Android notes app with customizable templates and real-time sync using Firebase."],
    tags: ["Java", "XML", "Firebase", "Cloud Services"],
    imageUrl: wordanalyticsImg2,
    githubUrl: "https://github.com/RohithGowdaD/Aahara",
  },

  {
    title: "Aahara – Food Donation & Waste Management System",
    description:
      ["Built a web app to minimize food waste through efficient donation and automated tracking, promoting sustainability."],
    tags: ["HTML","CSS","Javascript","Node.js","Express.js","Mongodb"],
    imageUrl: wordanalyticsImg1,
    githubUrl: "https://github.com/RohithGowdaD/Aahara",
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "JavaScript", "HTML", "CSS", "Apex", "ADA"],
  },
  {
    title: "AI/ML Tools",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "Pandas", "NumPy"],
  },
  {
    title: "Big Data & Cloud",
    skills: ["Spark", "Hadoop", "HDFS", "Delta Lake", "AWS", "Azure"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "Supabase"],
  },
  {
    title: "Frameworks / Tools",
    skills: ["React", "Next.js", "Flask", "Node.js", "Streamlit", "Tailwind CSS", "FastAPI"],
  },
  {
    title: "DevOps & Web",
    skills: [
      "Prometheus",
      "Grafana",
      "PBS scripting",
      "Docker",
      "Git",
      "Kubernetes",
      "CI/CD",
      "GitLab",
      "GitHub Actions",
    ],
  },
]as const;
