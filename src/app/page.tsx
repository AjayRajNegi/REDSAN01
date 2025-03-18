"use client";
import { motion } from "motion/react";
import MainText from "./components/MainText";
import Paragraph from "./components/Paragraph";
import Navbar from "./components/Navbar";

const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
export default function Home() {
  return (
    <>
      <main className="relative h-[100dvh] ">
        <motion.div
          initial={{ clipPath: "inset(0 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 8 }}
          className="bg-black w-full h-[50%] First"
        ></motion.div>
        <div className="fixed  bg-red-200 top-0 w-full h-[100dvh] -z-10 flex items-center justify-center">
          <MainText />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 8 }}
            className="absolute top-0 left-0 w-full"
          >
            <section className="flex flex-col md:flex-row w-full gap-1 md:gap-0 justify-center mt-1">
              <div className=" w-[98%] max-h-[90px] md:w-[40%] bg-black rounded-2xl overflow-hidden mx-auto">
                <Navbar />
              </div>
              <div className="w-[98%] mx-auto md:w-[59%]">
                <div className="h-[40px] bg-black rounded-2xl flex items-center justify-around">
                  <span>Work</span> <span>About</span>
                  <span>Services</span>
                </div>
                <div className="mt-1 h-[200px] md:h-[500px] bg-red-500 rounded-2xl"></div>
              </div>
            </section>
            <div className="grid w-[98%] mx-auto justify-between mt-5 sm:grid-cols-3 ">
              <p className="text-gray-950 col-span-full md:col-span-1 text-4xl md:text-base">
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
          className="bg-black w-full h-[50%]"
        ></motion.div>
      </main>
      <div className="bg-black h-[30vh]"></div>
      <Paragraph paragraph={paragraph} />
      <div className="bg-black h-[30vh]"></div>
      <div className="bg-black h-[30vh]"></div>
    </>
  );
}
