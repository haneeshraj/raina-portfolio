"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./styles.module.scss";

interface WorkItemDotProps {
  children: React.ReactNode;
  index: number;
  totalItems: number;
}

export default function WorkItemDot({
  children,
  index,
  totalItems,
}: WorkItemDotProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  let offsetVh = 50;
  if (index === 0) offsetVh = 20;
  if (index === totalItems - 1) offsetVh = 50;

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: [`start ${offsetVh}vh`, "start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.01], [0, 1]);

  return (
    <div ref={itemRef} className={styles["work-item-dot__container"]}>
      <motion.svg
        className={styles["work-item-dot__dot"]}
        width="50"
        height="50"
        viewBox="0 0 88 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          scale,
          opacity,
        }}
      >
        <path
          d="M88 32.8098L74.8703 10.1902C66.9948 14.7166 60.1201 19.6457 54.8182 24.3616C56.2717 17.4418 57.1297 9.05262 57.1297 0H30.8702C30.8702 9.04077 31.7281 17.4299 33.1817 24.3616C27.8798 19.6457 21.005 14.7166 13.1296 10.1902L0 32.8098C7.87544 37.3361 15.6078 40.7842 22.3633 43C15.6078 45.2039 7.87544 48.6633 0 53.1897L13.1296 75.8098C21.005 71.2834 27.8798 66.3543 33.1817 61.6384C31.7281 68.5582 30.8702 76.9474 30.8702 86H57.1297C57.1297 76.9592 56.2717 68.5701 54.8182 61.6384C60.1201 66.3543 66.9948 71.2834 74.8703 75.8098L88 53.1897C80.1246 48.6633 72.3921 45.2158 65.6366 43C72.3921 40.7961 80.1246 37.3361 88 32.8098Z"
          fill="#FBB934"
        />
      </motion.svg>
      {children}
    </div>
  );
}
