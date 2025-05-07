"use client";
import { CSSProperties, FC, Suspense } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Loading from "./Loading";

interface Props {
  title?: string;
  name?: string;
  className?: string;
}

import Slider, { Settings } from "react-slick";
import ProductCard from "./ProductCard";

const ProductSlider: FC<Props> = ({ title, name, className }) => {
  const settings: Settings = {
    autoplaySpeed: 4000,
    autoplay: true,
    infinite: true,
    draggable: true,
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    className: "customDots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // arrows: false,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props: {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
  }) {
    const { className, style, onClick } = props;
    return (
      <div className="flex items-center gap-x-2 child:p-2 child:bg-white child:dark:bg-zinc-700 child:shadow child:rounded-full absolute top-[-20%] left-0">
        <button
          onClick={onClick}
          className={`dark:bg-zinc-900 group bg-bgWhite p-2 rounded-full button-next-${name} drop-shadow-xl shadow-2xl shadow-black `}
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
      <div className="flex items-center gap-x-2 child:p-2 child:bg-white child:dark:bg-zinc-700 child:shadow child:rounded-full absolute top-[-20%] left-12">
        <button
          onClick={onClick}
          className={`dark:bg-zinc-900 group bg-bgWhite p-2 rounded-full button-prev-${name} drop-shadow-xl shadow-2xl shadow-black `}
        >
          <MdArrowForwardIos className="text-dark dark:text-white group-hover:text-[#10b981]" />
        </button>
      </div>
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <section className={`container mt-20 ${className}`}>
        {/* <!-- TITLE --> */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col gap-y-2">
            <h2 className="font-MorabbaMedium text-xl lg:text-3xl">{title} </h2>
          </div>
        </div>
        <Slider {...settings}>
          <ProductCard className="mx-3" />
          <ProductCard className="mx-3" />
          <ProductCard className="mx-3" />
          <ProductCard className="mx-3" />
          <ProductCard className="mx-3" />
          <ProductCard className="mx-3" />
          <ProductCard className="mx-3" />
        </Slider>
      </section>
    </Suspense>
  );
};

export default ProductSlider;
