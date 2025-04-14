import Image from "next/image";
import Pricing from "./Pricing";
import { Footer } from "../components/Footer";
const moduleData = [
  {
    id: 1,
    module_title: "Job Search",
    module_desc:
      "Optimize your profile, use job alerts, and network with recruiters to find job opportunities.",
    module_time: "3 Weeks",
    module_credits: "3 Credits",
    module_image: "/brand.jpg",
  },
  {
    id: 2,
    module_title: "Hiring Talent",
    module_desc:
      "Use LinkedIn Recruiter, assess candidate profiles, and leverage referrals to hire top talent.",
    module_time: "3 Weeks",
    module_credits: "3 Credits",
    module_image: "/content.jpg",
  },
  {
    id: 3,
    module_title: "Retaining Existing Employees",
    module_desc:
      "Build an employer brand, engage employees, and use LinkedIn Learning to improve retention.",
    module_time: "4 Weeks",
    module_credits: "4 Credits",
    module_image: "/job.jpg",
  },
  {
    id: 4,
    module_title: "Brand Marketing",
    module_desc:
      "Create a business page, develop content strategy, and use LinkedIn Ads for brand visibility.",
    module_time: "3 Weeks",
    module_credits: "3 Credits",
    module_image: "/networking.jpg",
  },
  {
    id: 5,
    module_title: "Personal Branding Strategies",
    module_desc:
      "Optimize your profile, share industry insights, and engage with thought leaders to build authority.",
    module_time: "3 Weeks",
    module_credits: "3 Credits",
    module_image: "/social.jpg",
  },
  {
    id: 6,
    module_title: "Lead Generation",
    module_desc:
      "Use search filters, send personalized outreach messages, and engage in LinkedIn groups for leads.",
    module_time: "4 Weeks",
    module_credits: "4 Credits",
    module_image: "/web.jpg",
  },
  {
    id: 7,
    module_title: "Profile Optimization for Visibility",
    module_desc:
      "Use a professional photo, craft a compelling ‘About’ section, and add featured content.",
    module_time: "2 Weeks",
    module_credits: "2 Credits",
    module_image: "/brand.jpg",
  },
  {
    id: 8,
    module_title: "Creating Textual & Visual Content",
    module_desc:
      "Write engaging posts, use images and videos, and follow trending topics for visibility.",
    module_time: "3 Weeks",
    module_credits: "3 Credits",
    module_image: "/content.jpg",
  },
  {
    id: 9,
    module_title: "Scheduling Content Effectively",
    module_desc:
      "Use scheduling tools, plan a content calendar, and identify the best posting times.",
    module_time: "2 Weeks",
    module_credits: "2 Credits",
    module_image: "/job.jpg",
  },
  {
    id: 10,
    module_title: "Engaging with Others",
    module_desc:
      "Comment meaningfully, connect with professionals, and use groups to expand your network.",
    module_time: "3 Weeks",
    module_credits: "3 Credits",
    module_image: "/networking.jpg",
  },
  {
    id: 11,
    module_title: "Drafting Cold Messages",
    module_desc:
      "Craft personalized cold messages, follow LinkedIn outreach best practices, and implement follow-ups.",
    module_time: "2 Weeks",
    module_credits: "2 Credits",
    module_image: "/web.jpg",
  },
  {
    id: 12,
    module_title: "Automating Chats & Outreach",
    module_desc:
      "Use LinkedIn automation tools, set up message sequences, and track analytics for optimization.",
    module_time: "3 Weeks",
    module_credits: "3 Credits",
    module_image: "/brand.jpg",
  },
  {
    id: 13,
    module_title: "Creating a Company Page",
    module_desc:
      "Optimize a LinkedIn business page, gain followers, and post updates to increase engagement.",
    module_time: "3 Weeks",
    module_credits: "3 Credits",
    module_image: "/content.jpg",
  },
  {
    id: 14,
    module_title: "Using LinkedIn Sales Navigator",
    module_desc:
      "Leverage Sales Navigator, apply advanced filters, and use InMail for direct client communication.",
    module_time: "4 Weeks",
    module_credits: "4 Credits",
    module_image: "/web.jpg",
  },
];

export default function Courses() {
  return (
    <div className="min-h-[100vh] bg-[#ecf1f0]">
      {/* Navbar Section Larger Screens */}
      <div className="h-[1vw] bg-[#ecf1f0] md:h-[80px]"></div>
      <nav className="asd fixed left-[3%] top-[20px] z-20 hidden h-[40px] w-[94%] items-center justify-between rounded-full bg-gray-950 px-8 md:flex">
        <div className="left text-2xl text-slate-50">REDSAN.STUDIOS</div>
        <div className="right flex gap-4 text-slate-50">
          <span>WORK</span>
          <span>ABOUT</span>
          <span>SERVICES</span>
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
          <span>Work</span> <span>About</span>
          <span>Services</span>
        </div>
      </div>
      {/* Hero Image */}
      <div className="relative mx-auto mb-[100px] h-[200px] w-[98%] overflow-hidden rounded-lg sm:h-[500px] md:h-[600px] md:w-[94%]">
        <Image src="/brand.jpg" fill objectFit="cover" alt="brand" />
      </div>

      {/* Features */}
      <div className="mx-auto mb-[100px] flex w-[90%] flex-col items-center justify-evenly gap-[20px] sm:flex-row sm:gap-0">
        <div className="relative h-[300px] w-[70%] overflow-hidden rounded-xl sm:h-[400px] sm:w-[30%] md:h-[500px]">
          <Image src="/brand.jpg" fill objectFit="cover" alt="brand" />
        </div>
        <div className="relative h-[300px] w-[70%] overflow-hidden rounded-xl sm:h-[400px] sm:w-[30%] md:h-[500px]">
          <Image src="/brand.jpg" fill objectFit="cover" alt="brand" />
        </div>
        <div className="relative h-[300px] w-[70%] overflow-hidden rounded-xl sm:h-[400px] sm:w-[30%] md:h-[500px]">
          <Image src="/brand.jpg" fill objectFit="cover" alt="brand" />
        </div>
      </div>

      {/* Module Structure */}
      <div className="flex h-[20vh] w-full items-center bg-gray-950">
        <h1 className="px-4 text-4xl font-semibold text-slate-200 md:text-5xl">
          <span className="text-6xl md:text-7xl">M</span>ODULE <br />
          <span className="text-6xl md:text-7xl">S</span>
          TRUCTURE
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
                  <span className="mt-2 flex gap-1 text-xs leading-5 text-gray-700">
                    <Image
                      src="/credits.png"
                      width={20}
                      height={20}
                      alt="week"
                    />
                    {item.module_credits}
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
      {/* Pricing */}
      <Pricing />
      {/* Footer */}
      <Footer />
    </div>
  );
}
