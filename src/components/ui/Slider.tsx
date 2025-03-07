"use client";
import Image from "next/image";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "swiper/css/effect-fade";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Slider = () => {
  return (
    <div className="relative mt-2 lg:mt-6 mx-5 rounded-lg ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        speed={1000}
        slidesPerView={1}
        navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next",
        }}
        loop
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          currentClass: "bg-red-500",
          renderBullet: (index, className) =>
            `<span class="${className} custom-bullet"></span>`,
        }}
        effect={"fade"}
        observer={true}
        observeParents={true}
        parallax={true}
        className="w-full h-48 md:h-72 lg:h-[450px] rounded-2xl"
      >
        {/* SLIDER ITEM */}
        <SwiperSlide>
          <div className="swiper-slide absolute">
            <Image
              className="w-full h-full object-cover"
              src={require("../../assets/Images/slider/slide-1.png")}
              alt="Slide 1"
            />
            <div className="flex items-start flex-col absolute right-5 top-5 md:right-10 md:top-10 lg:top-20 lg:right-40 xl:right-48 text-white">
              <h2 className="font-MorabbaMedium text-xl lg:text-5xl mb-2 lg:mb-4">
                دانه قهوه اسپرسو جیورنو
              </h2>
              <p className="text-base lg:text-2xl font-MorabbaLight border-b border-gray-300 pb-2 lg:pb-4 mb-2 lg:mb-4">
                یک طعم باورنکردنی !
              </p>
              <p className="w-[60%] text-sm lg:text-base lg:leading-8 mb-2 lg:mb-4 line-clamp-2">
                قطعا نام آشنای جیورنو را شنیده اید، جیورنو یکی از گونه های قهوه
                است که در نواحی مختلف کمربند قهوه کشت میشود.
              </p>
              <a
                href="shop.html"
                className="flex items-center bg-green-500 hover:bg-green-600 transition-all rounded-lg px-1 lg:px-2 py-1 lg:py-1.5 text-sm lg:text-base"
              >
                <p className="hidden lg:flex ml-1">مشاهده</p>
                فروشگاه
                <svg className="w-4 h-4">
                  <use href="#chevron-left"></use>
                </svg>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide absolute">
            <Image
              className="w-full h-full object-cover"
              src={require("../../assets/Images/slider/slide-1.png")}
              alt="Slide 1"
            />
            <div className="flex items-start flex-col absolute right-5 top-5 md:right-10 md:top-10 lg:top-20 lg:right-40 xl:right-48 text-white">
              <h2 className="font-MorabbaMedium text-xl lg:text-5xl mb-2 lg:mb-4">
                دانه قهوه اسپرسو جیورنو
              </h2>
              <p className="text-base lg:text-2xl font-MorabbaLight border-b border-gray-300 pb-2 lg:pb-4 mb-2 lg:mb-4">
                یک طعم باورنکردنی !
              </p>
              <p className="w-[60%] text-sm lg:text-base lg:leading-8 mb-2 lg:mb-4 line-clamp-2">
                قطعا نام آشنای جیورنو را شنیده اید، جیورنو یکی از گونه های قهوه
                است که در نواحی مختلف کمربند قهوه کشت میشود.
              </p>
              <a
                href="shop.html"
                className="flex items-center bg-green-500 hover:bg-green-600 transition-all rounded-lg px-1 lg:px-2 py-1 lg:py-1.5 text-sm lg:text-base"
              >
                <p className="hidden lg:flex ml-1">مشاهده</p>
                فروشگاه
                <svg className="w-4 h-4">
                  <use href="#chevron-left"></use>
                </svg>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination-wrapper">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      {/* NEXT & PREV BTN */}
      <div className="container absolute flex items-center justify-end gap-x-5 left-4 lg:left-0 md:bottom-10 bottom-5 z-30">
        <button className="dark:bg-zinc-900 group bg-bgWhite p-2 rounded-full button-prev drop-shadow-xl shadow-2xl shadow-black ">
          <MdArrowForwardIos className="text-dark dark:text-white group-hover:text-[#10b981]" />
        </button>
        <button className="dark:bg-zinc-900 group bg-bgWhite p-2 rounded-full button-next drop-shadow-xl shadow-2xl shadow-black ">
          <MdArrowBackIosNew className="text-dark dark:text-white group-hover:text-[#10b981]" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
