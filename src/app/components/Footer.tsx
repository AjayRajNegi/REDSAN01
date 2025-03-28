import Image from "next/image";

export function Footer() {
  return (
    <div className="bg-gray-950 pt-[5vh] md:pt-[10vh]">
      <div className="mx-2 flex h-[60px] gap-2">
        <div className="hidden h-[90%] w-[45%] items-center justify-between rounded-2xl bg-slate-50 text-gray-950 sm:flex">
          <span className="ml-2 text-2xl">RedSan.Studios</span>
          <span className="mr-2 hidden text-xs md:block">digitaL agencY</span>
        </div>
        <div className="flex h-[90%] w-[100%] items-center justify-around rounded-2xl bg-slate-50 text-gray-950 sm:w-[55%]">
          <span>Work</span> <span>About</span>
          <span>Services</span>
        </div>
      </div>
      <div className="flex h-[200px] flex-col justify-between border-t-2 border-gray-400 px-[4vw] py-[2vw] md:h-[300px]">
        <h4 className="text-xl text-slate-50">Ready To Work Together?</h4>
        <h1 className="text-5xl text-slate-50 md:text-7xl">
          Start a project❕
        </h1>
      </div>
      <div className="flex h-[500px] flex-col border-t-2 border-gray-400 md:h-[350px] md:pt-[2vw]">
        <div className="flex flex-col justify-between px-[4vw] md:flex-row">
          <div className="relative mt-4 h-[100px] w-[100px] rounded-2xl bg-slate-50 md:mt-0">
            <Image
              src="/RLogo.png"
              fill={true}
              layout="fill"
              alt="RedSan Logo"
            />
          </div>
          <div className="pt-4 md:pt-0">
            <p className="text-lg text-slate-300 md:pb-2">Contact</p>
            <p className="text-slate-50">⚪ +1 204-477-4474</p>
            <p className="text-slate-50">⚪ hello@random.com</p>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="text-lg text-slate-300 md:pb-2">Socials</p>
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
          <div className="flex items-center justify-center gap-2 text-lg text-slate-50">
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
          className="mx-2 mb-4 mt-[5%] flex h-[10vh] items-center justify-center rounded-2xl text-slate-50"
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
