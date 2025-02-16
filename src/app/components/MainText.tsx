"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TitleType {
  key: number;
  title: string;
}

const Titles: TitleType[] = [
  { key: 1, title: "Smile" },
  { key: 2, title: "Everyday" },
  { key: 3, title: "Forever" },
];

export default function MainText() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative flex h-[280px] md:h-[200px] lg-h-[180px]  w-full items-center justify-center overflow-hidden text-black ">
      {Titles.map((data, wordIndex) => (
        <div
          key={data.key}
          className="absolute flex justify-center items-center w-full"
        >
          {data.title.split("").map((char, charIndex) => (
            <motion.p
              ref={ref}
              key={charIndex}
              initial={{ y: 200 }}
              animate={isInView ? { y: [200, 0, 0, -200] } : {}}
              transition={{
                duration: 2,
                times: [0, 0.2, 0.8, 1],
                delay: 1 + wordIndex * 2 + charIndex * 0.05,
              }}
              className="text-black text-center font-bold tracking-[-0.05em] text-[5rem] md:text-[10rem] lg:text-[11rem]"
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.p>
          ))}
        </div>
      ))}
    </div>
  );
}
