"use client";

import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion, MotionValue } from "motion/react";
import Image from "next/image";
import styles from "./ParallaxGallery.module.scss";
import Lenis from "@studio-freight/lenis";

interface ParallaxGalleryProps {
  images?: string[];
}

const imageNames = [
  "work-scroll1.png",
  "work-scroll2.png",
  "work-scroll3.png",
  "work-scroll4.png",
  "work-scroll5.png",
];

const staticRandomImages = [
  imageNames[0],
  imageNames[1],
  imageNames[2],
  imageNames[3],
  imageNames[4],
  imageNames[0],
  imageNames[1],
  imageNames[2],
  imageNames[3],
  imageNames[4],
  imageNames[0],
  imageNames[1],
];

export default function ParallaxGallery({
  images = staticRandomImages,
}: ParallaxGalleryProps) {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [multipliers, setMultipliers] = useState({
    y: 2,
    y2: 3.3,
    y3: 1.25,
    y4: 3,
  });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * multipliers.y]);
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * multipliers.y2],
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * multipliers.y3],
  );
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * multipliers.y4],
  );

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });

      if (window.innerWidth <= 480) {
        setMultipliers({ y: 1, y2: 1.5, y3: 1, y4: 1 });
      } else if (window.innerWidth <= 1024) {
        setMultipliers({ y: 1.5, y2: 2, y3: 1, y4: 1.8 });
      } else {
        setMultipliers({ y: 2, y2: 3.3, y3: 1.25, y4: 3 });
      }
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div ref={gallery} className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[0]]} y={y2} />
          <Column images={[images[1], images[2], images[3]]} y={y3} />
          <Column images={[images[4], images[0], images[1]]} y={y4} />
        </div>
      </div>
    </>
  );
}

interface ColumnProps {
  images: string[];
  y: MotionValue<number>;
}

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image
              src={`/images/${src}`}
              alt="parallax image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        );
      })}
    </motion.div>
  );
};
