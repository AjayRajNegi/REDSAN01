"use client";
import { motion } from "motion/react";
import MainText from "./components/MainText";
// import Paragraph from "./components/Paragraph";
import Navbar from "./components/Navbar";

// const paragraph =
//   "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
export default function Home() {
  return (
    <>
      <main className="relative h-[100dvh]">
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
      </main>
      <div className="h-[30vh] bg-black"></div>
      {/* <Paragraph paragraph={paragraph} /> */}
      <div className="h-[30vh] bg-black"></div>
      <div className="h-[30vh] bg-black"></div>
    </>
  );
}
