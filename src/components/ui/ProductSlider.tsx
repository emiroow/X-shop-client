"use client";
import Image from "next/image";
import { FC } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  title: string;
  name: string;
}

const ProductSlider: FC<Props> = ({ title, name }) => {
  return (
    <section className="container child:mt-14">
      {/* <!-- TITLE --> */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex flex-col gap-y-2">
          <h2 className="font-MorabbaMedium text-xl lg:text-3xl">{title} </h2>
        </div>
        <div className="flex items-center gap-x-2 child:p-2 child:bg-white child:dark:bg-zinc-700 child:shadow child:rounded-full">
          <button
            className={`dark:bg-zinc-900 group bg-bgWhite p-2 rounded-full button-prev-${name} drop-shadow-xl shadow-2xl shadow-black `}
          >
            <MdArrowForwardIos className="text-dark dark:text-white group-hover:text-[#10b981]" />
          </button>
          <button
            className={`dark:bg-zinc-900 group bg-bgWhite p-2 rounded-full button-next-${name} drop-shadow-xl shadow-2xl shadow-black `}
          >
            <MdArrowBackIosNew className="text-dark dark:text-white group-hover:text-[#10b981]" />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1260: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        speed={1000}
        slidesPerView={5}
        navigation={{
          prevEl: `.button-prev-${name}`,
          nextEl: `.button-next-${name}`,
        }}
        loop
        pagination={{
          clickable: true,
          el: ".swiper-pagination-productSlider",
          currentClass: "bg-red-500",
          renderBullet: (className) =>
            `<span class="${className} custom-bullet"></span>`,
        }}
        effect={"fade"}
        observer={true}
        observeParents={true}
        parallax={true}
        className="w-full"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide className="group bg-white dark:bg-zinc-700 rounded-xl">
          {/* <!-- OFF BADGE --> */}
          <span className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 text-xs bg-green-500  rounded-full text-white z-30">
            20%
          </span>
          <Image
            src={require("../../assets/Images/products/p1.png")}
            alt="product-1"
            className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
          />
          {/* <!-- PRODUCT MAIN --> */}
          <div className="px-2 lg:px-4 mb-3">
            <a
              href="product-details.html"
              className="line-clamp-2 font-DanaMedium mb-2 text-sm lg:text-base"
            >
              دانه قهوه اسپرسو یونیکا مقدار 250 گرم خط دوم طولانی
            </a>
            <div className="flex items-center gap-x-1 lg:gap-x-3">
              <p className="font-Dana text-red-400">فعلا موجود نیست</p>
            </div>
          </div>
          {/* <!-- PRODUCT FOOTER --> */}
          <div className="flex items-center justify-between px-2 lg:px-4 mb-3">
            <div className="flex items-center gap-x-2 child:transition-all child:duration-300">
              <span className="rounded-full p-2 dark:bg-zinc-800 dark:hover:bg-green-500 bg-gray-100 hover:bg-green-600 hover:text-white cursor-pointer">
                <IoCartOutline className="text-xl" />
              </span>
              <span className="hover:text-red-600 cursor-pointer">
                <IoMdHeartEmpty className="text-xl" />
              </span>
            </div>
            <div className="flex flex-row-reverse items-center gap-1">
              <FaRegStar className=" text-yellow-400" />
              <FaRegStar className="" />
              <FaRegStar className="" />
              <FaRegStar className="" />
              <FaRegStar className="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group bg-white dark:bg-zinc-700 rounded-xl">
          {/* <!-- OFF BADGE --> */}
          <span className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 text-xs bg-green-500  rounded-full text-white z-30">
            20%
          </span>
          <Image
            src={require("../../assets/Images/products/p2.png")}
            alt="product-1"
            className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
          />
          {/* <!-- PRODUCT MAIN --> */}
          <div className="px-2 lg:px-4 mb-3">
            <a
              href="product-details.html"
              className="line-clamp-2 font-DanaMedium mb-2 text-sm lg:text-base"
            >
              دانه قهوه اسپرسو یونیکا مقدار 250 گرم خط دوم طولانی
            </a>
            <div className="flex items-center gap-x-1 lg:gap-x-3">
              <p className="font-Dana text-red-400">فعلا موجود نیست</p>
            </div>
          </div>
          {/* <!-- PRODUCT FOOTER --> */}
          <div className="flex items-center justify-between px-2 lg:px-4 mb-3">
            <div className="flex items-center gap-x-2 child:transition-all child:duration-300">
              <span className="rounded-full p-2 dark:bg-zinc-800 dark:hover:bg-green-500 bg-gray-100 hover:bg-green-600 hover:text-white cursor-pointer">
                <IoCartOutline className="text-xl" />
              </span>
              <span className="hover:text-red-600 cursor-pointer">
                <IoMdHeartEmpty className="text-xl" />
              </span>
            </div>
            <div className="flex flex-row-reverse items-center gap-1">
              <FaRegStar className=" text-yellow-400" />
              <FaRegStar className="" />
              <FaRegStar className="" />
              <FaRegStar className="" />
              <FaRegStar className="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group bg-white dark:bg-zinc-700 rounded-xl">
          {/* <!-- OFF BADGE --> */}
          <span className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 text-xs bg-green-500  rounded-full text-white z-30">
            20%
          </span>
          <Image
            src={require("../../assets/Images/products/p4.png")}
            alt="product-1"
            className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
          />
          {/* <!-- PRODUCT MAIN --> */}
          <div className="px-2 lg:px-4 mb-3">
            <a
              href="product-details.html"
              className="line-clamp-2 font-DanaMedium mb-2 text-sm lg:text-base"
            >
              دانه قهوه اسپرسو یونیکا مقدار 250 گرم خط دوم طولانی
            </a>
            <div className="flex items-center gap-x-1 lg:gap-x-3">
              <p className="font-DanaDemiBold text-green-600 dark:text-green-500">
                200,000
                <span className="font-Dana text-sm">تومان</span>
              </p>
              <del className="font-Dana text-xs lg:text-sm text-rose-300 hidden lg:inline">
                230,000
                <span className="">تومان</span>
              </del>
            </div>
          </div>
          {/* <!-- PRODUCT FOOTER --> */}
          <div className="flex items-center justify-between px-2 lg:px-4 mb-3">
            <div className="flex items-center gap-x-2 child:transition-all child:duration-300">
              <span className="rounded-full p-2 dark:bg-zinc-800 dark:hover:bg-green-500 bg-gray-100 hover:bg-green-600 hover:text-white cursor-pointer">
                <IoCartOutline className="text-xl" />
              </span>
              <span className="hover:text-red-600 cursor-pointer">
                <IoMdHeartEmpty className="text-xl" />
              </span>
            </div>
            <div className="flex flex-row-reverse items-center gap-1">
              <FaRegStar className=" text-yellow-400" />
              <FaRegStar className="" />
              <FaRegStar className="" />
              <FaRegStar className="" />
              <FaRegStar className="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group bg-white dark:bg-zinc-700 rounded-xl">
          {/* <!-- OFF BADGE --> */}
          <span className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 text-xs bg-green-500  rounded-full text-white z-30">
            20%
          </span>
          <Image
            src={require("../../assets/Images/products/p5.png")}
            alt="product-1"
            className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
          />
          {/* <!-- PRODUCT MAIN --> */}
          <div className="px-2 lg:px-4 mb-3">
            <a
              href="product-details.html"
              className="line-clamp-2 font-DanaMedium mb-2 text-sm lg:text-base"
            >
              دانه قهوه اسپرسو یونیکا مقدار 250 گرم خط دوم طولانی
            </a>
            <div className="flex items-center gap-x-1 lg:gap-x-3">
              <p className="font-DanaDemiBold text-green-600 dark:text-green-500">
                340,000
                <span className="font-Dana text-sm">تومان</span>
              </p>
            </div>
          </div>
          {/* <!-- PRODUCT FOOTER --> */}
          <div className="flex items-center justify-between px-2 lg:px-4 mb-3">
            <div className="flex items-center gap-x-2 child:transition-all child:duration-300">
              <span className="rounded-full p-2 dark:bg-zinc-800 dark:hover:bg-green-500 bg-gray-100 hover:bg-green-600 hover:text-white cursor-pointer">
                <IoCartOutline className="text-xl" />
              </span>
              <span className="hover:text-red-600 cursor-pointer">
                <IoMdHeartEmpty className="text-xl" />
              </span>
            </div>
            <div className="flex flex-row-reverse items-center gap-1">
              <FaRegStar className=" text-yellow-400" />
              <FaRegStar className="" />
              <FaRegStar className="" />
              <FaRegStar className="" />
              <FaRegStar className="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group bg-white dark:bg-zinc-700 rounded-xl">
          {/* <!-- OFF BADGE --> */}
          <span className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 text-xs bg-green-500  rounded-full text-white z-30">
            20%
          </span>
          <Image
            src={require("../../assets/Images/products/p6.png")}
            alt="product-1"
            className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
          />
          {/* <!-- PRODUCT MAIN --> */}
          <div className="px-2 lg:px-4 mb-3">
            <a
              href="product-details.html"
              className="line-clamp-2 font-DanaMedium mb-2 text-sm lg:text-base"
            >
              دانه قهوه اسپرسو یونیکا مقدار 250 گرم خط دوم طولانی
            </a>
            <div className="flex items-center gap-x-1 lg:gap-x-3">
              <p className="font-Dana text-red-400">فعلا موجود نیست</p>
            </div>
          </div>
          {/* <!-- PRODUCT FOOTER --> */}
          <div className="flex items-center justify-between px-2 lg:px-4 mb-3">
            <div className="flex items-center gap-x-2 child:transition-all child:duration-300">
              <span className="rounded-full p-2 dark:bg-zinc-800 dark:hover:bg-green-500 bg-gray-100 hover:bg-green-600 hover:text-white cursor-pointer">
                <IoCartOutline className="text-xl" />
              </span>
              <span className="hover:text-red-600 cursor-pointer">
                <IoMdHeartEmpty className="text-xl" />
              </span>
            </div>
            <div className="flex flex-row-reverse items-center gap-1">
              <FaRegStar className=" text-yellow-400" />
              <FaRegStar className="" />
              <FaRegStar className="" />
              <FaRegStar className="" />
              <FaRegStar className="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group bg-white dark:bg-zinc-700 rounded-xl">
          {/* <!-- OFF BADGE --> */}
          <span className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 text-xs bg-green-500  rounded-full text-white z-30">
            20%
          </span>
          <Image
            src={require("../../assets/Images/products/p7.png")}
            alt="product-1"
            className="group-hover:scale-105 duration-300 w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-3"
          />
          {/* <!-- PRODUCT MAIN --> */}
          <div className="px-2 lg:px-4 mb-3">
            <a
              href="product-details.html"
              className="line-clamp-2 font-DanaMedium mb-2 text-sm lg:text-base"
            >
              دانه قهوه اسپرسو یونیکا مقدار 250 گرم خط دوم طولانی
            </a>
            <div className="flex items-center gap-x-1 lg:gap-x-3">
              <p className="font-DanaDemiBold text-green-600 dark:text-green-500">
                200,000
                <span className="font-Dana text-sm">تومان</span>
              </p>
              <del className="font-Dana text-xs lg:text-sm text-rose-300 hidden lg:inline">
                230,000
                <span className="">تومان</span>
              </del>
            </div>
          </div>
          {/* <!-- PRODUCT FOOTER --> */}
          <div className="flex items-center justify-between px-2 lg:px-4 mb-3">
            <div className="flex items-center gap-x-2 child:transition-all child:duration-300">
              <span className="rounded-full p-2 dark:bg-zinc-800 dark:hover:bg-green-500 bg-gray-100 hover:bg-green-600 hover:text-white cursor-pointer">
                <IoCartOutline className="text-xl" />
              </span>
              <span className="hover:text-red-600 cursor-pointer">
                <IoMdHeartEmpty className="text-xl" />
              </span>
            </div>
            <div className="flex flex-row-reverse items-center gap-1">
              <FaRegStar className=" text-yellow-400" />
              <FaRegStar className="" />
              <FaRegStar className="" />
              <FaRegStar className="" />
              <FaRegStar className="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductSlider;
