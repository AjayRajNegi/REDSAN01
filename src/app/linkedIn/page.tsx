import Image from "next/image";
import Navbar from "../components/Navbar";

export default function LinkedIn() {
  return (
    <>
      <div className="bg-gray-100 pt-1">
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
          <div className=" text-black w-[50%] mx-auto">
            <h4 className="text-center text-xs">OUR MISSION</h4>
            <p className="text-center text-xl md:text-3xl font-semibold mt-5">
              WE TAKE CARE OF EVERYTHING THAT MAKES YOUR BRAND THE FIRST CHOICE
              IN YOUR INDUSTRY
            </p>
          </div>
        </article>

        <article className="h-[400vh] md:h-[500vh] bg-transparent relative justify-items-center">
          <div className="text-black justify-items-center">
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] rounded-md"
              style={{
                backgroundImage: `url('/web.jpg')`,
                backgroundSize: "cover",
                backgroundPositionX: "-100px",
              }}
            >
              <h3 className="p-4 pt-10 text-2xl text-white">
                Website Building
              </h3>
              <p className="m-4 mt-0 text-xs md:text-base text-white glassBackground rounded-md">
                Structuring websites for better optimized user interface with
                SEO to boost visibility and conversions for sales driven and
                brand awareness looking clients.
              </p>
            </div>
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] bg-black rounded-md mt-8 "
              style={{
                backgroundImage: `url('/social.jpg')`,
                backgroundSize: "cover",
                backgroundPositionX: "center",
              }}
            >
              <h3 className="m-4 pt-10 text-2xl text-white  ">
                Social Media Handling
              </h3>
              <p className="m-4 mt-0 text-xs md:text-base text-white glassBackground rounded-md">
                Creating and managing social media accounts for content
                visibility to a wider and right audience boost brand repo among
                its target audience and socializing professionally.
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
                Taking photoshoots and video shoots with cool edits to get the
                viewers the content they are looking for and the clients who
                want themselves to be looked at the online platforms.
              </p>
            </div>
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] bg-black rounded-md mt-8 "
              style={{
                backgroundImage: `url('/seo.jpg')`,
                backgroundSize: "cover",
                backgroundPositionX: "center",
                backgroundPositionY: "center",
              }}
            >
              <h3 className="p-4 pt-10 text-2xl text-white">
                SEO and Google Rankings
              </h3>
              {/* <p className="m-4 mt-0 text-xs md:text-base text-white glassBackground rounded-md">
                We have lots of options if you want to get your websites built,
                we believe in making the best customized websites according to
                the need of the client. it ranges from 20k- 75k based on the
                level of work and features one would like to incur in their
                websites. You get along the SEO and content making services only
                @10k.
              </p> */}
            </div>
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] bg-black rounded-md mt-8 "
              style={{
                backgroundImage: `url('/pr.jpg')`,
                backgroundSize: "cover",
                backgroundPositionX: "center",
              }}
            >
              <h3 className="p-4 pt-10 text-2xl text-black">PR and Awards</h3>
              <p className="m-4 mt-0 text-xs md:text-base text-black glassBackground rounded-md">
                Greeting your company in relevant awards and CEO in relevant
                coverages across the country, eg- Business World, Entrepreneurs
                Today, Afaqs, Wikipedia etc platforms.
              </p>
            </div>
          </div>
          <div className="text-black w-full glassBackground"></div>
        </article>
      </div>
      <article className="h-[100vh]"></article>
    </>
  );
}
