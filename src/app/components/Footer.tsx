import Image from "next/image";

export function Footer() {
  return (
    <div className="h-[98vh] mt-[10vh] bg-gray-950">
      <div className="h-[10%] flex mx-2 gap-2">
        <div className="w-[45%] h-[90%] bg-slate-50 text-gray-950 rounded-2xl items-center sm:flex justify-between hidden">
          <span className="text-2xl ml-2">RedSan.Studios</span>
          <span className="text-xs hidden md:block mr-2">digitaL agencY</span>
        </div>
        <div className="w-[100%] sm:w-[55%] h-[90%] flex items-center justify-around bg-slate-50 text-gray-950 rounded-2xl">
          <span>Work</span> <span>About</span>
          <span>Services</span>
        </div>
      </div>
      <div className="h-[25%] md:h-[45%] px-[4vw] py-[2vw] flex flex-col justify-between border-white border-t-2">
        <h4 className="text-xl">Ready To Work Together?</h4>
        <h1 className="text-5xl md:text-7xl">Start a project❕</h1>
      </div>
      <div className="h-[65%] md:h-[45%]  border-white border-t-2 pt-[2vw] flex flex-col ">
        <div className="flex justify-between flex-col md:flex-row px-[4vw]">
          <div className="bg-slate-50 h-[100px] w-[100px] relative rounded-2xl">
            <Image
              src="/RLogo.png"
              fill={true}
              layout="fill"
              alt="RedSan Logo"
            />
          </div>
          <div>
            <p className="text-lg pb-2">Contact</p>
            <p>⚪ +1 204-477-4474</p>
            <p>⚪ hello@random.com</p>
          </div>
          <div>
            <p className="text-lg pb-2">Socials</p>
            <p>
              ⚪
              <a href="www.google.com" className="ml-2">
                Instagram
              </a>
            </p>
            <p>
              ⚪
              <a href="www.google.com" className="ml-2">
                LinkedIn
              </a>
            </p>
            <p>
              ⚪
              <a href="www.google.com" className="ml-2">
                Twitter
              </a>
            </p>

            <p></p>
          </div>
          <div className="text-lg">Top </div>
        </div>
        <div
          className="w-[99%] h-[10vh] mb-4 mx-auto rounded-2xl mt-[5%] flex justify-center items-center"
          style={{
            backgroundImage: `url('/web.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p>Copyright © 2025 RedSan - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
