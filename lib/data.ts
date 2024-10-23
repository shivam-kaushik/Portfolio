import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import smartbuy from "@/public/smartbuy.png";
import authentication from "@/public/authentication.png";
import cancerprediction from "@/public/cancerprediction.jpg";
import customerchurn from "@/public/customerchurn.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const educationData = [
  {
    degree: "Postgraduation in Software Engineering Technology - AI",
    school: "Centennial College",
    location: "Toronto, ON, Canada",
    description: "Specialized in artificial intelligence and Software Development.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2023 - Present",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Amity University",
    location: "Delhi, India",
    description: "Focused on software engineering, algorithms, and system design.",
    icon: React.createElement(LuGraduationCap),
    date: "July 2018 - June 2022",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer (Co-op)",
    company: "Ontario Government",
    location: "Toronto, ON, Canada",
    description:
      "Developed, maintained, and optimized Java applications to enhance efficiency in public service projects.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2024 - Present",
  },
  {
    title: "Software Engineer - II",
    company: "Thales",
    location: "Noida, India",
    description:
      "Improved development methodologies, fostering ongoing enhancements and improvements",
    icon: React.createElement(CgWorkAlt),
    date: "March 2023 - June 2023",
  },
  {
    title: "Software Engineer - I",
    company: "Thales",
    location: "Noida, India",
    description:
      "Restructured SAS code, optimizing Thales’s product architecture and performance",
    icon: React.createElement(FaReact),
    date: "Aug 2022 - March 2023",
  },
  {
    title: "Software Engineer Intern",
    company: "Thales",
    location: "Noida, India",
    description:
      "Collaborated with QA, addressing issues for robust software solutions and improved quality",
    icon: React.createElement(FaReact),
    date: "Feb 2022 - Aug 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Smart Buy E-Commerce App",
    description:
      "Developed a full-stack e-commerce platform using the MERN stack, offering a robust and user-friendly online shopping experience",
    tags: ["MongoDB", "Express js", "React", "Node js"],
    imageUrl: smartbuy,
  },
  {
    title: "Image Based Authentication App",
    description:
      "Developed a secure image recognition authentication system, providing an alternative to traditional password-based methods.",
    tags: ["Python", "Flask", "Postgres SQL", "HTML", "CSS"],
    imageUrl: authentication,
  },
  {
    title: "Cancer Prediction Data Analysis",
    description:
      "Developed a cancer prediction model by analyzing patient data to identify key patterns and factors that could indicate the likelihood of cancer.",
    tags: ["PL/SQL", "Oracle", "Triggers", "Procedures"],
    imageUrl: cancerprediction,
  },
  {
    title: "Sapphire Bank Churn Prediction Model",
    description:
      "Built a predictive model using Python that identifies the customers which are at risk of churning at The Sapphire Bank.",
    tags: ["Python", "AI/ML", "Pandas", "Flask", "HTML", "CSS"],
    imageUrl: customerchurn,
  },
] as const;

export const skillsData = [
  {
    name: "Python",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
  },
  {
    name: "Java",
    imageUrl: "https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png",
  },
  {
    name: "C#",
    imageUrl: "https://www.jetbrains.com/guide/assets/csharp-logo-265a149e.svg",
  },
  {
    name: "Azure",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
  },
  {
    name: "MERN Stack",
    imageUrl: "https://gurzu.com/img/gurzu/mern-stack-01.webp",
  },
  {
    name: "HTML",
    imageUrl: "https://www.xchangetraining.co.uk/images/html-css.png",
  },
  {
    name: "CSS",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
  },
  {
    name: "JavaScript",
    imageUrl: "https://miro.medium.com/v2/resize:fit:344/1*tZHcs0d7MAG-BBcjBekZYA.png",
  },
  {
    name: "ASP.NET",
    imageUrl: "https://miro.medium.com/v2/resize:fit:900/1*9S6fPkXpk0280FaaHMj8Lg.png",
  },
  {
    name: "Git",
    imageUrl: "https://banner2.cleanpng.com/20180711/iqy/aawpwnuou.webp",
  },
  {
    name: "Jira",
    imageUrl: "https://w7.pngwing.com/pngs/992/738/png-transparent-jira-hd-logo-thumbnail.png",
  },
  {
    name: "Confluence",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVAtVmEqYpbD4Z4EF9bHgPNOMV0XAk7khzA&s",
  },
  {
    name: "SQL Server",
    imageUrl: "https://banner2.cleanpng.com/20180805/hrv/944cc360a38fc374080fd83c314abf8f.webp",
  },
  {
    name: "Oracle",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Oracle_SQL_Developer_logo.svg/800px-Oracle_SQL_Developer_logo.svg.png",
  },
  {
    name: "Postgres SQL",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/800px-Postgresql_elephant.svg.png",
  },
  {
    name: "My SQL",
    imageUrl: "https://banner2.cleanpng.com/20180411/wre/avf0mauoj.webp",
  }
] as const;
