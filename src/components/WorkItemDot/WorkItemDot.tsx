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
      <motion.div
        className={styles["work-item-dot__dot"]}
        style={{
          scale,
          opacity,
        }}
      />
      {children}
    </div>
  );
}
