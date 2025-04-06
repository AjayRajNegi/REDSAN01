import Image from "next/image";
import { motion } from "motion/react";

const workData = [
  { id: 1, name: "Calm Studios", image: "/brand.jpg", year: "2024" },
  { id: 2, name: "Golds Gym", image: "/networking.jpg", year: "2024" },
  { id: 3, name: "Elloras ", image: "/job.jpg", year: "2024" },
];

export default function FeaturedSection() {
  return (
    <>
      {workData.map((item, index) => (
        <section
          className="relative grid grid-cols-[1.5fr_3fr] border-2 border-[#ffffff] md:grid-cols-[1fr_1.5fr_1fr]"
          key={index}
        >
          <div className="flex h-[350px] flex-col items-start justify-between pb-5 pl-[4vw] pt-5 text-gray-950 md:h-[500px] xl:h-[600px]">
            <div>
              <p>[ 0{item.id} ]</p>
              <p className="text-xl font-semibold md:text-3xl">{item.name}</p>
              <div className="mt-4 hidden w-[150px] justify-center rounded-full border-2 border-black bg-slate-50 py-3 text-sm md:flex">
                VIEW MORE
              </div>
            </div>

            <div className="block text-sm text-gray-950 md:hidden">
              <p>[Year]</p>
              <p>{item.year}</p>
            </div>
          </div>
          <motion.div
            className="relative text-gray-950"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={item.image}
              fill
              style={{ objectFit: "cover" }}
              alt="brand"
            />
          </motion.div>
          <div className="ml-auto hidden pr-[4vw] pt-5 text-gray-950 md:block">
            <p>[Year]</p>
            <p>{item.year}</p>
          </div>
        </section>
      ))}
    </>
  );
}
