export default function Navbar() {
  return (
    <div className="h-[100px] flex justify-between items-center text-3xl pl-2">
      <span>Redsan.Digital</span>
      <div className="w-[150px] h-[100px] overflow-hidden object-contain relative ">
        <img src="/nav.gif" alt="" className="absolute -top-8" />
      </div>
    </div>
  );
}
