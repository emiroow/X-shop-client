import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { BsTruck } from "react-icons/bs";

const Checkout = () => {
  return (
    <div className="container child:my-8">
      <Breadcrumbs />
      <section className="flex flex-col lg:flex-row items-start gap-4 ">
        {/* <!-- payment --> */}
        <div className="w-full lg:w-2/3 flex flex-col px-4 lg:px-8 py-4 rounded-lg bg-white dark:bg-zinc-700 shadow">
          <h2 className="font-MorabbaMedium text-2xl flex w-fit border-b-2 border-green-500 pb-1">
            {" "}
            پرداخت{" "}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-DanaMedium mt-4 mb-8 text-sm lg:text-base">
            لطفا اطلاعات خود را به درستی وارد نمایید
          </p>
          <div className="flex flex-col lg:flex-row items-start ">
            <form className="w-full grid grid-cols-12 gap-4">
              <input
                type="text"
                placeholder="نام *"
                className="tailwind-input col-span-6"
              />
              <input
                type="text"
                placeholder="نام خانوادگی*"
                className="tailwind-input col-span-6"
              />
              <input
                type="text"
                placeholder="استان*"
                className="tailwind-input col-span-6"
              />
              <input
                type="text"
                placeholder="شهر*"
                className="tailwind-input col-span-6"
              />
              <input
                type="text"
                placeholder="آدرس*"
                className="tailwind-input col-span-12 "
              />
              <input
                type="text"
                placeholder="تلفن*"
                className="tailwind-input col-span-6 "
              />
              <input
                type="text"
                placeholder="کد پستی*"
                className="tailwind-input col-span-6 "
              />
              <textarea
                className="tailwind-input col-span-12 h-24"
                placeholder="توضیحات اضافه"
              ></textarea>
            </form>
          </div>
        </div>

        {/* <!-- SIDE BAR --> */}
        <div className="top-2 lg:sticky w-full lg:w-1/3 child:rounded-lg child:bg-white child:dark:bg-zinc-700 child:shadow child:p-4 space-y-3 child:flex child:flex-col child:gap-y-4">
          <div>
            <span className="flex items-center gap-x-1 text-blue-500 dark:text-blue-400">
              <BsTruck className="text-xl" />
              <p className="font-DanaMedium">نوع ارسال :</p>
            </span>

            <div
              className="grid grid-cols-12 child:col-span-12 gap-4 child:w-full child:flex child:items-center child:gap-x-2 child:rounded-lg child:shadow child:p-2 mb-5 child:duration-300 
        child:transition-all child:text-gray-400 child:text-sm"
            >
              <button className=" group ring-transparent ring-1 focus:ring-blue-500 dark:ring-white/20 dark:focus:ring-blue-400">
                <span className="w-4 h-4 border border-gray-400 rounded-full group-focus:bg-blue-400 group-focus:border-blue-500 duration-300 transition-all"></span>
                پست پیشتاز : 70,000 تومان
              </button>
              <button className="group ring-transparent ring-1 focus:ring-blue-500 dark:ring-white/20 dark:focus:ring-blue-400">
                <span className="w-4 h-4 border border-gray-400 rounded-full group-focus:bg-blue-400 group-focus:border-blue-500 duration-300 transition-all"></span>
                پست معمولی : 20,000 تومان
              </button>
            </div>
          </div>
          {/* <!-- PRICE BOX --> */}
          <div>
            {/* <!-- PRICE --> */}
            <ul className="child:flex child:items-center space-y-6">
              <li className="justify-between">
                <p>جمع مبلغ سفارش :</p>
                <p className="font-DanaMedium text-green-500">
                  2,400,000 تومان
                </p>
              </li>
              <li className="justify-between">
                <p>تخفیف :</p>
                <p className="font-DanaMedium text-red-600 dark:text-gray-200">
                  220,000 تومان{" "}
                </p>
              </li>
              <li className="border-t-2 border-dashed border-gray-400 pt-6 justify-between">
                <p> مبلغ قابل پرداخت :</p>
                <p>2,200,000 تومان</p>
              </li>
              <li className="gap-x-2">
                <p>پرداخت با :</p>
                <button className="shadow flex items-center gap-x-2 cursor-pointer rounded-lg p-1  focus:ring-1 focus:ring-blue-500 duration-300 transition-all">
                  <img
                    src="./Images/svg/zarin-logo.png"
                    className="w-9 h-9 rounded-lg"
                    alt=""
                  />
                  <p className="pl-2">زرین پال</p>
                </button>
                <button className="shadow flex items-center gap-x-2 cursor-pointer rounded-lg p-1 focus:ring-1 focus:ring-blue-500 duration-300 transition-all">
                  <img
                    src="./Images/svg/pay-logo.png"
                    className="w-9 h-9 object-cover rounded-lg"
                    alt=""
                  />
                  <p className="pl-2"> پی </p>
                </button>
              </li>
            </ul>

            <button className="w-full mt-4 flex items-center justify-center bg-green-500 text-white hover:bg-green-600 transition-all rounded-lg shadow py-2">
              تایید و پرداخت
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
