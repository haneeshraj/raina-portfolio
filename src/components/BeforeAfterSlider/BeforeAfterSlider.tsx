'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  width?: number;
  height?: number;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  width = 600,
  height = 500,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Track container width for proper image scaling
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Auto-play: smooth slider animation with pause
  useEffect(() => {
    let startTime: number | null = null;
    let pauseStartTime: number | null = null;
    let animationId: number;
    let isPaused = false;

    const animate = (timestamp: number) => {
      if (isPaused) {
        if (pauseStartTime === null) pauseStartTime = timestamp;
        const pauseElapsed = timestamp - pauseStartTime;
        
        // After 3 second pause, reset
        if (pauseElapsed >= 3000) {
          isPaused = false;
          pauseStartTime = null;
          startTime = null;
          setPosition(0);
        }
        animationId = requestAnimationFrame(animate);
        return;
      }

      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const duration = 10000; // 10 seconds for full cycle
      const progress = (elapsed % duration) / duration * 100;
      
      // Start pause when reaching end
      if (progress >= 99.5) {
        isPaused = true;
        pauseStartTime = null;
        setPosition(100);
        animationId = requestAnimationFrame(animate);
        return;
      }
      
      setPosition(progress);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Handle mouse/touch events
  const handleMouseDown = () => {
    setIsDragging(true);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;

    if (newPosition >= 0 && newPosition <= 100) {
      setPosition(newPosition);
    }
  };

  const handleTouchStart = () => {
    setIsDragging(true);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const newPosition = ((touch.clientX - rect.left) / rect.width) * 100;

    if (newPosition >= 0 && newPosition <= 100) {
      setPosition(newPosition);
    }
  };

  return (
    <div
      ref={containerRef}
      className={styles['before-after-slider']}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        width: '100%',
        maxWidth: width,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      <div className={styles['slider-container']}>
        {/* Before Image (Base - static, fully visible initially) */}
        <div className={styles['before-image']}>
          <Image
            src={beforeImage}
            alt={beforeAlt}
            width={width}
            height={height}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div className={styles['label']}>{beforeLabel}</div>
        </div>

        {/* After Image (Overlay - reveals as slider moves) */}
        <div
          className={styles['after-image']}
          style={{
            width: `${position}%`,
          }}
        >
          <Image
            src={afterImage}
            alt={afterAlt}
            width={width}
            height={height}
            style={{ 
              width: containerWidth ? `${containerWidth}px` : '100%', 
              height: 'auto', 
              display: 'block',
              position: 'absolute',
              left: 0,
              top: 0,
            }}
          />
          <div className={styles['label']}>{afterLabel}</div>
        </div>

        {/* Divider Line */}
        <div
          className={styles['divider']}
          style={{
            left: `${position}%`,
          }}
        >
          <div className={styles['divider-handle']} />
        </div>
      </div>
    </div>
  );
}
