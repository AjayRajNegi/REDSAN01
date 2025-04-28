"use client";
import Scroller from "./Scroller";
import WorkCards from "./WorkCards";
import DriveSection from "./DriveSection";
import FeaturedSection from "./FeaturedSection";
import ServicesSection from "./ServicesSection";
import { Footer } from "../components/Footer";
import Link from "next/link";
export default function page() {
  return (
    <div className="min-h-[100vh] bg-[#ecf1f0]">
      {/* Navbar Section Larger Screens*/}
      <div className="h-[1vw] bg-[#ecf1f0] md:h-[80px]" id="top"></div>
      <nav className="asd fixed left-[3%] top-[20px] z-20 hidden h-[40px] w-[94%] items-center justify-between rounded-full bg-gray-950 px-8 md:flex">
        <Link href="/" className="left text-2xl text-[#fdc0bc]">
          REDSAN.STUDIOS
        </Link>
        <div className="right flex gap-4 text-[#fdc0bc]">
          <Link href="/portfolio">OUR WORK</Link>
          <Link href="/internship">INTERNSHIP</Link>
          <Link href="/linkedIn">LINKEDIN</Link>
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
          <Link href="/portfolio">OUR WORK</Link>
          <Link href="/internship">INTERNSHIP</Link>
          <Link href="/linkedIn">LINKEDIN</Link>
        </div>
      </div>
      {/* Carousel */}
      <Scroller />
      {/* Our Work Section */}
      <main className="bg-[#ecf1f0] pt-10 md:pt-0">
        <section className="mb:mb-0 mb-10 flex h-[100px] w-full items-center justify-center bg-[#ecf1f0] py-10 md:h-[300px]">
          <h1 className="text-5xl text-red-300 md:text-8xl xl:text-[11vw]">
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
      {/* What Were Good At Section */}
      <main className="min-h-[500px] bg-gray-950 md:min-h-screen">
        <ServicesSection />
      </main>
      {/* Drive Section  */}
      <main className="mx-[8vw] h-auto bg-[#ecf1f0] py-[50px] md:mx-[12vw] md:py-[100px]">
        <DriveSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
