"use client";
import { useTheme } from "@/store/themeStore";
import { IoIosArrowBack } from "react-icons/io";
import { MdClose } from "react-icons/md";

const TopAlert = () => {
  const { theme, setTopAlert } = useTheme();
  return (
    <>
      {theme.topAlert && (
        <div className="bg-zinc-900">
          <div className="container top-alert  py-2 text-white  flex items-center justify-between sm:justify-between overflow-hidden">
            <div className=""></div>
            <div className="flex items-center gap-x-2 md:gap-x-6 text-sm md:text-base sm:text-sm">
              <h1 className="font-DanaMedium">
                اولین خرید از کافئین همراه با 50% تخفیف
              </h1>
              <a
                href="shop.html"
                className="items-center gap-x-1 px-2 py-1 text-xs md:text-sm leading-none bg-green-500 hover:bg-green-600 rounded-full cursor-pointer transition-colors hidden sm:flex"
              >
                <p>فروشگاه</p>
                <IoIosArrowBack className="text-lg" />
              </a>
            </div>
            <button
              onClick={() => setTopAlert(false)}
              className="close-alert-btn  flex items-center justify-center hover:bg-white/20 transition-colors duration-300 w-7 h-7 rounded-lg"
            >
              <MdClose className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TopAlert;
