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
import omfLogo from "@/public/OMF.png";

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
];

export const experiencesData = [
  {
    title: "OneMain Financial - Platform Engineering Intern",
    location: "Evansville, IN",
    description:
      ["Built an automated backup-and-restore solution in Python for 1,000+ Grafana Cloud dashboards, exporting every dashboard with zero data loss and version-controlling each snapshot in Git.",
      "Diagnosed a recurring authentication failure in the existing sync tool, migrated to a more reliable pipeline, and automated the workflow with a scheduled GitHub Actions job gated by reviewer approval before restores.",
      "Analyzed 13,890 production incidents across five monitoring platforms in Python, finding ~50 alerts drove 80%+ of total noise, and recommended targeted tuning to reduce alert fatigue.",
      "Configured and validated Grafana alerting for AWS CloudWatch Synthetics canaries with per-environment Slack routing; delivered a cost analysis showing a cloud-native approach ~4.3x more cost-efficient than existing tooling at scale."],
    logo: omfLogo,
    icon: React.createElement(CgWorkAlt),
    date: "May 2026 - August 2026",
  },
  {
    title: "Boeing - Software Engineer",
    location: "Bengaluru, India",
    description:
      ["Containerized applications using Docker and automated CI/CD pipelines via GitLab, reducing manual deployment efforts by 80\%.",
      "Boosted HPC runtime efficiency by 60% through parallel scripting using PBS and Python on clustered Linux environments.",
      "Engineered an LLM-integrated chatbot with FastAPI and Angular, improving user response accuracy by 40%.",
      "Developed and reviewed 150+ ADA procedures and 60+ test cases for International Space Station software systems enhancing reliability and compliance."],
    logo: boeingLogo,
    icon: React.createElement(CgWorkAlt),
    date: "September 2024 - July 2025",
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
      ["Developed speech-to-text and DOCX-to-MP3 conversion pipelines, facilitating accessibility for 100+ end users.",
      "Built multilingual GUI tools and avatar generator transforming photos into MP4 avatars for educational content."],
    logo: light,
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 – November 2023",
  },
];

export const projectsData = [
  {
    title: "Stealth Assessment in a Tile-Based Grid World",
    description:
      "A knowledge-inference AI that determines what an agent knows purely from its action logs, with no access to the agent's internals. Implemented six agent classes spanning BFS/DFS search, greedy heuristics, rule-based planning, and case-based reasoning, plus a Bayesian assessor that correctly separated informed from uninformed agents across 14 scenarios.",
    tags: ["Python", "Search Algorithms", "Bayesian Inference", "AI"],
    link: "https://github.com/RohithGowdaD/Stealth-Assessment-in-a-Tile-Based-Grid-World",
    linkLabel: "View Code",
  },
  {
    title: "MuteSign: Deep Learning Sign Language Recognition",
    description:
      "An end-to-end gesture recognition pipeline covering acquisition, preprocessing, and classification, built to make communication easier for the hearing impaired. Reached 96% accuracy using CNN and RNN architectures across 1,000+ sign language videos, published with IEEE.",
    tags: ["TensorFlow", "Keras", "OpenCV", "Scikit-learn", "Python"],
    link: "https://ieeexplore.ieee.org/document/10435143",
    linkLabel: "Read Paper",
  },
  {
    title: "Home Credit Default Risk: Loan Default Prediction",
    description:
      "An end-to-end ML pipeline predicting loan default on a large, highly imbalanced financial dataset, engineering relational features across multiple credit tables to reach 0.78 test ROC-AUC with gradient boosting. Designed a stacking ensemble combining Random Forest and HistGradientBoosting with a logistic regression meta-learner, and benchmarked a PyTorch MLP alongside it.",
    tags: ["Python", "Scikit-learn", "PyTorch", "Pandas"],
  },
  {
    title: "Artha: AI Finance Platform",
    description:
      "A personal finance app that reads receipts and turns them into structured spending insights, so tracking expenses does not require manual entry. Combines a Next.js frontend with a Supabase backend and Gemini for receipt parsing and categorization.",
    tags: ["Next.js", "Python", "Supabase", "Gemini AI", "Streamlit"],
    link: "https://github.com/RohithGowdaD/Artha---AI-Finance-Platform",
    linkLabel: "View Code",
  },
  {
    title: "Phishing Detection Website",
    description:
      "A web tool that classifies URLs as safe or malicious to help users avoid online scams. Trained a scikit-learn classifier on URL and page level features and served it through a Flask interface for real time checks.",
    tags: ["Python", "Flask", "Scikit-learn", "Anaconda"],
    link: "https://github.com/RohithGowdaD/Phishing_Detection_Website",
    linkLabel: "View Code",
  },
];

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
];
