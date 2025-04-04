import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

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
  const [hover, setHover] = useState(false);
  return (
    <div className="mx-auto w-[95%]">
      {/* For Larger Displays */}
      {companyData.map((item, index) => (
        <motion.div
          className={`group mt-0 hidden h-[300px] items-center justify-between px-[40px] py-[40px] text-black hover:rounded-full hover:bg-gray-950 md:grid md:grid-cols-2 xl:grid-cols-3`}
          key={index}
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
        >
          <div className="relative h-[220px] w-full overflow-hidden rounded-md group-hover:rounded-full">
            <Image
              src={item.company_img}
              fill
              style={{ objectFit: "cover" }}
              alt="Main Image"
            />
          </div>

          <div className="ml-4 flex h-full w-full items-end justify-start text-5xl text-gray-950 group-hover:text-slate-50">
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
      <div className="block h-[250px] bg-green-300 text-black sm:h-[400px] md:hidden">
        Small
      </div>
    </div>
  );
}
