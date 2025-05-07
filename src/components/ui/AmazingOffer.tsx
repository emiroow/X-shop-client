"use client";
import { IoIosArrowBack } from "react-icons/io";
import Slider, { Settings } from "react-slick";
import ProductCard from "./ProductCard";

const AmazingOffer = () => {
  const settings: Settings = {
    autoplaySpeed: 4000,
    autoplay: true,
    infinite: true,
    draggable: true,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    className: "",
    arrows: false,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
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

  return (
    <section className="container mt-16">
      <div className="flex flex-col lg:flex-row items-center bg-white dark:bg-zinc-800 rounded-lg shadow p-5">
        <div className="w-full flex flex-col justify-between max-md:items-center mb-5 lg:mb-0">
          {/* <!-- TIMER & TITLE --> */}
          <div className="lg:h-full flex flex-col justify-evenly gap-y-2 mb-3 lg:mb-0">
            {/* <!-- TITLE --> */}
            <div className="flex justify-between flex-col gap-y-3 font-MorabbaMedium">
              <p className="text-base lg:text-xl">پیشنهاد های</p>
              <h2 className="text-2xl lg:text-4xl text-green-500">
                شگفت انگیز
              </h2>

              <a
                href="shop.html"
                className="hidden lg:flex items-center justify-center gap-x-1 w-32 rounded-lg px-2 py-1 text-white bg-green-500 dark:bg-green-600 hover:bg-green-600 transition-colors"
              >
                مشاهده همه
                <IoIosArrowBack className="text-xl" />
              </a>
            </div>
            {/* <!-- TIMER --> */}
            <div className="flex flex-col justify-center">
              <h2 className="font-DanaMedium text-lg mr-2 hidden lg:flex">
                فقط تا :
              </h2>
              <div className="mt-2 flex items-center gap-x-2 child:flex child:flex-col child:items-center child:justify-evenly child:shadow child:rounded-lg">
                <div className="w-16 h-[70px] px-2 bg-white dark:bg-zinc-500">
                  <h2 className="font-MorabbaMedium dark:text-white text-rose-400">
                    ثانیه
                  </h2>
                  <p className="font-DanaDemiBold seconds">10</p>
                </div>
                <div className="w-16 h-[70px] px-2 bg-white dark:bg-zinc-500">
                  <h2 className="font-MorabbaMedium dark:text-white text-rose-400">
                    دقیقه
                  </h2>
                  <p className="font-DanaDemiBold minutes">50</p>
                </div>
                <div className="w-16 h-[70px] px-2 bg-white dark:bg-zinc-500">
                  <h2 className="font-MorabbaMedium dark:text-white text-rose-400">
                    ساعت
                  </h2>
                  <p className="font-DanaDemiBold hours">01</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[80%] lg:w-[75%] ">
          <Slider {...settings}>
            <ProductCard className="mx-1" />
            <ProductCard className="mx-1" />
            <ProductCard className="mx-1" />
            <ProductCard className="mx-1" />
            <ProductCard className="mx-1" />
            <ProductCard className="mx-1" />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AmazingOffer;
