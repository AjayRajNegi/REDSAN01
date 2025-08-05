// const expandWidth = {
//   initial: { width: "15rem", opacity: 0.5 },
//   animate: {
//     width: "30rem",
//     opacity: 1,
//     transition: { duration: 0.8, delay: 0.3 },
//   },
// };

// const moveUp = {
//   initial: { opacity: 0.5, y: 100 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
// };

// const expandSmallWidth = {
//   initial: { width: "8rem" },
//   animate: { width: "16rem", transition: { duration: 0.8, delay: 0.3 } },
// };
export default function LampEffect() {
  return (
    <div className="relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
        {/* Left lamp gradient */}
        <div className="conic-left animate-width absolute inset-auto right-1/2 h-56 w-[15rem] text-white">
          <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-black [mask-image:linear-gradient(to_right,white,transparent)]" />
        </div>

        {/* Right lamp gradient */}
        <div className="conic-right animate-width absolute inset-auto left-1/2 h-56 w-[15rem] text-white">
          <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-black [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>

        {/* Shadows and glow */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-purple-600 opacity-50 blur-3xl" />

        {/* Center glow */}
        <div className="animate-small-width absolute inset-auto z-30 h-36 w-[8rem] -translate-y-[6rem] rounded-full bg-purple-500 blur-2xl" />

        {/* Lamp line */}
        <div className="animate-width absolute inset-auto z-50 h-0.5 w-[15rem] -translate-y-[7rem] bg-purple-400" />

        {/* Top cover */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black" />
      </div>

      {/* Content */}
      <div className="relative z-50 flex -translate-y-96 flex-col items-center px-5">
        <h1 className="animate-up mt-8 translate-y-[100px] bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent opacity-50 md:text-7xl">
          Illuminate <br /> your dreams
        </h1>
      </div>
    </div>
  );
}
