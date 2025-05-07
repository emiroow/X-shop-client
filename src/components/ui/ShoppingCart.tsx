"use client";
import { useTheme } from "@/store/themeStore";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const ShoppingCart = () => {
  const { theme, setShoppingCart } = useTheme();
  return (
    <>
      <div
        className={`shopping-cart fixed  ${
          theme.shoppingCart ? "left-0" : "-left-72"
        } top-0 bottom-0 w-72 bg-white dark:bg-zinc-700 z-50 shadow transition-all duration-300 px-4`}
      >
        <div className="flex items-center justify-between mt-4">
          <h2 className="font-DanaMedium">سبد خرید</h2>
          <button onClick={() => setShoppingCart(!theme.shoppingCart)}>
            <IoClose className="text-2xl" />
          </button>
        </div>
        {/* <!-- BORDER --> */}
        <span className="flex w-full border-t dark:border-white/10 border-gray-200 my-5"></span>
        {/* <!-- ITEMS CART --> */}
        <div className="flex flex-col gap-y-4">
          {/* <!-- ITEM --> */}
          <div className="flex items-center gap-x-3 border-b border-gray-200 pb-4 dark:border-white/10">
            {/* <!-- IMAGE --> */}
            <Image
              src={"/Images/products/p4.png"}
              width={20}
              height={20}
              className="w-20 h-20 object-cover rounded-lg"
              alt=""
            />
            {/* <!-- TEXT --> */}
            <div className="flex flex-col gap-y-1">
              <h2 className="font-DanaMedium line-clamp-2 text-sm">
                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
              </h2>
              <p className="text-xs text-green-600 dark:text-green-500">
                14.500 تومان تخفیف
              </p>
              <p className="font-DanaDemiBold text-sm">
                175,000
                <span className="font-Dana">تومان</span>
              </p>
            </div>
          </div>
          {/* <!-- ITEM --> */}
          <div className="flex items-center gap-x-3 border-b border-gray-200 pb-4 dark:border-white/10">
            {/* <!-- IMAGE --> */}
            <Image
              src={"/Images/products/p4.png"}
              width={20}
              height={20}
              className="w-20 h-20 object-cover rounded-lg"
              alt=""
            />
            {/* <!-- TEXT --> */}
            <div className="flex flex-col gap-y-1">
              <h2 className="font-DanaMedium line-clamp-2 text-sm">
                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
              </h2>
              <p className="text-xs text-green-600 dark:text-green-500">
                14.500 تومان تخفیف
              </p>
              <p className="font-DanaDemiBold text-sm">
                175,000
                <span className="font-Dana">تومان</span>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- EMPITY SHOPPING CART --> */}
        <div className="flex flex-col">
          <span className="w-full hidden justify-center gap-x-2 items-center text-red-500">
            <p>سبد خرید شما خالی میباشد</p>
            <svg className="w-4 h-5">
              <use href="#shopping-cart"></use>
            </svg>
          </span>
        </div>
        {/* <!-- PRICE BTN --> */}
        <div className="w-full absolute bottom-4 flex items-center gap-x-10">
          {/* <!-- BORDER --> */}
          <a
            href="shopping-cart.html"
            className="py-2 px-3 rounded-lg transition-colors bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 text-white"
          >
            ثبت سفارش
          </a>
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm">مبلغ قابل پرداخت</span>
            <h2 className="font-DanaDemiBold">
              350,000
              <span className="text-sm font-Dana">تومان</span>
            </h2>
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div
        onClick={() => setShoppingCart(!theme.shoppingCart)}
        className={`overlay  ${
          theme.shoppingCart ? "" : "hidden"
        } fixed w-full h-full top-0 left-0 right-0 bg-black/40 z-40 transition-all duration-300`}
      ></div>
    </>
  );
};

export default ShoppingCart;
