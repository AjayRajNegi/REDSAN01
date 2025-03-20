import Image from "next/image";

export function Footer() {
  return (
    <div className="pt-[5vh] md:pt-[10vh] bg-gray-950">
      <div className="h-[60px] flex mx-2 gap-2">
        <div className="w-[45%] h-[90%] bg-slate-50 text-gray-950 rounded-2xl items-center sm:flex justify-between hidden">
          <span className="text-2xl ml-2">RedSan.Studios</span>
          <span className="text-xs hidden md:block mr-2">digitaL agencY</span>
        </div>
        <div className="w-[100%] sm:w-[55%] h-[90%] flex items-center justify-around bg-slate-50 text-gray-950 rounded-2xl">
          <span>Work</span> <span>About</span>
          <span>Services</span>
        </div>
      </div>
      <div className="h-[200px] md:h-[300px] px-[4vw] py-[2vw] flex flex-col justify-between border-gray-400 border-t-2">
        <h4 className="text-xl text-slate-50">Ready To Work Together?</h4>
        <h1 className="text-5xl md:text-7xl text-slate-50">
          Start a project❕
        </h1>
      </div>
      <div className="h-[500px] md:h-[350px]  border-gray-400 border-t-2 md:pt-[2vw] flex flex-col ">
        <div className="flex justify-between flex-col md:flex-row px-[4vw]">
          <div className="bg-slate-50 h-[100px] w-[100px] relative rounded-2xl mt-4 md:mt-0">
            <Image
              src="/RLogo.png"
              fill={true}
              layout="fill"
              alt="RedSan Logo"
            />
          </div>
          <div className="pt-4 md:pt-0">
            <p className="text-lg md:pb-2 text-slate-300">Contact</p>
            <p className="text-slate-50">⚪ +1 204-477-4474</p>
            <p className="text-slate-50">⚪ hello@random.com</p>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="text-lg md:pb-2 text-slate-300">Socials</p>
            <p className="text-slate-50">
              ⚪
              <a href="www.google.com" className="ml-2">
                Instagram
              </a>
            </p>
            <p className="text-slate-50">
              ⚪
              <a href="www.google.com" className="ml-2">
                LinkedIn
              </a>
            </p>
            <p className="text-slate-50">
              ⚪
              <a href="www.google.com" className="ml-2">
                Twitter
              </a>
            </p>

            <p></p>
          </div>
          <div className="text-lg flex gap-2 items-center justify-center text-slate-50">
            Top
            <div>
              <Image
                src="/topArrowIcon.png"
                height={40}
                width={40}
                alt="TopArrowIcon"
              />
            </div>
          </div>
        </div>
        <div
          className="mx-2 h-[10vh] mb-4 rounded-2xl mt-[5%] flex justify-center items-center text-slate-50"
          style={{
            backgroundImage: `url('/content.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-center">
            Copyright © 2025 RedSan - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
