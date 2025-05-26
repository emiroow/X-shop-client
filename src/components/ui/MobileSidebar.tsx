"use client";
import { useTheme } from "@/store/themeStore";
import Link from "next/link";
import { Fragment } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";

const MobileSidebar = () => {
  const { setShoppingCart, theme, setSideMenu } = useTheme();
  return (
    <Fragment>
      <nav className="dark:bg-zinc-800 bg-white flex justify-between items-center md:hidden h-16 shadow-md py-5 px-4">
        <button onClick={() => setSideMenu(!theme.sideMenu)}>
          <HiMiniBars3BottomRight className="text-2xl" />
        </button>
        {/* <!-- SIDE BAR MENU --> */}
        <div
          className={`mobile-menu fixed ${
            theme.sideMenu ? "right-0" : "-right-64"
          } top-0 bottom-0 w-64 bg-white dark:bg-zinc-700 z-50 shadow transition-all duration-300 px-4`}
        >
          {/* <!-- HEAADER --> */}
          <div className="mt-3 flex items-center justify-between">
            <a
              href="index.html"
              className="flex items-center gap-x-1  font-MorabbaMedium text-xl"
            >
              <h1>ایکس فریـــــــــم</h1>
            </a>
            <svg className="mobile-menu__close-icon w-6 h-6 cursor-pointer">
              <use href="#close"></use>
            </svg>
          </div>
          {/* <!-- BORDER --> */}
          <span className="flex w-full border-t dark:border-white/10 border-gray-200 my-5"></span>
          {/* <!-- SEARCH BAR --> */}
          <input
            type="text"
            placeholder="جستجو..."
            className="dark:bg-zinc-600 dark:text-white bg-gray-200 text-zinc-900 rounded w-full pr-4 py-1.5 mb-3"
          />
          {/* <!-- MENU  --> */}
          <ul className="flex flex-col gap-y-6 text-zinc-700 dark:text-white">
            <li>
              <a href="index.html" className="flex items-center gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#home"></use>
                </svg>
                صفحه اصلی
              </a>
            </li>
            <li className="">
              <div className="open-submenu flex w-full items-center justify-between">
                <a
                  href="shop.html"
                  className="transition-all flex items-center gap-x-2"
                >
                  <svg className="w-5 h-5">
                    <use href="#shopping-bag"></use>
                  </svg>
                  فروشگاه
                </a>
                <svg className="w-3 h-3 arrow-submenu -rotate-90">
                  <use href="#chevron-left"></use>
                </svg>
              </div>
              <div className="submenu hidden flex-col gap-y-3 mt-3 child:text-sm mr-7">
                <a href="shop.html">اسپرسو</a>
                <a href="shop.html">قهوه ترک</a>
                <a href="shop.html">قهوه فرانسه</a>
                <a href="shop.html">کپسول اسپرسو</a>
                <a href="shop.html">لوازم و تجهیزات</a>
              </div>
            </li>
            <li>
              <a href="articles.html" className="flex items-center gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#document"></use>
                </svg>
                مقالات
              </a>
            </li>
            <li>
              <a href="contact-us.html" className="flex items-center gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#phone"></use>
                </svg>
                تماس با ما
              </a>
            </li>
            <li>
              <a href="aboute-us.html" className="flex items-center gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#check"></use>
                </svg>
                درباره ما
              </a>
            </li>
          </ul>
          {/* <!-- BORDER --> */}
          <span className="flex w-full border-t dark:border-white/10 border-gray-200 my-8"></span>
          {/* <!-- ACTION BTNS --> */}
          <div className="flex items-start flex-col gap-y-5 child:flex child:items-center child:gap-x-2 child:font-DanaMedium">
            <a href="dashboard.html">
              <svg className="w-5 h-5">
                <use href="#user"></use>
              </svg>
              حساب کاربری
            </a>
            <a href="login.html" className="">
              <svg className="w-5 h-5">
                <use href="#arrow-left-start-on-rectangle"></use>
              </svg>
              ورود | ثبت نام
            </a>
            <button className="toggle-theme">
              <span className="flex dark:hidden gap-x-1 items-center">
                <svg className="w-6 h-6">
                  <use href="#moon" />
                </svg>
                تم تیره
              </span>
              <span className="hidden dark:flex gap-x-1 items-center">
                <svg className="w-6 h-6">
                  <use href="#sun" />
                </svg>
                تم روشن
              </span>
            </button>
          </div>
        </div>
        <Link
          href=""
          className="flex items-center gap-x-1 font-MorabbaMedium text-xl"
        >
          <h1>ایکس فریـــــــــم</h1>
        </Link>
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
      </nav>
      {/* Overlay */}
      <div
        onClick={() => setSideMenu(!theme.sideMenu)}
        className={`overlay  ${
          theme.sideMenu ? "" : "hidden"
        } fixed w-full h-full top-0 left-0 right-0 bg-black/40 z-40 transition-all duration-300`}
      ></div>
    </Fragment>
  );
};

export default MobileSidebar;
