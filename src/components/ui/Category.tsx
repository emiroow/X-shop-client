"use client";
import Image from "next/image";
import Link from "next/link";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const Category = () => {
  return (
    <section className="child:mt-14 container">
      {/* <!-- TITLE --> */}
      <a href="shop.html" className="flex items-center justify-center">
        <span className="cursor-pointer transition-colors gap-x-4 flex items-center justify-center">
          <h2 className="text-xl lg:text-4xl font-MorabbaMedium">
            محبوب ترین دسته ها
          </h2>
          <IoArrowDownCircleOutline className="text-4xl" />
        </span>
      </a>
      {/* <!-- ITEMS --> */}
      <div className="flex items-center justify-evenly lg:justify-between flex-wrap mt-10 child:mb-8 gap-x-8 child:flex child:items-center child:flex-col child-hover:-translate-y-5 child:duration-300 child:cursor-pointer child:gap-y-2.5">
        <Link href="shop.html">
          <Image
            src={require("../../assets/Images/categories/category1.png")}
            className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] object-cover"
            alt="category1"
          />
          <p className="font-DanaMedium text-sm lg:text-lg line-clamp-1">
            قهوه دمی و اسپرسو
          </p>
        </Link>
        <Link href="shop.html">
          <Image
            src={require("../../assets/Images/categories/category2.png")}
            className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] object-cover"
            alt="category1"
          />
          <p className="font-DanaMedium text-sm lg:text-lg line-clamp-1">
            لوازم جانبی و تجهیزات
          </p>
        </Link>
        <Link href="shop.html">
          <Image
            src={require("../../assets/Images/categories/category3.png")}
            className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] object-cover"
            alt="category1"
          />
          <p className="font-DanaMedium text-sm lg:text-lg line-clamp-1">
            اسپرسو ساز
          </p>
        </Link>
        <Link href="shop.html">
          <Image
            src={require("../../assets/Images/categories/category4.png")}
            className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] object-cover"
            alt="category1"
          />
          <p className="font-DanaMedium text-sm lg:text-lg line-clamp-1">
            پک تستر قهوه
          </p>
        </Link>
        <Link href="shop.html">
          <Image
            src={require("../../assets/Images/categories/category5.png")}
            className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] object-cover"
            alt="category1"
          />
          <p className="font-DanaMedium text-sm lg:text-lg line-clamp-1">
            قهوه ترک
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Category;
