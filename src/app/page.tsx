"use client";

import Link from "next/link";
import { Footer } from "./components/Footer";

//import { motion } from "motion/react";
//import MainText from "./components/MainText";
// import Paragraph from "./components/Paragraph";
//import Navbar from "./components/Navbar";

// const paragraph =
//   "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
export default function Home() {
  return (
    <>
      {/* <main className="relative h-[100dvh]">
        <motion.div
          initial={{ clipPath: "inset(0 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 8 }}
          className="First h-[50%] w-full bg-black"
        ></motion.div>
        <div className="fixed top-0 -z-10 flex h-[100dvh] w-full items-center justify-center bg-red-200">
          <MainText />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 8 }}
            className="absolute left-0 top-0 w-full"
          >
            <section className="mt-1 flex w-full flex-col justify-center gap-1 md:flex-row md:gap-0">
              <div className="mx-auto max-h-[90px] w-[98%] overflow-hidden rounded-2xl bg-black md:w-[40%]">
                <Navbar />
              </div>
              <div className="mx-auto w-[98%] md:w-[59%]">
                <div className="flex h-[40px] items-center justify-around rounded-2xl bg-black">
                  <span>Work</span> <span>About</span>
                  <span>Services</span>
                </div>
                <div className="mt-1 h-[200px] rounded-2xl bg-red-500 md:h-[500px]"></div>
              </div>
            </section>
            <div className="mx-auto mt-5 grid w-[98%] justify-between sm:grid-cols-3">
              <p className="col-span-full text-4xl text-gray-950 md:col-span-1 md:text-base">
                Land of digital aesthetics
              </p>
              <p className="text-gray-950">
                Place where well-crafted web projects are born.
              </p>
              <p className="text-gray-950">
                We provide end-to-end development of services.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ clipPath: "inset(0 0 0 0)" }}
          animate={{ clipPath: "inset(100% 0 0 0)" }}
          transition={{ duration: 8 }}
          className="h-[50%] w-full bg-black"
        ></motion.div>
      </main> */}
      <main className="min-h-[100vh] bg-[#ecf1f0]">
        <div>
          <div className="h-[1vw] bg-[#ecf1f0] md:h-[80px]"></div>
          <nav className="asd fixed left-[3%] top-[20px] z-20 hidden h-[40px] w-[94%] items-center justify-between rounded-full bg-gray-950 px-8 md:flex">
            <div className="left text-2xl text-slate-50">REDSAN.STUDIOS</div>
            <div className="right flex gap-4 text-slate-50">
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
              <span>Work</span> <span>About</span>
              <span>Services</span>
            </div>
          </div>
        </div>

        <article
          className="mx-auto my-10 flex h-[70vw] w-[85vw] items-center justify-center rounded-xl text-center text-4xl text-[#fff] md:h-[70vh] md:w-[85vh] md:text-6xl"
          style={{
            backgroundImage: `url('/UC.gif')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          UNDER CONSTRUCTION
        </article>
        <Footer />
      </main>
    </>
  );
}
