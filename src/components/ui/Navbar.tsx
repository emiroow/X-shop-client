"use client";
import { useTheme } from "@/store/themeStore";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { GrSearch } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { theme, setShoppingCart } = useTheme();

  return (
    <nav className="w-full hidden md:flex shadow py-5 bg-white dark:bg-zinc-700">
      <div className="container flex items-center justify-between">
        {/* <!-- LOGO --> */}
        <Link
          href="index.html"
          className="flex items-center gap-x-1  font-MorabbaMedium text-xl lg:text-3xl"
        >
          {/* <Image
            src="/Images/logo.png"
            alt="logo"
            className="w-6 h-6 "
            width={100}
            height={100}
          /> */}
          <h1>ایکس فریـــــــــم</h1>
        </Link>
        {/* <!-- MENU --> */}
        <ul className="mt-2 flex items-center gap-x-4 lg:gap-x-10 font-DanaMedium lg:mr-30 xl:mr-32 child:z-30">
          <li className="nav-item text-green-500">
            <a href="index.html">صفحه اصلی</a>
          </li>
          {/* <!-- ITEM HASE SUBMENU --> */}
          <li className="relative group">
            <div className="flex items-center flex-row gap-x-1">
              <a href="shop.html">فروشگاه</a>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180">
                <use href="#chevron-down"></use>
              </svg>
            </div>
            {/* <!-- SUBMENU --> */}
            <div className="absolute bg-white flex flex-col gap-y-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-10 transition-all delay-100 dark:bg-zinc-700 top-20 w-52 rounded border-t-2 border-green-500 p-5 text-base shadow-md child-hover:text-green-500 child:transition-all">
              <a href="shop.html">اسپرسو</a>
              <a href="shop.html">قهوه ترک</a>
              <a href="shop.html">قهوه فرانسه</a>
              <a href="shop.html">کپسول اسپرسو</a>
              <a href="shop.html">لوازم و تجهیزات</a>
            </div>
          </li>
          {/* <!-- ITEM HASE SUBMENU --> */}
          <li className="relative group">
            <div className="flex items-center flex-row gap-x-1">
              <a href="articles.html">مقالات</a>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180">
                <use href="#chevron-down"></use>
              </svg>
            </div>
            {/* <!-- SUBMENU --> */}
            <div className="absolute bg-white flex flex-col gap-y-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-10 transition-all delay-100 dark:bg-zinc-700 top-20 w-52 rounded border-t-2 border-green-500 p-5 text-base shadow-md child-hover:text-green-500 child:transition-all">
              <a href="articles.html">سلامتی</a>
              <a href="articles.html">اخبار قهوه</a>
              <a href="articles.html">روش‌های دم‌آوری قهوه</a>
              <a href="articles.html">لوازم و تجهیزات قهوه</a>
            </div>
          </li>
          <li className="nav-item">
            <a href="contact-us.html">تماس با ما</a>
          </li>
          <li className="nav-item">
            <a href="aboute-us.html">درباره ما</a>
          </li>
        </ul>
        {/* <!-- ACTION BTN --> */}
        <div className="flex items-center gap-x-3 child:z-30">
          {/* <!-- TOGGLE BTN --> */}
          <ThemeToggle />
          {/* <!-- SHOPPING CART BTN --> */}
          <button
            className="open-shopping-cart__btn relative"
            onClick={() => setShoppingCart(!theme.shoppingCart)}
          >
            <IoCartOutline className="text-2xl" />
            {/* <!-- BADGE --> */}
            <span className="absolute -top-2 -right-2 w-4 h-4 text-[10px] flex items-center justify-center bg-red-500 text-white rounded-full">
              2
            </span>
          </button>
          {/* <!-- SEARCH BTN --> */}
          <button className="group relative flex justify-end">
            <GrSearch className="text-2xl" />
            <div className="absolute top-20 flex items-center w-[350px] bg-white dark:bg-zinc-600 rounded-full opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-10 transition-all delay-100 child:rounded-full px-2 border dark:border-none border-gray-100 shadow py-1">
              <input
                type="text"
                placeholder="نام محصول..."
                className="bg-transparent w-full p-2"
              />
              <a
                href="#"
                className="bg-green-500  text-white text-sm py-2 px-3"
              >
                جستجو
              </a>
            </div>
          </button>
          {/* <!-- USER ACCOUNE BOX  --> */}
          <button className="group relative px-2 lg:px-3 py-2 flex items-center justify-end gap-x-1 text-white transition-colors bg-green-500 hover:bg-green-600 rounded-lg">
            <HiOutlineUser className="text-xl" />
            <span> حساب کاربری</span>
            {/* <!-- SUB MENU  --> */}
            <div className="absolute dark:border-none border border-gray-100 w-52 p-4 bg-white text-zinc-900 dark:text-white flex flex-col gap-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-12 transition-all delay-100 dark:bg-zinc-800 top-20 rounded text-base shadow child:transition-all child:py-1 child:px-2">
              <a
                href="dashboard-orders.html"
                className="flex items-center gap-x-3 w-full hover:bg-green-500/20 hover:text-green-500 rounded"
              >
                <svg className="h-5 w-5">
                  <use href="#user"></use>
                </svg>
                سفارشات من
              </a>
              <a
                href="dashboard-messages.html"
                className="flex items-center gap-x-3 w-full hover:bg-green-500/20 hover:text-green-500 rounded"
              >
                <svg className="h-5 w-5">
                  <use href="#envelope"></use>
                </svg>
                لیست پیام ها
              </a>
              <a
                href="dashboard-account.html"
                className="flex items-center gap-x-3 w-full hover:bg-green-500/20 hover:text-green-500 rounded"
              >
                <svg className="h-5 w-5">
                  <use href="#cog"></use>
                </svg>
                اطلاعات کاربری
              </a>
              {/* <!-- BORDER  --> */}
              <span className="border-t dark:border-gray-100/20 border-gray-100-gray-100"></span>
              <a
                href="#"
                className="flex items-center gap-x-3 w-full hover:bg-red-400/20 dark:hover:bg-rose-500/20 rounded hover:text-rose-400"
              >
                <svg className="h-5 w-5">
                  <use href="#arrow-left-start-on-rectangle"></use>
                </svg>
                خروج از حساب
              </a>
            </div>
          </button>
          {/* <!-- LOGIN BTN --> */}
          <a
            href="login.html"
            className="hidden relative px-2 lg:px-3 py-2 items-center justify-end gap-x-1 text-white transition-colors bg-green-500 hover:bg-green-600 rounded-lg"
          >
            <CiUser className="text-white" />
            ورود | ثبت نام
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
