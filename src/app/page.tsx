import { Metadata } from "next";
import Link from "next/link";
import { Footer } from "./components/Footer";
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

export default function Home() {
  return (
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
            <Link href="/portfolio">OUR WORK</Link>
            <Link href="/internship">INTERNSHIP</Link>
            <Link href="/linkedIn">LINKEDIN</Link>
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
  );
}
