import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { FaRegCircleCheck } from "react-icons/fa6";

const page = () => {
  return (
    <div className="container child:my-8">
      <Breadcrumbs />
      {/* <!-- payment box info --> */}
      <section className="lg:w-[40%] mx-auto flex justify-center items-center flex-col gap-y-4 p-4 rounded-lg shadow bg-white dark:bg-zinc-700">
        <FaRegCircleCheck className="text-5xl text-green-500 my-3" />

        <h3 className="font-DanaMedium text-green-500 text-lg">
          پرداخت شما موفقیت آمیز بود
        </h3>
        <p className="font-DanaMedium">جزییات سفارش :</p>
        <span className="w-full flex border-t-2 border-gray-200 dark:border-white/20"></span>
        <div className="mt-2 flex flex-wrap w-full items-center justify-center lg:justify-between child:text-center gap-5 lg:child:w-[30%]">
          <span>
            <p className="text-gray-400">تاریخ و زمان </p>
            <p className="font-DanaMedium mt-2">1404/6/21 | 22:00</p>
          </span>
          <span className="order-4 lg:order-none">
            <p className="text-gray-400"> وضعیت </p>
            <button className="mt-1 bg-green-500/20 text-green-500 text-sm px-2 py-0.5 rounded">
              پرداخت موفق
            </button>
          </span>
          <span>
            <p className="text-gray-400"> شماره پیگیری </p>
            <p className="font-DanaMedium mt-2">123940222</p>
          </span>
        </div>
        <div className="w-full grid grid-cols-12 child:col-span-6 gap-x-4 child:text-white child:flex child:w-full child:justify-center child:items-center child:py-2 mt-4 child:rounded-lg child:transition-all">
          <a href="index.html" className="bg-green-500 hover:bg-green-600">
            بازگشت به سایت
          </a>
          <a href="index.html" className="bg-blue-500 hover:bg-blue-600">
            پیگیری سفارش
          </a>
        </div>
      </section>
    </div>
  );
};

export default page;
