export default function Navbar() {
  return (
    <div className="flex h-[100px] items-center justify-between pl-2 text-slate-50">
      <div>
        <span className="text-2xl">RedSan.Studios</span>
        <p className="text-xl font-medium">赤さん</p>
      </div>

      <span className="hidden text-xs md:block">digitaL agencY</span>
      <div className="relative h-[90px] w-[140px] overflow-hidden object-fill">
        <img
          src="/nav.gif"
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
