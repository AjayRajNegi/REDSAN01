import Image from "next/image";
import Navbar from "../components/Navbar";
import { BouncyCardsFeatures } from "../components/BouncyCardsFeatures";
import { Footer } from "../components/Footer";
import Link from "next/link";

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
        <section className="h-[100vh]" id="top">
          <section className="flex w-full flex-col justify-center gap-1 md:flex-row md:gap-0">
            <div className="mx-auto w-[98%] md:w-[40%]">
              <div className="max-h-[90px] overflow-hidden rounded-2xl bg-black">
                <Navbar />
              </div>
              <h2 className="-ml-1 mt-20 hidden text-5xl font-semibold text-black md:block md:text-6xl">
                LinkedIn <br /> Learning
              </h2>
              <h4 className="mt-10 hidden text-lg font-semibold text-black md:block md:text-lg">
                There was a great saying, that sitting idle would not get you
                chocolate from your MOM but working hard and making a great
                impression can win you a bike from your DAD.
              </h4>
            </div>

            <div className="mx-auto w-[98%] md:w-[59%]">
              <div className="flex h-[40px] items-center justify-around rounded-2xl bg-gray-950 text-slate-50">
                <Link href="/portfolio">OUR WORK</Link>
                <Link href="/internship">INTERNSHIP</Link>
                <Link href="/linkedIn">LINKEDIN</Link>
              </div>
              <div className="relative mt-1 h-[200px] overflow-hidden rounded-2xl md:h-[500px]">
                <Image
                  src="/linkdInMain.png"
                  objectFit="cover"
                  fill
                  alt="main"
                />
              </div>
              <h2 className="-ml-1 mt-16 text-5xl font-semibold text-black md:hidden md:text-6xl">
                LinkedIn <br /> Learning
              </h2>
            </div>
          </section>
          <div className="ml-1">
            <h4 className="mt-16 text-lg font-semibold text-black md:text-2xl">
              Witness how small changes can make your profile shine and bright !
              <br />
              Learning linkedin with AI integration can be your next smart
              choice after BITCOIN
            </h4>

            <hr style={{ border: "1px solid gray" }} className="mr-1 mt-5" />
          </div>
        </section>
        <article className="sticky top-[150px] h-[100vh] bg-transparent">
          <div className="mx-auto w-[65%] text-black md:w-[50%]">
            <h4 className="text-center text-xs">WHY LINKEDIN?</h4>
            <p className="mt-5 text-center text-xl font-semibold md:text-3xl">
              LinkdIn is the world&apos;s largest professional network,
              providing vast opportunities for career growth, industry
              networking, and business expansion.
            </p>
          </div>
        </article>
        {/* LinkedIn Benefit Cards */}
        <article className="relative flex h-[370vh] flex-col items-center md:h-[500vh]">
          <div className="flex flex-col justify-center text-black">
            <div
              className="h-[450px] w-[300px] rounded-md md:h-[600px] md:w-[450px]"
              style={{
                backgroundImage: `url('/web.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "right center",
              }}
            >
              <h3 className="p-4 pt-10 text-3xl text-slate-50">
                Online Presence
              </h3>
              <p className="glassBackground m-4 mt-0 rounded-md text-xs text-slate-50 md:text-base">
                Strengthen professional credibility by maintaining an updated
                LinkedIn profile, showcasing skills, experiences, and
                achievements to attract potential employers and collaborators.
              </p>
            </div>
            <div
              className="mt-8 h-[450px] w-[300px] rounded-md bg-black md:h-[600px] md:w-[450px]"
              style={{
                backgroundImage: `url('/job.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "right center",
                backgroundPositionY: "100px",
              }}
            >
              <h3 className="m-4 pt-10 text-3xl text-slate-50">Job Search</h3>
              <p className="glassBackground m-4 mt-0 rounded-md text-xs text-slate-50 md:text-base">
                Enhance job search efficiency by leveraging LinkedIn&apos;s job
                listings, networking opportunities, and recruiter connections to
                explore new career prospects and growth opportunities.
              </p>
            </div>
            <div
              className="mt-8 h-[450px] w-[300px] rounded-md bg-black md:h-[600px] md:w-[450px]"
              style={{
                backgroundImage: `url('/brand.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "right center",
              }}
            >
              <h3 className="p-4 pt-10 text-2xl text-slate-50">
                Brand Marketing
              </h3>
              <p className="glassBackground m-4 mt-0 rounded-md text-xs text-slate-50 md:text-base">
                Gain expertise in personal and corporate brand marketing by
                learning strategies to enhance visibility, credibility, and
                engagement within your industry.
              </p>
            </div>
            <div
              className="mt-8 h-[450px] w-[300px] rounded-md bg-black md:h-[600px] md:w-[450px]"
              style={{
                backgroundImage: `url('/networking.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "right center",
              }}
            >
              <h3 className="p-4 pt-10 text-2xl text-slate-50">Networking</h3>
              <p className="glassBackground m-4 mt-0 rounded-md text-xs text-slate-50 md:text-base">
                Engage with industry leaders, recruiters, and professionals by
                joining relevant groups, participating in discussions, and
                building meaningful connections for career advancement.
              </p>
            </div>
            <div
              className="mt-8 h-[450px] w-[300px] rounded-md bg-black md:h-[600px] md:w-[450px]"
              style={{
                backgroundImage: `url('/content.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "right center",
              }}
            >
              <h3 className="p-4 pt-10 text-2xl text-slate-50">
                Content Creation
              </h3>
              <p className="glassBackground m-4 mt-0 rounded-md text-xs text-slate-50 md:text-base">
                Learn content creation techniques, including article writing and
                post engagement, to boost visibility, establish thought
                leadership, and expand your professional reach.
              </p>
            </div>
          </div>
          <div className="glassBackground w-full text-black"></div>
        </article>
        {/* Module Structure */}
        <div className="flex h-[20vh] w-full items-center bg-gray-950">
          <h1 className="px-4 text-4xl font-semibold text-slate-200 md:text-5xl">
            <span className="text-6xl md:text-7xl">M</span>ODULE <br />
            <span className="text-6xl md:text-7xl">S</span>
            TRUCTURE
          </h1>
        </div>
      </div>
      {/* Module Structure Cards */}
      <article className="h-[80vh] bg-gray-950 md:h-[50vh]">
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
      </article>

      {/* <BouncyCardsFeatures /> */}
      <Footer />
    </>
  );
}
