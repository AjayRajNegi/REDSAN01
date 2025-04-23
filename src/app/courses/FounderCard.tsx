"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./Founder";

export function FounderCard() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="h-full w-full bg-gray-950 py-0 pb-20 md:py-20">
      <h2 className="mx-auto max-w-7xl pl-4 text-3xl font-bold text-neutral-800 md:text-7xl dark:text-neutral-200">
        Get to know Startup Founders.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 md:p-14 dark:bg-neutral-800"
          >
            <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl dark:text-neutral-400">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of RedSan Intership club is that you boast about
                RedSan Intership club.
              </span>
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes.
            </p>
            {/* <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="mx-auto h-full w-full object-contain md:h-1/2 md:w-1/2"
            /> */}
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "RedSan",
    title: "You can do more with US.",
    src: "/photos/RedSan.jpg",
    content: <DummyContent />,
  },
  {
    category: "EDC India",
    title: "Enhance your productivity.",
    src: "/photos/EDC.jpg",
    content: <DummyContent />,
  },
  {
    category: "MARS",
    title: "Launching yourself with LinkedIn.",
    src: "/photos/MARS.jpg",
    content: <DummyContent />,
  },
  {
    category: "RedCubical Systems",
    title: "Map for your life.",
    src: "/photos/MARS.jpg",
    content: <DummyContent />,
  },

  // {
  //   category: "Product",
  //   title: "Maps for your iPhone 15 Pro Max.",
  //   src: "/social.jpg",
  //   content: <DummyContent />,
  // },
  // {
  //   category: "iOS",
  //   title: "Photography just got better.",
  //   src: "/social.jpg",
  //   content: <DummyContent />,
  // },
  // {
  //   category: "Hiring",
  //   title: "Hiring for a Staff Software Engineer",
  //   src: "/social.jpg",
  //   content: <DummyContent />,
  // },
];
