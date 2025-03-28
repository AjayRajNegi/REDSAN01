import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import "../globals.css";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/series/scroll-animations-with-framer-motion/highlighting-text-on-scroll
 */

interface ContentLineProps {
  content: string;
}

const ContentLine: React.FC<ContentLineProps> = ({ content }) => {
  const contentRef = useRef<HTMLSpanElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["end center", "start start"],
  });

  const scrollValue = useTransform(scrollYProgress, [0, 0.15], ["100%", "0%"]);
  const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;

  return (
    <span className="relative block overflow-hidden" ref={contentRef}>
      <motion.span
        style={{ clipPath: clipPathVal }}
        className="highlighted-text"
        data-text={content}
      />
      <span className="static-text">{content}</span>
    </span>
  );
};

interface ScrollTextProps {
  content: string[];
}

export const ScrollText: React.FC<ScrollTextProps> = ({ content }) => {
  return (
    <div className="outer w-full grayscale-[80%]">
      <div className="inline leading-[1.3]">
        <p>
          {content.map((item) => (
            <ContentLine key={item} content={item} />
          ))}
        </p>
      </div>
    </div>
  );
};
