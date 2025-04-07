import Image from "next/image";

export default function DriveSection() {
  return (
    <>
      <p className="ml-[50px] text-sm uppercase text-[#E75B38] md:ml-[200px] md:text-xl">
        [What drives us]
      </p>
      <p className="mx-auto mt-[25px] text-justify indent-[50px] text-xl tracking-tight md:mt-[50px] md:indent-[200px] md:text-5xl">
        Videos are no longer just about generating impressions. We believe in
        creating meaningful connections with audiences. Whether it&apos;s a
        commercial or a YouTube Video at RedSan, we aim to inspire people to
        connect and experience fresh perspectives through videos that last.
      </p>
      <div className="relative mt-[50px] h-[200px] w-full overflow-hidden rounded-md sm:h-[400px] md:mt-[100px] md:h-[500px] xl:h-[600px]">
        <Image
          src="/brand.jpg"
          alt="asfsd"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
}
