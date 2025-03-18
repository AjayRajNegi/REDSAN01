import Image from "next/image";
import Navbar from "../components/Navbar";
import { BouncyCardsFeatures } from "../components/BouncyCardsFeatures";

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

export default function LinkedIn() {
  return (
    <>
      <div className="bg-gray-200 pt-1">
        <section className="h-[100vh]">
          <section className="flex flex-col md:flex-row w-full gap-1 md:gap-0 justify-center ">
            <div className="w-[98%] md:w-[40%] mx-auto">
              <div className=" max-h-[90px]  bg-black rounded-2xl overflow-hidden ">
                <Navbar />
              </div>
              <h2 className="text-black hidden md:block text-5xl md:text-6xl font-semibold mt-10 -ml-1 ">
                LinkedIn <br /> Learning
              </h2>
            </div>

            <div className="w-[98%] mx-auto md:w-[59%]">
              <div className="h-[40px] bg-gray-950 text-slate-50 rounded-2xl flex items-center justify-around">
                <span>Work</span> <span>About</span>
                <span>Services</span>
              </div>
              <div className="mt-1 relative h-[200px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/linkdInMain.png"
                  objectFit="cover"
                  fill
                  alt="main"
                />
              </div>
              <h2 className="text-black md:hidden text-5xl md:text-6xl font-semibold mt-16 -ml-1">
                LinkedIn <br /> Learning
              </h2>
            </div>
          </section>
          <div className="ml-1">
            <h4 className="text-lg md:text-2xl text-black font-semibold mt-16">
              HI, WE ARE A SOCIAL MEDIA & BRANDING AGENCY <br /> WE BARK AND
              BITE TOO, GENERATE RESULTS THAT MAKES HISTORY!
            </h4>

            <hr style={{ border: "1px solid gray" }} className="mr-1 mt-5" />
          </div>
        </section>
        <article className="sticky top-[150px] bg-transparent h-[100vh] ">
          <div className=" text-black  w-[65%] md:w-[50%] mx-auto">
            <h4 className="text-center text-xs">WHY LINKEDIN?</h4>
            <p className="text-center text-xl md:text-3xl font-semibold mt-5">
              LinkdIn is the world&apos;s largest professional network,
              providing vast opportunities for career growth, industry
              networking, and business expansion.
            </p>
          </div>
        </article>
        {/* LinkedIn Benefit Cards */}
        <article className="h-[370vh] md:h-[500vh] relative flex flex-col items-center">
          <div className="text-black flex flex-col justify-center">
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] rounded-md"
              style={{
                backgroundImage: `url('/web.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "right center",
              }}
            >
              <h3 className="p-4 pt-10 text-3xl text-slate-50">
                Online Presence
              </h3>
              <p className="m-4 mt-0 text-xs md:text-base text-slate-50 glassBackground rounded-md ">
                Strengthen professional credibility by maintaining an updated
                LinkedIn profile, showcasing skills, experiences, and
                achievements to attract potential employers and collaborators.
              </p>
            </div>
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] bg-black rounded-md mt-8 "
              style={{
                backgroundImage: `url('/job.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "right center",
                backgroundPositionY: "100px",
              }}
            >
              <h3 className="m-4 pt-10 text-3xl text-slate-50  ">Job Search</h3>
              <p className="m-4 mt-0 text-xs md:text-base text-slate-50 glassBackground rounded-md">
                Enhance job search efficiency by leveraging LinkedIn&apos;s job
                listings, networking opportunities, and recruiter connections to
                explore new career prospects and growth opportunities.
              </p>
            </div>
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] bg-black rounded-md mt-8 "
              style={{
                backgroundImage: `url('/brand.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "right center",
              }}
            >
              <h3 className="p-4 pt-10 text-2xl text-slate-50">
                Brand Marketing
              </h3>
              <p className="m-4 mt-0 text-xs md:text-base text-slate-50 glassBackground rounded-md">
                Gain expertise in personal and corporate brand marketing by
                learning strategies to enhance visibility, credibility, and
                engagement within your industry.
              </p>
            </div>
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] bg-black rounded-md mt-8 "
              style={{
                backgroundImage: `url('/networking.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "right center",
              }}
            >
              <h3 className="p-4 pt-10 text-2xl text-slate-50">Networking</h3>
              <p className="m-4 mt-0 text-xs md:text-base text-slate-50 glassBackground rounded-md">
                Engage with industry leaders, recruiters, and professionals by
                joining relevant groups, participating in discussions, and
                building meaningful connections for career advancement.
              </p>
            </div>
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] bg-black rounded-md mt-8 "
              style={{
                backgroundImage: `url('/content.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "right center",
              }}
            >
              <h3 className="p-4 pt-10 text-2xl text-slate-50">
                Content Creation
              </h3>
              <p className="m-4 mt-0 text-xs md:text-base text-slate-50 glassBackground rounded-md">
                Learn content creation techniques, including article writing and
                post engagement, to boost visibility, establish thought
                leadership, and expand your professional reach.
              </p>
            </div>
          </div>
          <div className="text-black w-full glassBackground"></div>
        </article>
        {/* Module Structure */}
        <div className="h-[20vh] w-full flex items-center bg-gray-950">
          <h1 className="text-slate-200 text-4xl md:text-5xl px-4  font-semibold ">
            <span className="text-6xl md:text-7xl">M</span>ODULE <br />
            <span className="text-6xl md:text-7xl">S</span>
            TRUCTURE
          </h1>
        </div>
      </div>

      <article className="h-[80vh] md:h-[50vh] bg-gray-950">
        <section
          className="flex gap-4 overflow-x-scroll whitespace-nowrap scroll-snap-x mandatory pl-[9vw] module-section mt-[50px] bg-gray-950"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Individual Module Cards */}
          {moduleData.map((item, index) => (
            <div
              className="bg-gray-100 min-w-[80vw] md:min-w-[700px] h-[500px] md:h-[300px] scroll-snap-align rounded-2xl flex flex-col md:flex-row items-center justify-evenly"
              key={index}
            >
              {/* Left */}
              <div className="w-[90%] md:w-[55%] h-[40%] md:h-[80%] rounded-2xl relative overflow-hidden">
                <Image
                  src={item.module_image}
                  fill={true}
                  layout="fill"
                  className="object-cover"
                  alt="brand"
                />
              </div>
              {/* Right */}
              <div className="w-[90%] md:w-[35%] min-h-[50%] md:min-h-[80%] flex flex-col ">
                <h3 className="text-black text-lg font-[500] whitespace-normal">
                  {item.module_title}
                </h3>
                <p className="overflow-hidden whitespace-normal text-gray-700 text-xs mt-2 leading-5">
                  {item.module_desc}
                </p>
                <div className="grid text-black grid-cols-2 mt-5">
                  <span className="flex text-gray-700 text-xs mt-2 leading-5 gap-1">
                    <Image src="/week.png" width={20} height={20} alt="week" />
                    {item.module_time}
                  </span>
                  <span className="flex text-gray-700 text-xs mt-2 leading-5 -ml-10 md:-ml-8 justify-center gap-1 whitespace-normal">
                    <div className="h-[20px] w-[20px] relative">
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
                  <span className="flex text-gray-700 text-xs mt-2 leading-5 gap-1">
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
                <div className="flex gap-1 items-center mt-5">
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

          <div className="bg-gray-100 min-w-[80vw] md:min-w-[700px] h-[500px] md:h-[300px] scroll-snap-align rounded-2xl flex flex-col md:flex-row items-center justify-evenly">
            {/* Left */}
            <div className="w-[90%] md:w-[55%] h-[40%] md:h-[80%] rounded-2xl relative overflow-hidden">
              <Image
                src="/content.jpg"
                fill={true}
                layout="fill"
                objectFit="cover"
                alt="brand"
              />
            </div>
            {/* Right */}
            <div className="w-[90%] md:w-[35%] min-h-[50%] md:min-h-[80%] flex flex-col ">
              <h3 className="text-black text-lg font-[500]">Job Search</h3>
              <p className="overflow-hidden whitespace-normal text-gray-700 text-xs mt-2 leading-5">
                {/* Optimizing your LinkedIn profile is essential to attract users. */}
                Utilize LinkedIn job alerts to stay updated on relevant job
                opportunities.
              </p>
              <div className="grid text-black grid-cols-2 mt-5">
                <span className="flex text-gray-700 text-xs mt-2 leading-5 gap-1">
                  <Image src="/week.png" width={20} height={20} alt="week" />3
                  Weeks
                </span>
                <span className="flex text-gray-700 text-xs mt-2 leading-5 -m-8 justify-center gap-1">
                  <div className="h-[20px] w-[20px] relative">
                    <Image
                      src="/live.png"
                      fill={true}
                      layout="fill"
                      objectFit="contain"
                      alt="week"
                    />
                  </div>
                  Live and Recorded
                </span>
                <span className="flex text-gray-700 text-xs mt-2 leading-5 gap-1">
                  <Image src="/credits.png" width={20} height={20} alt="week" />
                  3 Credits
                </span>
              </div>
              {/* Instructor */}
              <div className="flex gap-1 items-center mt-10 md:mt-5">
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
        </section>
      </article>

      <BouncyCardsFeatures />
    </>
  );
}
