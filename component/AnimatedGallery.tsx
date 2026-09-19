"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const HOVER_DELAY_MS = 5000;

// ROW ONE — cool studio tones, alternating with warm accents
const ROW_ONE = [
  "/images/hero.jpg",
  "/images/21.jpg",
  "/images/3.jpg",
  "/images/40.jpg",
  "/images/5.jpg",
  "/images/42.jpg",
  "/images/7.jpg",
  "/images/54.jpg",
  "/images/9.jpg",
  "/images/78.jpg",
  "/images/11.jpg",
  "/images/102.jpg",
];

// ROW TWO — editorial, PNG portraits, babies
const ROW_TWO = [
  "/images/2.jpg",
  "/images/32.jpg",
  "/images/4.jpg",
  "/images/44.jpg",
  "/images/6.jpg",
  "/images/56.jpg",
  "/images/8.jpg",
  "/images/87.jpg",
  "/images/10.jpg",
  "/images/104.png",
  "/images/12.jpg",
  "/images/111.jpg",
  "/images/baby.jpg",
  "/images/baby3.jpg",
  "/images/130.png",
  "/images/140.png",
  "/images/150.png",
  "/images/190.jpg",
  "/images/273.jpg",
  "/images/340.png",
  "/images/361.png",
];

export default function AnimatedGallery() {
  const [hoveredSrc, setHoveredSrc] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTileEnter = useCallback((src: string) => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setHoveredSrc(src);
    }, HOVER_DELAY_MS);
  }, []);

  const handleTileLeave = useCallback(() => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setHoveredSrc(null);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, []);

  return (
    <section className="relative w-full bg-[var(--color-cream)] py-20">
      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-40 w-[400px] h-[400px] rounded-full bg-[var(--color-honey)]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full bg-[var(--color-blush)]/20 blur-[120px] pointer-events-none" />

      <PhotoProvider maskOpacity={0.95} bannerVisible={false}>
        <div
          className="relative flex flex-col gap-5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            handleTileLeave();
          }}
        >
          <MarqueeRow
            images={ROW_ONE}
            direction="left"
            paused={isPaused}
            onTileEnter={handleTileEnter}
            onTileLeave={handleTileLeave}
          />
          <MarqueeRow
            images={ROW_TWO}
            direction="right"
            paused={isPaused}
            onTileEnter={handleTileEnter}
            onTileLeave={handleTileLeave}
          />
        </div>
      </PhotoProvider>

      {/* Floating preview */}
      <AnimatePresence>
        {hoveredSrc && (
          <motion.div
            key={hoveredSrc}
            initial={{ opacity: 0, scale: 0.6, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 40 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              mass: 0.8,
            }}
            className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[var(--color-ink)]/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ rotate: -3 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 3 }}
              transition={{ duration: 0.5 }}
              className="relative w-[70vmin] h-[88vmin] max-w-[600px] max-h-[750px] rounded-[2rem] overflow-hidden shadow-[0_60px_120px_-20px_rgba(31,27,22,0.7)] border-[6px] border-white"
            >
              <Image
                src={hoveredSrc}
                alt="Preview"
                fill
                sizes="70vmin"
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function MarqueeRow({
  images,
  direction,
  paused,
  onTileEnter,
  onTileLeave,
}: {
  images: string[];
  direction: "left" | "right";
  paused: boolean;
  onTileEnter: (src: string) => void;
  onTileLeave: () => void;
}) {
  const doubled = [...images, ...images];
  const trackClass =
    direction === "left" ? "marquee-track-left" : "marquee-track-right";

  // Slow the animation proportional to the number of images so both rows
  // always finish a loop at roughly the same time
  const duration = 40 + images.length * 3;

  return (
    <div className="relative">
      <div
        className={`flex gap-4 w-max ${trackClass}`}
        style={{
          animationPlayState: paused ? "paused" : "running",
          animationDuration: `${duration}s`,
        }}
      >
        {doubled.map((src, i) => (
          <GalleryItem
            key={`${src}-${i}`}
            src={src}
            onMouseEnter={() => onTileEnter(src)}
            onMouseLeave={onTileLeave}
          />
        ))}
      </div>
    </div>
  );
}

function GalleryItem({
  src,
  onMouseEnter,
  onMouseLeave,
}: {
  src: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="relative flex-shrink-0 w-[180px] sm:w-[220px] lg:w-[240px] aspect-[3/4]"
    >
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="relative w-full h-full rounded-[1.25rem] overflow-hidden border border-white/60 bg-[var(--color-blush)]/30 shadow-md shadow-[var(--color-ink)]/10 cursor-zoom-in transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-ink)]/20"
      >
        <PhotoView src={src}>
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt="Session"
              fill
              sizes="240px"
              className="object-cover"
            />
          </div>
        </PhotoView>
      </div>
    </div>
  );
}