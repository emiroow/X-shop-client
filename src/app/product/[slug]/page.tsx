import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FiMinus, FiPlus, FiRepeat } from "react-icons/fi";
import { GoInfo } from "react-icons/go";
import { HiOutlineTruck } from "react-icons/hi2";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuBadgeCheck, LuCalendarRange } from "react-icons/lu";

const Product = () => {
  return (
    <div className="container child:mt-8">
      <Breadcrumbs />

      {/* <!-- PRODUCT DETAILS SECTION --> */}
      <section className="flex flex-col lg:flex-row items-start gap-4 child:rounded-lg child:bg-white child:dark:bg-zinc-700 child:shadow child:p-4">
        {/* <!-- IMAGE & INFO BOX Container --> */}
        <div className="w-full lg:w-3/4 flex flex-col gap-y-8 ">
          {/* <!-- IMAGE & INFO BOX --> */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* <!-- SLIDER & ACTION BTN  --> */}
            <div className="flex  lg:w-96 flex-col gap-y-4">
              {/* <!-- ACTION BTN --> */}
              <div className="flex items-center gap-x-3 mr-2">
                <div className="tooltip">
                  <button className="rounded-full p-1.5 border-2 border-gray-200 dark:border-white/20">
                    <IoShareSocialOutline className="text-xl" />
                  </button>
                  <div className="tooltiptext duration-300 transition-all text-xs bg-zinc-700 dark:bg-zinc-500 text-white dark:to-zinc-700 after:border-t-zinc-700 after:dark:border-t-zinc-500">
                    اشتراک گذاری
                  </div>
                </div>
                <div className="tooltip ">
                  <button className="rounded-full p-1.5 border-2 border-gray-200 dark:border-white/20">
                    <CiHeart className="text-xl" />
                  </button>
                  <div className="tooltiptext duration-300 transition-all text-xs bg-zinc-700 dark:bg-zinc-500 text-white dark:to-zinc-700 after:border-t-zinc-700 after:dark:border-t-zinc-500">
                    افزودن به علاقمندی
                  </div>
                </div>
                {/* <div className="tooltip ">
                  <button className="rounded-full p-1.5 border-2 border-gray-200 dark:border-white/20">
                    <svg className="w-5 h-5">
                      <use href="#arrows-up-down"></use>
                    </svg>
                  </button>
                  <div className="tooltiptext duration-300 transition-all text-xs bg-zinc-700 dark:bg-zinc-500 text-white dark:to-zinc-700 after:border-t-zinc-700 after:dark:border-t-zinc-500">
                    مقایسه
                  </div>
                </div> */}
              </div>
              {/* <!-- SLIDER --> */}
              <div className="swiper mt-2 w-full porduct-details-slider rounded-lg">
                {/* <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src="./Images/products/p-5.webp" className="rounded-lg shadow w-full  object-cover lg:w-96 lg:h-fit" alt="">
                                </div>
                                <div className="swiper-slide">
                                    <img src="./Images/products/p-2.webp" className="rounded-lg shadow w-full  object-cover lg:w-96 lg:h-fit" alt="">
                                </div>
                                <div className="swiper-slide">
                                    <img src="./Images/products/p-1.webp" className="rounded-lg shadow w-full  object-cover lg:w-96 lg:h-fit" alt="">
                                </div>
                                <div className="swiper-slide">
                                    <img src="./Images/products/p-4.webp" className="rounded-lg shadow w-full  object-cover lg:w-96 lg:h-fit" alt="">
                                </div>
                            </div> */}
                <div className="swiper-pagination"></div>
              </div>
            </div>
            {/* <!-- INFO (TITLE , NAME , ...) --> */}
            <div className="flex flex-col gap-y-4 w-full">
              {/* <!-- NAME --> */}
              <div className="flex items-start justify-between border-b border-b-gray-200 py-2">
                <div className="flex flex-col gap-y-1">
                  <p className="text-sm text-gray-400">
                    ESPRESSO BEANS GIORNO{" "}
                  </p>
                  <h3 className="text-2xl font-MorabbaMedium">
                    دانه قهوه اسپرسو جیورنو{" "}
                  </h3>
                </div>
                <div className="flex gap-x-1">
                  <p className="font-DanaMedium mt-0.5">5.0</p>
                  <FaRegStar className="text-xl text-yellow-400" />
                </div>
              </div>
              <div className="flex gap-x-1 text-gray-400 ">
                <svg className="w-5 h-5">
                  <use href="#list-bullet"></use>
                </svg>
                <p>دسته‌بندی : دانه اسپرسو</p>
              </div>
              <p className="mt-2 font-DanaMedium">ویژگی های محصول :</p>
              <div className="grid grid-cols-12 gap-4 child:col-span-12 xl:child:col-span-6 child:dark:bg-zinc-800 child:bg-gray-100 child:h-12 child:rounded-lg child:text-sm child:flex child:items-center child:justify-center">
                <div>
                  <p className="text-zinc-600 dark:text-gray-400">
                    گونه : 50% عربیکا و 50% ربوستا
                  </p>
                </div>
                <div>
                  <p className="text-zinc-600 dark:text-gray-400">
                    میزان کافئین : متوسط
                  </p>
                </div>
                <div>
                  <p className="text-zinc-600 dark:text-gray-400">
                    خاستگاه : آمریکای مرکزی و آسیای
                  </p>
                </div>
                <div>
                  <p className="text-zinc-600 dark:text-gray-400">
                    مواد تشکیل‌دهنده : دانه اسپرسو
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mr-2 grid grid-cols-12 child:col-span-6 xl:child:col-span-3 gap-x-1 gap-y-2 lg:gap-4 child:border child:text-gray-400 child:dark:border-white/20 child:border-gray-200 child:rounded-lg child:h-12  child:p-2 child:flex child:items-center child:gap-x-1 lg:child:gap-x-2 child:text-sm lg:text-base">
            <span>
              <FiRepeat className="text-xl" />
              <p>ضمانت بازگشت کالا</p>
            </span>
            <span>
              <LuBadgeCheck className="text-2xl" />
              <p>تضمین اصالت کالا</p>
            </span>
            <span>
              <LuCalendarRange className="text-xl" />
              <p>پشتیبانی کل هفته</p>
            </span>
            <span>
              <HiOutlineTruck className="text-2xl" />
              <p>ارسال به سراسر ایران </p>
            </span>
          </div>
          <div className="lg:mr-2">
            <h2 className="font-MorabbaMedium text-2xl pb-1 mb-2 ">
              معرفی محصول
            </h2>
            <p className="leading-10 text-gray-600 dark:text-gray-300">
              دانه قهوه جیورنو یکی از انواع قهوه اسپرسو بن‌مانو است که از ترکیب
              مساوی دو گونه قهوه عربیکا و ربوستا با درجه برشته‌کاری مدیوم دارک
              تهیه شده است. میزان کافئین جیورنو متوسط رو به بالا با طعم‌یاد
              شکلاتی است. به‌طور معمول، خریداران دانه قهوه مصرف‌‌کنندگان قهوه
              اسپرسو هستند. اما دانه قهوه جیورنو را می‌توان به سایز پودر قهوه
              ترک، فرانسه و اسپرسو آسیاب کرد و با دم‌افزارهای جذوه، فرنچ پرس،
              موکاپات یا اسپرسوساز برقی قهوه تهیه کرد.
            </p>
          </div>
        </div>
        {/* <!-- PRICE & ADD TO CART BOX --> */}
        <div className="w-full lg:w-1/4 lg:sticky top-5 flex flex-col gap-y-6">
          {/* <!-- PRICE --> */}
          <div className="flex items-center gap-x-1">
            <p className="text-2xl font-DanaDemiBold">163,000</p>
            <p className="">تومان</p>
          </div>

          <button className="w-full flex items-center justify-between gap-x-1 rounded-lg border border-gray-200 dark:border-white/20 py-2 px-3">
            <FiPlus className="text-xl text-green-500" />
            <input
              type="number"
              name="customInput"
              id="customInput"
              min="1"
              max="20"
              // value="1"
              className="custom-input mr-4 text-lg bg-transparent"
            />
            <FiMinus className="text-xl text-red-500" />
          </button>

          <button className="w-full flex items-center gap-x-1 justify-between dark:bg-zinc-800 dark:text-gray-400  bg-gray-100 transition-all rounded-lg py-2 px-2 xl:px-3 font-DanaMedium text-sm xl:text-base">
            <p>مجموع خرید :</p>
            <p>163,000 تومان</p>
          </button>

          <button className="w-full flex items-center gap-x-1 justify-center bg-green-500 text-white hover:bg-green-600 transition-all rounded-lg shadow py-2">
            افزودن به سبد خرید
            <svg className="w-5 h-5">
              <use href="#shopping-bag"></use>
            </svg>
          </button>

          <div className="text-sm text-gray-400 flex xl:items-center gap-x-1">
            <GoInfo className="text-lg" />
            <p>ارسال رایگان برای خریدهای بالای 400 هزار تومان</p>
          </div>
        </div>
      </section>

      {/* <!-- COMMENTS --> */}
      <section className="w-full rounded-lg bg-white dark:bg-zinc-700 shadow p-5">
        <div className="flex items-center gap-x-2 mb-6">
          <h2 className="font-MorabbaMedium text-2xl ">دیدگاه ها</h2>
          <p className="text-sm text-blue-500">(28 دیدگاه)</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* <!-- SUBMIT COMMENT --> */}
          <div className="lg:w-1/4 flex flex-col w-full ">
            <p className="font-DanaMedium text-lg mb-2">ثبت دیدگاه</p>
            <input type="text" placeholder="عنوان" className="tailwind-input" />

            <p className="text-gray-500 dark:text-white text-sm mb-4">
              این محصول را به دیگران پیشنهاد :{" "}
            </p>
            <div
              className="grid grid-cols-12 child:col-span-6 gap-4 child:w-full  child:flex child:items-center child:justify-center child:gap-x-2 child:rounded-lg child:shadow child:py-2 mb-5 child:font-DanaMedium child:duration-300 
                        child:transition-all"
            >
              <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600 dark:ring-white/20 dark:focus:ring-green-600">
                <AiOutlineLike className="text-xl" />
                میکنم
              </button>
              <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343] dark:ring-white/20 dark:focus:ring-[#EF4343]">
                <AiOutlineDislike className="text-xl" />
                نمیکنم
              </button>
            </div>
            <textarea
              className="h-24 tailwind-input"
              placeholder="متن دیدگاه"
            ></textarea>
            <button className="rounded-lg p-2 bg-green-500 hover:bg-green-600 text-white transition-all">
              ثبت
            </button>
          </div>

          {/* <!-- ALL COMMENTS --> */}
          <ul className="lg:w-3/4 flex flex-col gap-y-2 child:w-full  ">
            {/* <!-- COMMENT ITEMS --> */}
            <li className="child:flex py-4 border-b border-gray-200 child:border-white/20">
              {/* <!-- TITLE --> */}
              <div className="flex items-center gap-x-2">
                <h2 className="font-DanaMedium text-lg mb-1">
                  عطر و طعم قهوه عالی{" "}
                </h2>
                <span className="px-2 py-1 mb-2 rounded-lg bg-green-500 text-white text-xs">
                  خریدار
                </span>
              </div>
              {/* <!-- COOMENT TEXT --> */}
              <div className="flex-col">
                <h2 className="flex items-center gap-x-1 text-green-500 mb-4">
                  <svg className="w-4 h-4">
                    <use href="#hand-up"></use>
                  </svg>
                  پیشنهاد میشود
                </h2>
                <p className="text-gray-500 dark:text-gray-200 mb-2 line-clamp-2">
                  عالی از هر لحاظ به شدت خریدش رو توصیه میکنم کیفیت محصول خوب
                  بود بسته بندی عالی بود
                </p>
              </div>
              {/* <!-- COMMENT FOOTER --> */}
              <div className="mt-2 lg:mt-0 flex-col lg:flex-row gap-y-2 lg:items-center justify-between">
                <div className="flex items-center gap-x-4 text-gray-400 text-sm">
                  <p>11 بهمن 1402</p>
                  <p>امیررضا کریمی</p>
                </div>
                <div className="flex items-center gap-x-2 flex-wrap mt-2">
                  <p className="text-gray-400 text-sm">
                    آیا این دیدگاه برایتان مفید بود؟
                  </p>
                  <div
                    className="flex items-center gap-x-2 child:flex child:items-center child:gap-x-1 child:rounded-lg child:p-2 child:font-DanaMedium child:duration-300 
                                child:transition-all child:text-sm"
                  >
                    <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600  dark:focus:ring-green-600">
                      78
                      <AiOutlineLike className="text-lg" />
                    </button>
                    <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343]  dark:focus:ring-[#EF4343]">
                      25
                      <AiOutlineDislike className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            {/* <!-- COMMENT ITEMS --> */}
            <li className="child:flex py-4 border-b border-gray-200 child:border-white/20">
              {/* <!-- TITLE --> */}
              <div className="flex items-center gap-x-2">
                <h2 className="font-DanaMedium text-lg mb-1">
                  عطر و طعم قهوه عالی{" "}
                </h2>
                <span className="px-2 py-1 mb-2 rounded-lg bg-green-500 text-white text-xs">
                  خریدار
                </span>
              </div>
              {/* <!-- COOMENT TEXT --> */}
              <div className="flex-col">
                <h2 className="flex items-center gap-x-1 text-green-500 mb-4">
                  <svg className="w-4 h-4">
                    <use href="#hand-up"></use>
                  </svg>
                  پیشنهاد میشود
                </h2>
                <p className="text-gray-500 dark:text-gray-200 mb-2 line-clamp-2">
                  عالی از هر لحاظ به شدت خریدش رو توصیه میکنم کیفیت محصول خوب
                  بود بسته بندی عالی بود
                </p>
              </div>
              {/* <!-- COMMENT FOOTER --> */}
              <div className="mt-2 lg:mt-0 flex-col lg:flex-row gap-y-2 lg:items-center justify-between">
                <div className="flex items-center gap-x-4 text-gray-400 text-sm">
                  <p>11 بهمن 1402</p>
                  <p>امیررضا کریمی</p>
                </div>
                <div className="flex items-center gap-x-2 flex-wrap mt-2">
                  <p className="text-gray-400 text-sm">
                    آیا این دیدگاه برایتان مفید بود؟
                  </p>
                  <div
                    className="flex items-center gap-x-2 child:flex child:items-center child:gap-x-1 child:rounded-lg child:p-2 child:font-DanaMedium child:duration-300 
                                child:transition-all child:text-sm"
                  >
                    <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600  dark:focus:ring-green-600">
                      78
                      <AiOutlineLike className="text-lg" />
                    </button>
                    <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343]  dark:focus:ring-[#EF4343]">
                      25
                      <AiOutlineDislike className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <button className="more-comment-btn w-full flex items-center justify-center gap-x-1 my-4 text-green-600 font-DanaMedium">
              <p className="more-comment-text">مشاهده بیشتر</p>
              <svg className="w-4 h-4 more-comment-icon">
                <use href="#chevron-down"></use>
              </svg>
            </button>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Product;
