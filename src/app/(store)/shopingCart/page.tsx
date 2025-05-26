"use client";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { FiMinus, FiPlus } from "react-icons/fi";

const ShoppingCart = () => {
  return (
    <section className="container child:mt-8">
      <Breadcrumbs />
      <div className=" flex flex-col lg:flex-row items-start gap-4 child:rounded-lg child:bg-white child:dark:bg-zinc-700 child:shadow child:p-4 mt-4">
        {/* <!-- products --> */}
        <div className="w-full lg:w-2/3 flex flex-col gap-y-8 ">
          {/* <!-- shopping cart header --> */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-x-2">
              <h2 className="font-DanaMedium text-xl">سبد خرید</h2>
              <p className="text-gray-400">(2 کالا)</p>
            </span>
            <span className="flex items-center gap-x-1 text-red-600 dark:text-white cursor-pointer">
              <p className="mt-1 font-DanaMedium ">حذف همه</p>
              <svg className="w-5 h-5">
                <use href="#trash"></use>
              </svg>
            </span>
          </div>
          {/* <!-- PRODUCT ITEMS --> */}
          <div className="w-full flex flex-col gap-y-4 child:p-2 lg:child:p-4 child:border-b-2 child:border-gray-200 child:dark:border-white/20 ">
            {/* <!-- PRODUCT ITEM --> */}
            <div className="w-full flex justify-between relative">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* <!-- IMG AND COUNT BTN --> */}
                <div className="flex w-fit flex-col">
                  <img src="./Images/products/p4.png" className="w-36" alt="" />
                  <button className="flex items-center justify-between gap-x-1 rounded-lg border border-gray-200 dark:border-white/20 py-1 px-2">
                    <FiPlus className="text-xl text-green-500" />
                    <input
                      type="number"
                      name="customInput"
                      id="customInput"
                      min="1"
                      max="20"
                      // value="1"
                      className="custom-input mr-8 text-lg bg-transparent"
                    />
                    <FiMinus className="text-xl text-red-500" />
                  </button>
                </div>
                {/* <!-- information and name product --> */}
                <div className="flex flex-col gap-y-2">
                  <h2 className="font-DanaMedium">
                    قهوه خانگی بن مانو 200 گرمی ربوستا کد 0111
                  </h2>
                  <ul className="space-y-3 child:text-sm text-gray-400 child:flex child:items-center child:gap-x-1">
                    <li>
                      <svg className="w-5 h-5">
                        <use href="#box"></use>
                      </svg>
                      <p className="mt-1">وزن : 200 گرم</p>
                    </li>
                    <li>
                      <svg className="w-5 h-5">
                        <use href="#truke"></use>
                      </svg>
                      <p className="mt-1">ارسال پست پیشتاز</p>
                    </li>
                    <li className="text-green-500">
                      <svg className="w-5 h-5">
                        <use href="#check-badge"></use>
                      </svg>
                      <p className="mt-1"> تضمین کیفیت</p>
                    </li>
                  </ul>
                  <span className="flex items-center gap-x-1 text-green-500 mt-4">
                    <p className="font-DanaMedium text-xl">1,200,000</p>
                    <p className="text-lg">تومان</p>
                  </span>
                  <span className="absolute bottom-3 left-0 text-blue-500 flex sm:hidden items-center gap-x-1 text-sm cursor-pointer">
                    <p className="hidden sm:flex">افزودن به خرید بعدی</p>
                    <p className="flex sm:hidden">خرید بعدی</p>
                    <svg className="w-4 h-4">
                      <use href="#chevron-left"></use>
                    </svg>
                  </span>
                  <svg className=" flex sm:hidden absolute top-0 left-0 w-5 h-5">
                    <use href="#close"></use>
                  </svg>
                </div>
              </div>
              <div className="hidden sm:flex items-end justify-between flex-col">
                <svg className="w-5 h-5 cursor-pointer">
                  <use href="#close"></use>
                </svg>
                <span className="text-blue-500 hover:ml-2 duration-300 transition-all flex items-center gap-x-1 text-sm cursor-pointer">
                  <p className="hidden md:flex">افزودن به خرید بعدی</p>
                  <p className="flex md:hidden">خرید بعدی</p>
                  <svg className="w-4 h-4">
                    <use href="#chevron-left"></use>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Empty shopping cart --> */}
        <div className="w-full lg:w-2/3 h-80 items-center flex-col justify-center gap-y-4 hidden">
          <h2 className="font-DanaMedium text-xl lg:text-2xl">
            سبد خرید شما خالی میباشد!
          </h2>
          <svg className="lg:w-16 w-10 h-10 lg:h-16">
            <use href="#shopping-cart"></use>
          </svg>
          <a
            href="shop.html"
            className="main-btn bg-blue-500 hover:bg-blue-600 py-2 font-DanaMedium px-20"
          >
            برو به فروشگاه
            <svg className="w-5 h-5">
              <use href="#chevron-left"></use>
            </svg>
          </a>
        </div>

        {/* <!-- PRICE BOX --> */}
        <div className="w-full lg:w-1/3 lg:sticky top-5 flex flex-col gap-y-4">
          {/* <!-- PRICE --> */}
          <ul className="child:flex child:items-center child:justify-between space-y-8">
            <li>
              <p>جمع مبلغ سفارش :</p>
              <p className="font-DanaMedium text-green-500">2,400,000 تومان</p>
            </li>
            <li>
              <p>تخفیف :</p>
              <p className="font-DanaMedium text-red-600 dark:text-gray-200">
                220,000 تومان{" "}
              </p>
            </li>
            <li className="border-t-2 border-dashed border-gray-400 pt-8">
              <p> مبلغ قابل پرداخت :</p>
              <p>2,200,000 تومان</p>
            </li>
          </ul>

          <a
            href="./payment.html"
            className="w-full mt-4 flex items-center gap-x-1 justify-center bg-green-500 text-white hover:bg-green-600 transition-all rounded-lg shadow py-2"
          >
            نهایی کردن خرید
            <svg className="w-5 h-5">
              <use href="#shopping-bag"></use>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
