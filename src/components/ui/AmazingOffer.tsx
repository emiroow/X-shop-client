"use client";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowBack, IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AmazingOffer = () => {
  return (
    <section className="container mt-16">
      <div className="flex flex-col overflow-hidden lg:flex-row items-center lg:gap-x-10 bg-white dark:bg-zinc-800 rounded-lg shadow p-5">
        {/* <!-- TIMER & TITLE --> */}
        <div className="lg:h-full flex flex-col justify-evenly gap-y-2 mb-3 lg:mb-0">
          {/* <!-- TITLE --> */}
          <div className="flex justify-between flex-col gap-y-3 font-MorabbaMedium">
            <p className="text-base lg:text-xl">پیشنهاد های</p>
            <h2 className="text-2xl lg:text-4xl text-green-500">شگفت انگیز</h2>

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
        {/* <!-- SLIDER --> */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          breakpoints={{
            350: {
              slidesPerView: 1,
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1260: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          speed={1000}
          slidesPerView={4}
          navigation={{
            prevEl: `.button-prev-amazingOffer`,
            nextEl: `.button-next-amazingOffer`,
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
          <SwiperSlide className="group bg-white dark:bg-zinc-600 rounded-xl">
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
                <FaRegStar className="text-lg text-yellow-400" />
                <FaRegStar className="text-lg" />
                <FaRegStar className="text-lg" />
                <FaRegStar className="text-lg" />
                <FaRegStar className="text-lg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="group bg-white dark:bg-zinc-600 rounded-xl">
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
            <div className="flex items-center justify-between px-2 lg:px-4 mb-3">
              <div className="flex items-center gap-x-2 child:transition-all child:duration-300">
                <span className="rounded-full p-2 dark:bg-zinc-800 dark:hover:bg-green-500 bg-gray-100 hover:bg-green-600 hover:text-white cursor-pointer">
                  <IoCartOutline className=" md:text-xl text-md" />
                </span>
                <span className="hover:text-red-600 cursor-pointer">
                  <IoMdHeartEmpty className=" md:text-xl text-md" />
                </span>
              </div>
              <div className="flex flex-row-reverse items-center gap-1 md:text-lg text-sm">
                <FaRegStar className=" text-yellow-400" />
                <FaRegStar className="" />
                <FaRegStar className="" />
                <FaRegStar className="" />
                <FaRegStar className="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="group bg-white dark:bg-zinc-600 rounded-xl">
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
                  <IoCartOutline className=" md:text-xl text-md" />
                </span>
                <span className="hover:text-red-600 cursor-pointer">
                  <IoMdHeartEmpty className=" md:text-xl text-md" />
                </span>
              </div>
              <div className="flex flex-row-reverse items-center gap-1 md:text-lg text-sm">
                <FaRegStar className=" text-yellow-400" />
                <FaRegStar className="" />
                <FaRegStar className="" />
                <FaRegStar className="" />
                <FaRegStar className="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="group bg-white dark:bg-zinc-600 rounded-xl">
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
                  <IoCartOutline className=" md:text-xl text-md" />
                </span>
                <span className="hover:text-red-600 cursor-pointer">
                  <IoMdHeartEmpty className=" md:text-xl text-md" />
                </span>
              </div>
              <div className="flex flex-row-reverse items-center gap-1 md:text-lg text-sm">
                <FaRegStar className=" text-yellow-400" />
                <FaRegStar className="" />
                <FaRegStar className="" />
                <FaRegStar className="" />
                <FaRegStar className="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="group bg-white dark:bg-zinc-600 rounded-xl">
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
                  <IoCartOutline className=" md:text-xl text-md" />
                </span>
                <span className="hover:text-red-600 cursor-pointer">
                  <IoMdHeartEmpty className=" md:text-xl text-md" />
                </span>
              </div>
              <div className="flex flex-row-reverse items-center gap-1 md:text-lg text-sm">
                <FaRegStar className=" text-yellow-400" />
                <FaRegStar className="" />
                <FaRegStar className="" />
                <FaRegStar className="" />
                <FaRegStar className="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="group bg-white dark:bg-zinc-600 rounded-xl">
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
                  <IoCartOutline className=" md:text-xl text-md" />
                </span>
                <span className="hover:text-red-600 cursor-pointer">
                  <IoMdHeartEmpty className=" md:text-xl text-md" />
                </span>
              </div>
              <div className="flex flex-row-reverse items-center gap-1 md:text-lg text-sm">
                <FaRegStar className=" text-yellow-400" />
                <FaRegStar className="" />
                <FaRegStar className="" />
                <FaRegStar className="" />
                <FaRegStar className="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default AmazingOffer;
