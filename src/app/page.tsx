import { Metadata } from "next";
// import {
//   PlayCircle,
//   Activity,
//   Check,
//   Send,
//   BadgeCheck,
//   Globe,
// } from "lucide-react";
// import LampEffect from "./components/LampEffect";
// import NetworkVisualization from "./components/NetworkVisualization";
// import CampaignCards from "./components/CampaignCards";
// import Testimonials from "./components/Testimonials";
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
    // <div className="w-full text-[#fff]">
    //   {/* 3-D background */}
    //   <div className="fixed inset-0 -z-10">
    //     <iframe
    //       src="https://my.spline.design/iphone15procopy-pmwnMexXbAOzhjJgYVtuY6kv/"
    //       className="h-full w-full"
    //     ></iframe>
    //   </div>
    //   {/* Navbar */}
    //   <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
    //     <div className="flex items-center space-x-3">
    //       <svg
    //         className="h-8 w-8 text-indigo-400"
    //         viewBox="0 0 24 24"
    //         fill="currentColor"
    //       >
    //         <path d="M12 2a10 10 0 11-7.07 2.93A10 10 0 0112 2m0 2a8 8 0 108 8 8 8 0 00-8-8z"></path>
    //       </svg>
    //       <span className="text-xl font-semibold tracking-tight">RedSan</span>
    //     </div>
    //     <div className="hidden items-center space-x-10 text-sm text-gray-300 md:flex">
    //       <a href="#" className="transition hover:text-white">
    //         Features
    //       </a>
    //       <a href="#" className="transition hover:text-white">
    //         Services
    //       </a>
    //       <a href="#" className="transition hover:text-white">
    //         Insights
    //       </a>
    //       <a href="#" className="transition hover:text-white">
    //         Pricing
    //       </a>
    //     </div>
    //     <button className="rounded-md border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10">
    //       Sign in
    //     </button>
    //   </nav>

    //   {/* Hero */}
    //   <header className="mx-auto max-w-5xl bg-none px-6 pt-20 text-center md:pt-32">
    //     <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
    //       Elevate your{" "}
    //       <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    //         digital pulse
    //       </span>
    //     </h1>
    //     <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
    //       We craft immersive experiences that turn visitors into devoted fans—
    //       powered by data, creativity and code.
    //     </p>
    //     <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
    //       <button className="rounded-md bg-white px-8 py-3 font-medium text-black transition hover:bg-white/90">
    //         Get started
    //       </button>
    //       <a
    //         href="#"
    //         className="group flex items-center justify-center text-gray-300 transition hover:text-white"
    //       >
    //         Watch demo
    //         <PlayCircle className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
    //       </a>
    //     </div>

    //     <div className="mx-auto mt-24 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4">
    //       <div>
    //         <p className="text-4xl font-semibold tracking-tight">120%</p>
    //         <p className="text-sm text-gray-400">Avg. ROI increase</p>
    //       </div>
    //       <div>
    //         <p className="text-4xl font-semibold tracking-tight">87K</p>
    //         <p className="text-sm text-gray-400">Leads generated</p>
    //       </div>
    //       <div>
    //         <p className="text-4xl font-semibold tracking-tight">4.9/5</p>
    //         <p className="text-sm text-gray-400">Client rating</p>
    //       </div>
    //       <div>
    //         <p className="text-4xl font-semibold tracking-tight">24/7</p>
    //         <p className="text-sm text-gray-400">Dedicated support</p>
    //       </div>
    //     </div>
    //   </header>

    //   {/* Feature Cluster (Bento Grid) */}
    //   <section className="mx-auto mt-40 max-w-6xl px-6">
    //     <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
    //       What we do best
    //     </h2>
    //     <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
    //       From strategy to execution, our multidisciplinary team covers every
    //       touch-point your brand needs to grow.
    //     </p>

    //     <div className="mt-20 grid auto-rows-[minmax(180px,1fr)] gap-6 sm:grid-cols-12">
    //       {/* Large Card */}
    //       <article className="relative flex flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-md transition hover:ring-indigo-400/30 sm:col-span-6 sm:row-span-2">
    //         <div className="mb-6 flex items-center gap-4">
    //           <Activity className="h-8 w-8 text-indigo-300" />
    //           <h3 className="text-2xl font-semibold tracking-tight">
    //             Digital Marketing
    //           </h3>
    //         </div>
    //         <p className="mb-6 flex-1 leading-relaxed text-gray-400">
    //           Full-funnel growth programmes engineered to convert awareness into
    //           pipeline and revenue.
    //         </p>
    //         <ul className="space-y-3 text-sm text-gray-300">
    //           <li className="flex gap-2">
    //             <Check className="mt-0.5 h-4 w-4 text-indigo-400" />
    //             SEO &amp; SEM mastery
    //           </li>
    //           <li className="flex gap-2">
    //             <Check className="mt-0.5 h-4 w-4 text-indigo-400" />
    //             Data-driven CRO loops
    //           </li>
    //           <li className="flex gap-2">
    //             <Check className="mt-0.5 h-4 w-4 text-indigo-400" />
    //             Omnichannel automation
    //           </li>
    //         </ul>
    //       </article>

    //       {/* Medium Card */}

    //       <article className="relative flex flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-md transition hover:ring-indigo-400/30 sm:col-span-6 sm:row-span-1">
    //         <div className="mb-4 flex items-center gap-4">
    //           <Send className="h-8 w-8 text-indigo-300" />
    //           <h3 className="font text-xl tracking-tight">
    //             Social Media Marketing
    //           </h3>
    //         </div>
    //         <p className="flex-1 leading-relaxed text-gray-400">
    //           Build vibrant communities and spark conversations that turn
    //           followers into advocates.
    //         </p>
    //       </article>
    //       {/* Small Card */}
    //       <article className="relative flex flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-md transition hover:ring-indigo-400/30 sm:col-span-6 sm:row-span-1">
    //         <div className="mb-4 flex items-center gap-4">
    //           <BadgeCheck className="h-8 w-8 text-indigo-300" />
    //           <h3 className="text-lg font-semibold tracking-tight">
    //             LinkedIn Branding
    //           </h3>
    //         </div>
    //         <p className="flex-1 leading-relaxed text-gray-400">
    //           Position leaders as trusted voices and magnetise high-value deals.
    //         </p>
    //       </article>
    //       {/* Wide Card */}

    //       <article className="relative flex flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-md transition hover:ring-indigo-400/30 sm:col-span-12 sm:row-span-1">
    //         <div className="mb-4 flex items-center gap-4">
    //           <Globe className="h-8 w-8 text-indigo-300" />
    //           <h3 className="text-xl font-semibold tracking-tight">
    //             Website Design &amp; Development
    //           </h3>
    //         </div>
    //         <p className="flex-1 leading-relaxed text-gray-400">
    //           Performance-first sites that delight users, rank fast and unlock
    //           new revenue streams.
    //         </p>
    //       </article>
    //     </div>
    //   </section>

    //   {/* Network Visualization */}
    //   <NetworkVisualization />
    //   <CampaignCards />
    //   <Testimonials />
    // </div>
  );
}
