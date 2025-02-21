import "../globals.css";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ParagraphProps {
  paragraph: string;
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

interface CharProps {
  children: string;
  progress: any;
  range: [number, number];
}

export default function Paragraph({ paragraph }: ParagraphProps) {
  const container = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    <p
      ref={container}
      className="paragraph bg-black w-full text-2xl md:text-4xl lg:text-5xl leading-3"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="word mr-[6px] mt-[6px] lg:mr-[12px] lg:mt-[12px]">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;

        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};
const Char: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range as number[], [0, 1]);

  return (
    <span>
      <span className="shadow">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
