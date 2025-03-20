export function Footer() {
  return (
    <div className="h-[90vh]">
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
      <div className="h-[65%] md:h-[45%] px-[4vw] border-white border-t-2">
        <div className="flex justify-between">
          <div>Logo</div>
          <div>
            <p>Contact</p>
            <p>+1 204-477-4474</p>
            <p>hello@random.com</p>
          </div>
          <div>
            <p>Socials</p>
            <p>
              <a href="www.google.com">Instagram</a>
            </p>
            <p>
              <a href="www.google.com">LinkedIn</a>
            </p>
            <p>
              <a href="www.google.com">Twitter</a>
            </p>

            <p></p>
          </div>
          <div>Top</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
