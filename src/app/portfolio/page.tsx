"use client";
import FeaturedSection from "../components/FeaturedSection";
import Scroller from "../components/Scroller";
import WorkCards from "../components/WorkCards";
import { useScroll, useSpring } from "motion/react";
import { useRef } from "react";

export default function pages() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useSpring(scrollYProgress);
  return (
    <div className="min-h-[100vh] bg-[#ecf1f0]">
      {/* Navbar Section Larger Screens*/}
      <div className="h-[1vw] bg-[#ecf1f0] md:h-[80px]"></div>
      <nav className="fixed left-[3%] top-[20px] z-20 hidden h-[40px] w-[94%] items-center justify-between rounded-full bg-gray-950 px-8 md:flex">
        <div className="left text-2xl">REDSAN</div>
        <div className="right flex gap-4">
          <span>WORK</span>
          <span>ABOUT</span>
          <span>SERVICES</span>
        </div>
      </nav>
      {/* Navbar Section Smaller Screens */}
      <div className="mx-auto w-[98%] bg-[#ecf1f0] md:hidden">
        <div className="max-h-[90px] overflow-hidden rounded-2xl bg-black">
          <div className="flex h-[100px] items-center justify-between pl-2 text-slate-50">
            <div>
              <span className="text-2xl">RedSan.Studios</span>
              <p className="text-xl font-medium">赤さん</p>
            </div>

            <span className="hidden text-xs md:block">digitaL agencY</span>
            <div className="relative h-[90px] w-[140px] overflow-hidden object-fill">
              <img
                src="/nav.gif"
                alt=""
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-[1vw] mt-[1vw] w-[98%] md:hidden">
        <div className="flex h-[40px] items-center justify-around rounded-2xl bg-gray-950 text-[#ecf1f0]">
          <span>Work</span> <span>About</span>
          <span>Services</span>
        </div>
      </div>
      {/* Carousel */}
      <Scroller />
      {/* Our Work Section */}
      <main className="bg-[#ecf1f0] pt-10 md:pt-0">
        <section className="mb:mb-0 mb-10 flex h-[100px] w-full items-center justify-center bg-[#ecf1f0] py-10 md:h-[300px]">
          <h1 className="text-5xl text-[#ffffff] md:text-8xl xl:text-[11vw]">
            [OUR WORK]
          </h1>
        </section>
        <section>
          <WorkCards />
        </section>
      </main>
      {/* Featured Work Section */}
      <main className="bg-[#ecf1f0]">
        <h1 className="py-10 text-center text-3xl uppercase text-[#ffffff] md:py-16 md:text-7xl xl:text-8xl">
          [some featured work]
        </h1>
        <FeaturedSection />
      </main>
    </div>
  );
}
