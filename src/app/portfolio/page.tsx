import Scroller from "../components/Scroller";

export default function pages() {
  return (
    <div className="min-h-[100vh] bg-slate-50">
      {/* Navbar Section */}
      <div className="h-[1.5vw] bg-slate-50"></div>
      <nav className="mx-[4vw] mb-[1.5vw] flex h-[40px] items-center justify-between rounded-full bg-gray-950 px-8">
        <div className="left text-2xl">REDSAN</div>
        <div className="right flex gap-4">
          <span>WORK</span>
          <span>ABOUT</span>
          <span>SERVICES</span>
        </div>
      </nav>
      {/* Sliding Carousel */}
      {/* <section className="inline-flex w-full flex-nowrap">
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none">
          <li>
            <Image src="/brand.jpg" width={200} height={200} alt="Facebook" />
          </li>
          <li>
            <Image src="/brand.jpg" width={200} height={200} alt="Facebook" />
          </li>
        </ul>
        <ul
          className="flex animate-infinite-scroll items-center justify-center gap-0 md:justify-start [&_img]:max-w-none"
          aria-hidden="true"
        >
          <li>
            <Image src="/brand.jpg" width={200} height={200} alt="Facebook" />
          </li>
          <li>
            <Image src="/brand.jpg" width={200} height={200} alt="Facebook" />
          </li>
        </ul>
      </section> */}
      <Scroller />
    </div>
  );
}
