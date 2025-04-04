"use client";
import Navbar from "../components/Navbar";
import Scroller from "../components/Scroller";
import WorkCards from "../components/WorkCards";

export default function pages() {
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
      <div className="mx-auto w-[98%] md:hidden">
        <div className="max-h-[90px] overflow-hidden rounded-2xl bg-black">
          <Navbar />
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

      <main className="h-[200vh] bg-[#ecf1f0] pt-10 md:pt-0">
        <section className="mb:mb-0 mb-10 flex h-[100px] w-full items-center justify-center bg-[#ecf1f0] py-10 md:h-[300px]">
          <h1 className="text-5xl text-[#ffffff] md:text-8xl xl:text-[11vw]">
            [OUR WORK]
          </h1>
        </section>
        <section>
          <WorkCards />
        </section>
      </main>
    </div>
  );
}
