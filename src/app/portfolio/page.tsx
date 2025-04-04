import Navbar from "../components/Navbar";
import Scroller from "../components/Scroller";

export default function pages() {
  return (
    <div className="min-h-[100vh] bg-slate-50">
      {/* Navbar Section Larger Screens*/}
      <div className="h-[1vw] bg-slate-50 md:h-[1.5vw]"></div>
      <nav className="mx-[4vw] mb-[1.5vw] hidden h-[40px] items-center justify-between rounded-full bg-gray-950 px-8 md:flex">
        <div className="left text-2xl">REDSAN</div>
        <div className="right flex gap-4">
          <span>WORK</span>
          <span>ABOUT</span>
          <span>SERVICES</span>
        </div>
      </nav>
      {/* Navbar Section Smaller Screens */}
      <div className="mx-auto w-[98%] md:hidden">
        <div className="max-h-[90px] overflow-hidden rounded-2xl bg-black">
          <Navbar />
        </div>
      </div>
      <div className="mx-auto mb-[1vw] mt-[1vw] w-[98%] md:hidden">
        <div className="flex h-[40px] items-center justify-around rounded-2xl bg-gray-950 text-slate-50">
          <span>Work</span> <span>About</span>
          <span>Services</span>
        </div>
      </div>
      {/* Carousel */}
      <Scroller />
    </div>
  );
}
