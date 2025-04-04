"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animate, AnimatePresence, motion, useMotionValue } from "motion/react";
import useMeasure from "react-use-measure";

export default function Scroller() {
  const images = [
    "/brand.jpg",
    "/content.jpg",
    "/social.jpg",
    "/networking.jpg",
    "/brand.jpg",
    "/content.jpg",
    "/social.jpg",
    "/networking.jpg",
  ];

  const FAST_DURATION = 5;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);

  const [ref, { width }] = useMeasure();
  const xTransition = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2;

    if (mustFinish) {
      controls = animate(xTransition, [xTransition.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTransition.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTransition, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTransition, width, duration, rerender]);
  return (
    <main className="relative min-w-[100%] overflow-hidden">
      <motion.div
        className="relative left-0 flex"
        ref={ref}
        style={{ x: xTransition }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images].map((item, idx) => (
          <Card image={item} key={idx} />
        ))}
      </motion.div>
    </main>
  );
}

interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      className="relative flex h-[250px] min-w-[350px] items-center justify-center overflow-clip bg-slate-400"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="pointer-events-none absolute h-full w-full bg-black opacity-50" />
            <motion.h1
              className="z-10 flex items-center gap-[0.5ch] rounded-full bg-slate-50 px-3 py-2 text-sm font-semibold text-gray-950"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span>Explore Now</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <Image src={image} fill style={{ objectFit: "cover" }} alt="image" />
    </motion.div>
  );
};
