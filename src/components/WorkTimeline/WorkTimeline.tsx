"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./styles.module.scss";

interface WorkTimelineProps {
  children: React.ReactNode;
}

export default function WorkTimeline({ children }: WorkTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    offset: ["start", "end"],
  });

  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [1000, 0]);
  const strokeColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(242, 151, 164)", "rgb(162, 30, 100)"],
  );

  return (
    <div ref={containerRef} className={styles["timeline-container"]}>
      <svg
        className={styles["timeline-svg"]}
        viewBox="0 0 56 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 28 0 L 28 1000"
          strokeWidth="4rem"
          fill="none"
          strokeDasharray="1000"
          strokeLinecap={"butt"}
          style={{
            stroke: strokeColor,
            strokeDashoffset,
          }}
        />
      </svg>
      {children}
    </div>
  );
}
