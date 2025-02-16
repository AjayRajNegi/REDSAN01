"use client";
import { motion } from "motion/react";
import MainText from "./components/MainText";

export default function Home() {
  return (
    <>
      <main className="relative">
        <motion.div
          initial={{ clipPath: "inset(0 0 0 0)" }}
          whileInView={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 8 }}
          className="bg-black w-full h-[50%] First"
        ></motion.div>
        <div className="fixed  bg-[#EEEEEE] top-0 w-full h-[100vh] -z-10 flex items-center justify-center">
          <MainText />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 8 }}
            className="text-[12rem] text-red-600 font-bold absolute tracking-tighter"
          >
            REDSAN
          </motion.div>
        </div>
        <motion.div
          initial={{ clipPath: "inset(0 0 0 0)" }}
          whileInView={{ clipPath: "inset(100% 0 0 0)" }}
          transition={{ duration: 8 }}
          className="bg-black w-full h-[50%]"
        ></motion.div>
      </main>
    </>
  );
}
