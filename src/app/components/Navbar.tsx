export default function Navbar() {
  return (
    <div className="h-[100px] flex justify-between items-center  pl-2">
      <div>
        <span className="text-2xl">RedSan.Studios</span>
        <p className="text-xl font-medium">赤さん</p>
      </div>

      <span className="text-xs hidden md:block">digitaL agencY</span>
      <div className="w-[140px] h-[90px] overflow-hidden object-fill relative ">
        <img
          src="/nav.gif"
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
