"use client";
import Image from "next/image";
import { CSSProperties } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Slider, { Settings } from "react-slick";
import "swiper/css/effect-fade";
import "swiper/swiper-bundle.css";

const MainSlider = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    className: "customDots w-full rounded-2xl  p-0 m-0",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props: {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
  }) {
    const { className, style, onClick } = props;
    return (
      <div className="hidden md:flex items-center gap-x-2 child:p-2 child:bg-white child:dark:bg-zinc-700 child:shadow child:rounded-full absolute bottom-[10%] left-10">
        <button
          onClick={onClick}
          className={`dark:bg-zinc-900 group bg-bgWhite p-2 rounded-full drop-shadow-xl shadow-2xl shadow-black `}
        >
          <MdArrowBackIosNew className="text-dark dark:text-white group-hover:text-[#10b981]" />
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props: {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
  }) {
    const { className, style, onClick } = props;
    return (
      <div className=" hidden md:flex items-center gap-x-2 child:p-2 child:bg-white child:dark:bg-zinc-700 child:shadow child:rounded-full absolute bottom-[10%] left-24 z-50">
        <button
          onClick={onClick}
          className={`dark:bg-zinc-900 group bg-bgWhite p-2 rounded-full drop-shadow-xl shadow-2xl shadow-black `}
        >
          <MdArrowForwardIos className="text-dark dark:text-white group-hover:text-[#10b981]" />
        </button>
      </div>
    );
  }

  const images = [
    "/Images/slider/1.jpg",
    "/Images/slider/2.webp",
    "/Images/slider/3.webp",
  ];

  const customStyle = `

  `;

  return (
    <div className="h-48 md:h-60 lg:h-[400px] m-5 rounded-2xl overflow-hidden border-none outline-none">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-48 md:h-60 lg:h-[400px] rounded-2xl"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              style={{
                objectFit: "cover",
                borderRadius: "1rem",
              }}
              quality={100}
              className="rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlider;
