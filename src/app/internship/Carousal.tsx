"use client";

import { useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 0,
      image: "/Course/Card1.png",
      bgPosition: "bg-right",
    },
    {
      id: 1,
      image: "/Course/Card2.png",
      bgPosition: "bg-right",
    },
    {
      id: 2,
      image: "/Course/Card3.png",
      bgPosition: "bg-right",
    },
  ];

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="container relative mx-auto bg-[#ecf1f0]"
      style={{ maxWidth: "1600px" }}
    >
      <div className="relative w-full overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 h-[20vh] transition-opacity duration-500 ease-in-out sm:h-[40vh] xl:h-[80vh] ${
              index === activeIndex ? "relative opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`mx-auto block flex h-full w-full bg-contain bg-center bg-no-repeat pt-6 sm:bg-right md:items-center md:bg-cover md:pt-0`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              {/* Optional: Content inside slide */}
              <div className="container mx-auto"></div>
            </div>
          </div>
        ))}

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 z-10 ml-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer rounded-full text-center text-sm font-bold leading-tight text-[#fff] md:h-10 md:w-10 md:text-3xl"
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 z-10 ml-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer rounded-full text-center text-sm font-bold leading-tight text-[#fff] md:h-10 md:w-10 md:text-3xl"
        >
          ›
        </button>

        {/* Indicators */}
        <ol className="absolute bottom-8 flex w-full justify-center">
          {slides.map((slide) => (
            <li key={slide.id} className="mx-1 inline-block">
              <button
                onClick={() => setActiveIndex(slide.id)}
                className={`text-xl md:text-4xl ${
                  activeIndex === slide.id
                    ? "text-black"
                    : "text-gray-400 hover:text-gray-900"
                }`}
              >
                •
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Carousel;
