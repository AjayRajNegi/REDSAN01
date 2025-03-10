import Image from "next/image";
import Navbar from "../components/Navbar";

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
              <div className="h-[40px] bg-black rounded-2xl flex items-center justify-around">
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
              LinkdIn is the world's largest professional network, providing
              vast opportunities for career growth, industry networking, and
              business expansion.
            </p>
          </div>
        </article>
        {/* LinkedIn Benefit Cards */}
        <article className="h-[370vh] md:h-[500vh] bg-transparent relative justify-items-center">
          <div className="text-black justify-items-center">
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] rounded-md"
              style={{
                backgroundImage: `url('/web.jpg')`,
                backgroundSize: "cover",
                backgroundPositionX: "right",
              }}
            >
              <h3 className="p-4 pt-10 text-3xl text-white">Online Presence</h3>
              <p className="m-4 mt-0 text-xs md:text-base text-white glassBackground rounded-md">
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
                backgroundPositionX: "center",
                backgroundPositionY: "100px",
              }}
            >
              <h3 className="m-4 pt-10 text-3xl text-white  ">Job Search</h3>
              <p className="m-4 mt-0 text-xs md:text-base text-white glassBackground rounded-md">
                Enhance job search efficiency by leveraging LinkedIn's job
                listings, networking opportunities, and recruiter connections to
                explore new career prospects and growth opportunities.
              </p>
            </div>
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] bg-black rounded-md mt-8 "
              style={{
                backgroundImage: `url('/brand.jpg')`,
                backgroundSize: "cover",
                backgroundPositionX: "center",
              }}
            >
              <h3 className="p-4 pt-10 text-2xl text-white">Brand Marketing</h3>
              <p className="m-4 mt-0 text-xs md:text-base text-white glassBackground rounded-md">
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
                backgroundPositionX: "center",
                backgroundPositionY: "center",
              }}
            >
              <h3 className="p-4 pt-10 text-2xl text-white">Networking</h3>
              <p className="m-4 mt-0 text-xs md:text-base text-white glassBackground rounded-md">
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
                backgroundPositionX: "center",
              }}
            >
              <h3 className="p-4 pt-10 text-2xl text-white">
                Content Creation
              </h3>
              <p className="m-4 mt-0 text-xs md:text-base text-white glassBackground rounded-md">
                Learn content creation techniques, including article writing and
                post engagement, to boost visibility, establish thought
                leadership, and expand your professional reach.
              </p>
            </div>
          </div>
          <div className="text-black w-full glassBackground"></div>
        </article>

        <div className=" h-[20vh] w-full">
          <h1 className="text-black text-4xl md:text-5xl font-semibold">
            <span className="text-6xl md:text-7xl">M</span>ODULE <br />
            <span className="text-6xl md:text-7xl">S</span>
            TRUCTURE
          </h1>
        </div>
      </div>
      <article className="h-[100vh]">
        <section
          className="flex gap-4 overflow-x-scroll whitespace-nowrap scroll-snap-x mandatory pl-[8vw] module-section mt-[50px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="bg-gray-100 min-w-[80vw] md:min-w-[700px] h-[500px] md:h-[300px] scroll-snap-align rounded-2xl flex flex-col md:flex-row items-center justify-evenly ">
            <div className="w-[90%] md:w-[55%] h-[40%] md:h-[80%] rounded-2xl relative overflow-hidden">
              <Image
                src="/brand.jpg"
                fill={true}
                layout="fill"
                objectFit="cover"
                alt="brand"
              />
            </div>
            <div className="w-[90%] md:w-[35%] h-[50%] md:h-[95%] bg-red-600">
              <h3>Job Search</h3>
              <p>
                Optimizing your LinkedIn profile is essential to attract users.
                Utilize LinkedIn job alerts to stay updated on relevant job
                opportunities.
              </p>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="bg-gray-100 min-w-[80vw] md:min-w-[700px] h-[500px] md:h-[300px] scroll-snap-align start rounded-2xl flex flex-col md:flex-row items-center justify-around">
            <div className="w-[50%] h-[80%] rounded-2xl"></div>
            <div className="w-[40%] bg-red-600 ">Hello</div>
          </div>
        </section>
      </article>
    </>
  );
}
