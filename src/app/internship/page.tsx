import Link from "next/link";
import Image from "next/image";
import Pricing from "./Pricing";
import { FounderCard } from "./FounderCard";
import { Footer } from "../components/Footer";
import Carousal from "./Carousal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redsan | Digital Marketing, LinkedIn, Branding, Notion",
  description:
    "redan.in - Digital Marketing Internship 2025 to gain hands-on industry experience, boost your skills, and build a strong foundation for your career growth.",
  keywords: [
    "internship",
    "digital marketing",
    "linkedIn",
    "branding",
    "notion",
    "shark tank India",
    "startups",
  ],
  openGraph: {
    url: "https://redsan.in/internship",
    type: "website",
    title: "Redsan | Digital Marketing, LinkedIn, Branding, Notion",
    description:
      "redan.in - Digital Marketing Internship 2025 to gain hands-on industry experience, boost your skills, and build a strong foundation for your career growth.",
    images: [
      {
        url: "/Course/Card1.png",
        width: 1200,
        height: 630,
        alt: "redsan",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Elastic Stack, Next.js, Python, JavaScript Tutorials | dminhvu",
  //   description:
  //     "dminhvu.com - Programming blog for everyone to learn Elastic Stack, Next.js, Python, JavaScript, React, Machine Learning, Data Science, and more.",
  //   creator: "@dminhvu02",
  //   site: "@dminhvu02",
  //   images: [
  //     {
  //       url: "/Course/Card1.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "redsan",
  //     },
  //   ],
  // },
  alternates: {
    canonical: "https://redsan.in",
  },
};

const moduleData = [
  {
    id: 1,
    module_title: "Notion",
    module_desc:
      "Organize your tasks, manage projects efficiently, and build custom dashboards to boost productivity.",
    module_time: "5-8 days",
    module_credits: "3 Credits",
    module_image: "/photos/Notion.jpg",
  },
  {
    id: 2,
    module_title: "Digital Marketing",
    module_desc:
      "Master SEO, leverage social media, and create targeted campaigns to grow your online presence.",
    module_time: "9-12 days",
    module_credits: "3 Credits",
    module_image: "/photos/DM.jpg",
  },
  {
    id: 3,
    module_title: "LinkedIn",
    module_desc:
      "Optimize your profile, use job alerts, and network with recruiters to find job opportunities.",
    module_time: "6-9 days",
    module_credits: "4 Credits",
    module_image: "/photos/Linkedin.jpg",
  },
  {
    id: 4,
    module_title: "Branding",
    module_desc:
      "Develop a strong brand identity, craft compelling messaging, and build trust with your target audience to stand out.",
    module_time: "6-9 days",
    module_credits: "3 Credits",
    module_image: "/photos/a.jpg",
  },
];

export default function Internship() {
  return (
    <div className="min-h-[100vh] bg-[#ecf1f0]" id="top">
      {/* Navbar Section Larger Screens */}
      <div className="h-[1vw] bg-[#ecf1f0] md:h-[80px]"></div>
      <nav className="asd fixed left-[3%] top-[20px] z-20 hidden h-[40px] w-[94%] items-center justify-between rounded-full bg-gray-950 px-8 md:flex">
        <Link href="/" className="left text-2xl text-slate-50">
          REDSAN.STUDIOS
        </Link>
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
          <Link href="/portfolio">OUR WORK</Link>
          <Link href="/internship">INTERNSHIP</Link>
          <Link href="/linkedIn">LINKEDIN</Link>
        </div>
      </div>
      {/* Hero Image */}
      <Carousal />

      {/* Features */}
      <div className="scrollbar-hidden mx-auto mb-[50px] mt-[40px] w-[100%] overflow-x-auto md:mb-[100px]">
        <div className="mx-5 flex flex-nowrap items-center justify-between gap-5">
          <div className="relative h-[300px] w-[300px] shrink-0 overflow-hidden rounded-xl border-2 border-gray-900 transition-shadow duration-300 hover:shadow-2xl md:h-[400px] md:w-[400px]">
            <Image
              src="/Course/post4.png"
              fill
              objectFit="cover"
              alt="brand"
              quality={60}
            />
          </div>
          <div className="relative h-[300px] w-[300px] shrink-0 overflow-hidden rounded-xl border-2 border-gray-900 hover:shadow-2xl md:h-[400px] md:w-[400px] xl:block">
            <Image
              src="/Course/post1.png"
              fill
              objectFit="cover"
              alt="brand"
              quality={60}
            />
          </div>
          <div className="relative h-[300px] w-[300px] shrink-0 overflow-hidden rounded-xl border-2 border-gray-900 hover:shadow-2xl md:h-[400px] md:w-[400px]">
            <Image
              src="/Course/post5.png"
              fill
              objectFit="cover"
              alt="brand"
              quality={60}
            />
          </div>
          <div className="relative h-[300px] w-[300px] shrink-0 overflow-hidden rounded-xl border-2 border-gray-900 hover:shadow-2xl md:h-[400px] md:w-[400px]">
            <Image
              src="/Course/post2.png"
              fill
              objectFit="cover"
              alt="brand"
              quality={60}
            />
          </div>
          <div className="relative h-[300px] w-[300px] shrink-0 overflow-hidden rounded-xl border-2 border-gray-900 hover:shadow-2xl md:h-[400px] md:w-[400px]">
            <Image
              src="/Course/post3.png"
              fill
              objectFit="cover"
              alt="brand"
              quality={60}
            />
          </div>
        </div>
      </div>

      {/* Pricing */}
      <Pricing />
      {/* Module Structure */}
      <div className="flex h-[20vh] w-full items-center bg-gray-950">
        <h1 className="px-4 text-4xl font-semibold uppercase text-slate-200 md:text-5xl">
          <span className="text-6xl md:text-7xl">I</span>nternship &
          <br />
          <span className="text-6xl md:text-7xl">T</span>
          raining Module
        </h1>
      </div>

      {/* Module Structure Cards */}
      <div className="h-[80vh] bg-gray-950 md:h-[50vh]">
        <section
          className="scroll-snap-x mandatory module-section flex gap-4 overflow-x-scroll whitespace-nowrap bg-gray-950 pl-[9vw] pt-[50px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Individual Module Cards */}
          {moduleData.map((item, index) => (
            <div
              className="scroll-snap-align flex h-[500px] min-w-[80vw] flex-col items-center justify-evenly rounded-2xl bg-gray-100 md:h-[300px] md:min-w-[700px] md:flex-row"
              key={index}
            >
              {/* Left */}
              <div className="relative h-[40%] w-[90%] overflow-hidden rounded-2xl md:h-[80%] md:w-[55%]">
                <Image
                  src={item.module_image}
                  fill={true}
                  layout="fill"
                  className="object-cover"
                  alt="brand"
                />
              </div>
              {/* Right */}
              <div className="flex min-h-[50%] w-[90%] flex-col md:min-h-[80%] md:w-[35%]">
                <h3 className="whitespace-normal text-lg font-[500] text-black">
                  {item.module_title}
                </h3>
                <p className="mt-2 overflow-hidden whitespace-normal text-xs leading-5 text-gray-700">
                  {item.module_desc}
                </p>
                <div className="mt-5 grid grid-cols-2 text-black">
                  <span className="mt-2 flex gap-1 text-xs leading-5 text-gray-700">
                    <Image src="/week.png" width={20} height={20} alt="week" />

                    {item.module_time}
                  </span>
                  <span className="-ml-10 mt-2 flex justify-center gap-1 whitespace-normal text-xs leading-5 text-gray-700 md:-ml-8">
                    <div className="relative h-[20px] w-[20px]">
                      <Image
                        src="/live.png"
                        fill={true}
                        layout="fill"
                        className="object-cover"
                        alt="week"
                      />
                    </div>
                    Live and Recorded
                  </span>
                  <span className="mt-2 flex gap-1 rounded-lg border-2 border-[#e9986d] px-2 text-xs leading-5 text-gray-700">
                    <Image
                      src="/credits.png"
                      width={20}
                      height={20}
                      alt="week"
                    />
                    <Link href="/detail">View Details</Link>
                    {/* {item.module_credits} */}
                  </span>
                </div>
                {/* Instructor */}
                <div className="mt-5 flex items-center gap-1">
                  <Image
                    src="/instructor.jpg"
                    width={50}
                    height={50}
                    alt="instructor"
                    className="rounded-[50%] border-2 border-gray-100"
                  />

                  <div className="text-gray-800">
                    <p className="text-xs">Sankalp</p>
                    <p className="text-xs font-medium">Founder, RedSan</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      {/* Founder Cards */}
      <FounderCard />

      {/* Footer */}
      <Footer />
    </div>
  );
}
