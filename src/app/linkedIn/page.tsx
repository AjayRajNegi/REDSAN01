import Mission from "../components/Mission";
import Navbar from "../components/Navbar";

export default function LinkedIn() {
  return (
    <>
      <div className="bg-red-200 pt-1">
        <section className="h-dvh">
          <section className="flex flex-col md:flex-row w-full gap-1 md:gap-0 justify-center ">
            <div className="w-[98%] md:w-[40%] mx-auto">
              <div className=" max-h-[90px]  bg-black rounded-2xl overflow-hidden ">
                <Navbar />
              </div>
              <h2 className="text-black text-6xl font-semibold mt-10 -ml-1">
                LinkedIn <br /> Management
              </h2>
            </div>

            <div className="w-[98%] mx-auto md:w-[59%]">
              <div className="h-[40px] bg-black rounded-2xl flex items-center justify-around">
                <span>Work</span> <span>About</span>
                <span>Services</span>
              </div>
              <div className="mt-1 h-[200px] md:h-[500px] bg-red-500 rounded-2xl"></div>
            </div>
          </section>
          <div className="ml-1">
            <h4 className="text-2xl text-black font-semibold mt-16">
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
            ></div>
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] bg-black rounded-md mt-8 "
              style={{
                backgroundImage: `url('/social.jpg')`,
                backgroundSize: "cover",
                backgroundPositionX: "center",
              }}
            ></div>
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] bg-black rounded-md mt-8 "
              style={{
                backgroundImage: `url('/content.jpg')`,
                backgroundSize: "cover",
                backgroundPositionX: "center",
              }}
            ></div>
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] bg-black rounded-md mt-8 "
              style={{
                backgroundImage: `url('/seo.jpg')`,
                backgroundSize: "cover",
                backgroundPositionX: "center",
              }}
            ></div>
            <div
              className="w-[300px] md:w-[450px] h-[450px] md:h-[600px] bg-black rounded-md mt-8 "
              style={{
                backgroundImage: `url('/pr.jpg')`,
                backgroundSize: "cover",
                backgroundPositionX: "center",
              }}
            ></div>
          </div>
          <div className="text-black w-full glassBackground"></div>
        </article>
        {/* <article className="h-screen"></article> */}
      </div>
      {/* <article className="h-screen"></article> */}
    </>
  );
}
