import { FaRegEdit } from "react-icons/fa";
import { FiBell, FiHeart } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { LuMapPin } from "react-icons/lu";
import { RiShoppingBagLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { TiCogOutline } from "react-icons/ti";

const Sidebar = () => {
  return (
    <div className="sticky right-5 h-[96vh] my-5 ml-5 hidden lg:block lg:w-1/4 xl:w-1/5 rounded-lg p-4 shadow bg-white dark:bg-zinc-700">
      {/* <!-- NAME AND AVATAR  --> */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/20 py-3">
        <div className="flex items-center gap-x-3">
          <img
            src="./Images/svg/user.png"
            className="w-12 h-12 ring-2 ring-gray-400/20 rounded-full"
            alt="AVATAR"
          />
          <span className="felx flex-col gap-y-2">
            <p className="font-DanaMedium text-lg">پارسا وصالی</p>
            <p className="text-gray-400">09100000001</p>
          </span>
        </div>
        <span>
          <FaRegEdit className="text-2xl text-green-500" />
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
  );
};

export default Sidebar;
