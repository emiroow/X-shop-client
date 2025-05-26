"use client";
import { useTheme } from "@/store/themeStore";
import { Fragment } from "react";
import { FiBell, FiHeart } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { LuMapPin } from "react-icons/lu";
import { RiShoppingBagLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { TiCogOutline } from "react-icons/ti";

const MobileSidebar = () => {
  const { setSideMenu, theme } = useTheme();

  return (
    <Fragment>
      <div
        className={`sidebar-mobile flex flex-col lg:hidden fixed ${
          theme.sideMenu ? "right-0" : "-right-64"
        } top-0 bottom-0 w-64 bg-white dark:bg-zinc-700 z-[50] shadow transition-all duration-300 px-4`}
      >
        {/* <!-- NAME AND AVATAR  --> */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/20 py-3">
          <div className="flex items-center gap-x-3">
            <img
              src="./Images/svg/user.png"
              className="w-10 h-10 ring-2 ring-gray-400/20 rounded-full"
              alt="AVATAR"
            />
            <span className="felx flex-col gap-y-2">
              <p className="font-DanaMedium">پارسا وصالی</p>
              <p className="text-gray-400 text-sm">09100000001</p>
            </span>
          </div>
          <span className="close-sidebar-btn">
            <svg className="w-5 h-6 cursor-pointer">
              <use href="#close"></use>
            </svg>
          </span>
        </div>
        {/* <!-- MENU --> */}
        <ul className="relative mt-4 space-y-2 child:duration-300 child:transition-all child:py-3  child:px-2 child:flex child:gap-x-2 text-lg child:cursor-pointer child:rounded-lg">
          <li className="bg-green-500/10 text-green-500">
            <HiOutlineSquares2X2 className="text-2xl" />
            <a href="dashboard.html">داشبورد</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <RiShoppingBagLine className="text-2xl" />
            <a href="dashboard-orders.html">سفارش ها</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <FiHeart className="text-2xl" />
            <a href="dashboard-favorite.html">علاقه‌مندی ها</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <LuMapPin className="text-2xl" />
            <a href="dashboard-address.html">آدرس ها</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <FiBell className="text-2xl" />
            <a href="dashboard-messages.html">پیام ها</a>
          </li>
          <li className="hover:bg-zinc-100 dark:hover:bg-zinc-600">
            <TiCogOutline className="text-2xl" />
            <a href="dashboard-account.html">اطلاعات حساب </a>
          </li>
          <li className="text-red-400 hover:bg-red-500/20">
            <TbLogout2 className="text-2xl" />
            <a href="index.html">خروج از حساب </a>
          </li>
        </ul>
      </div>
      {/* Overlay */}
      <div
        onClick={() => {
          setSideMenu(!theme.sideMenu);
          console.log("first");
        }}
        className={`overlay  ${
          theme.sideMenu ? "" : "hidden"
        } fixed w-full h-full top-0 left-0 right-0 bg-black/40 z-40 transition-all duration-300`}
      ></div>
    </Fragment>
  );
};

export default MobileSidebar;
