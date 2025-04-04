import Image from "next/image";
import { motion } from "motion/react";

const companyData = [
  {
    id: 1,
    company_name: "MaxPower",
    desc: "In collaboration with MaxPowerSolutions, we shot the online campaign. Starring our cast and invertors.",
    work: "Description",
    company_img: "/brand.jpg",
  },
  {
    id: 2,
    company_name: "Somarasa",
    desc: "In collaboration with MaxPowerSolutions, we shot the online campaign. Starring our cast and invertors.",
    work: "Branding",
    company_img: "/content.jpg",
  },
  {
    id: 3,
    company_name: "RedCubicles",
    desc: "In collaboration with MaxPowerSolutions, we shot the online campaign. Starring our cast and invertors.",
    work: "Social Media Marketing",
    company_img: "/networking.jpg",
  },
];
export default function WorkCards() {
  return (
    <div className="mx-auto w-[95%]">
      {/* For Larger Displays */}
      {companyData.map((item, index) => (
        <motion.div
          className={`group mt-0 hidden h-[300px] items-center justify-between px-[40px] py-[40px] text-black hover:rounded-full hover:bg-gray-950 md:grid md:grid-cols-2 xl:grid-cols-3`}
          key={index}
        >
          <div className="relative h-[220px] w-full overflow-hidden rounded-md group-hover:rounded-full">
            <Image
              src={item.company_img}
              fill
              style={{ objectFit: "cover" }}
              alt="Main Image"
            />
          </div>

          <div className="ml-4 flex h-full w-full items-end justify-start text-5xl text-gray-950 group-hover:text-slate-50 md:hidden xl:flex">
            {item.company_name}
          </div>

          <div className="ml-auto flex h-full w-full flex-col justify-between">
            <h4 className="text-xl uppercase text-[#E75B38]">[{item.work}]</h4>
            <p className="text-gray-950 group-hover:text-slate-50">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}

      {/* For Smaller Displays */}
      <div className="mt-5 flex h-[350px] flex-col items-center text-black sm:h-[400px] md:hidden">
        <div className="relative h-[250px] w-full overflow-hidden rounded-full px-4">
          <Image
            src="/brand.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="cas"
          />
        </div>
        <h1 className="mt-4 text-4xl">MAXPOWER</h1>
        <h3 className="text-base uppercase text-[#E75B38]">[Description]</h3>
      </div>
      <div className="mt-5 flex h-[350px] flex-col items-center text-black sm:h-[400px] md:hidden">
        <div className="relative h-[250px] w-full overflow-hidden rounded-full px-4">
          <Image
            src="/brand.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="cas"
          />
        </div>
        <h1 className="mt-4 text-4xl">MAXPOWER</h1>
        <h3 className="text-xl uppercase text-[#E75B38]">[Description]</h3>
      </div>
      <div className="mt-5 flex h-[350px] flex-col items-center text-black sm:h-[400px] md:hidden">
        <div className="relative h-[250px] w-full overflow-hidden rounded-full px-4">
          <Image
            src="/brand.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="cas"
          />
        </div>
        <h1 className="mt-4 text-4xl">MAXPOWER</h1>
        <h3 className="text-xl uppercase text-[#E75B38]">[Description]</h3>
      </div>
    </div>
  );
}
