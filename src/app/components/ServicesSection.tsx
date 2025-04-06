"use client";
import { motion } from "motion/react";
import SvgComponent from "./SvgComponent";
import { useState } from "react";

const ServicesData = [
  { id: 1, service: "concepting", image: "/brand.jpg" },
  { id: 2, service: "production", image: "/content.jpg" },
  { id: 3, service: "editing", image: "/job.jpg" },
  { id: 4, service: "motion", image: "/social.jpg" },
  { id: 5, service: "distribution", image: "/networking.jpg" },
];
export default function ServicesSection() {
  const [hoverId, setHoverId] = useState(0);
  return (
    <>
      <section className="px-[30px] py-[30px] md:px-[100px] md:py-[100px]">
        <motion.p
          className="ml-[20%] w-[200px] text-xs uppercase text-[#fdc0bc] md:text-base"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          [our serices]
        </motion.p>
        <motion.div
          className="mt:pt-[100px] pt-[30px] text-[2.5rem] uppercase leading-[1] text-[#ecf1f0] md:text-[10vw]"
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          what we&apos;re
        </motion.div>
        <motion.div
          className="flex w-full items-center justify-end text-[2.5rem] uppercase leading-[1] text-[#ecf1f0] md:text-[10vw]"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <SvgComponent className="h-10 w-10 md:h-20 md:w-20" />

          <p>good at</p>
        </motion.div>
      </section>
      <section className="mx-[20px] h-[300px] md:mx-[100px] md:h-auto">
        {ServicesData.map((item, index) => (
          <motion.div
            className={`${hoverId === item.id ? "flex h-[40px] items-center rounded-full bg-cover bg-center text-[#ecf1f0] md:h-[100px]" : "flex h-[40px] items-center rounded-full bg-gray-950 text-[#ecf1f0] md:h-[100px]"} `}
            style={{
              backgroundImage: `url(${hoverId === item.id ? item.image : ""})`,
            }}
            onHoverStart={() => setHoverId(item.id)}
            onHoverEnd={() => setHoverId(0)}
            key={index}
          >
            <span
              className={`${hoverId === item.id ? "mx-[10%] text-base text-red-200 md:text-4xl" : "mx-[10%] text-base text-[#ecf1f0] md:text-4xl"}`}
            >
              0{item.id}
            </span>
            <span
              className={`${hoverId === item.id ? "text-base uppercase text-red-200 md:text-4xl" : "text-base uppercase text-[#ecf1f0] md:text-4xl"}`}
            >
              {item.service}
            </span>
          </motion.div>
        ))}

        <div className="mt-[40px] flex w-full justify-center text-sm text-slate-50 md:mt-0 md:pb-[100px] md:pt-[70px]">
          <p className="rounded-full bg-red-200 px-2 py-1 text-gray-950 hover:rounded-md">
            ABOUT US
          </p>
        </div>
      </section>
    </>
  );
}
