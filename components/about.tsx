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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a passionate <span className="font-medium">software engineer</span>{" "}
        skilled in <span className="font-medium">Python, C#, and AI</span>.
        Currently, I develop impactful software for the{" "}
        <span className="font-medium">Ontario Government</span>, enhancing
        community services. My journey includes roles at{" "}
        <span className="font-medium">Thales</span>, where I improved
        development methodologies and led automation projects. Additionally, I
        tutor at <span className="font-medium">Centennial College</span>,
        fostering a collaborative spirit and continuous learning.
      </p>

      <p>
        My educational background in{" "}
        <span className="font-medium">computer science</span> and ongoing
        studies in <span className="font-medium">artificial intelligence</span>{" "}
        drive my commitment to leveraging technology for societal benefit.
        Through each role, I aim to make meaningful contributions, continuously
        adapt, and stay at the forefront of technological advancements.
      </p>
    </motion.section>
  );
}
