import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductSlider from "@/components/ui/ProductSlider";
import Image from "next/image";
import { Suspense } from "react";
import { CiCalendar, CiUser } from "react-icons/ci";
import { FiShare2 } from "react-icons/fi";
import {
  MdKeyboardArrowLeft,
  MdOutlineFormatListBulleted,
} from "react-icons/md";
import articleSample from "/Images/articles/a-1.jpg";

const article = () => {
  return (
    <Suspense>
      <div className="container child:mt-5">
        <Breadcrumbs />
        <section className=" flex flex-col lg:flex-row items-start gap-4">
          {/* <!-- ARTICLE --> */}
          <div className="w-full lg:w-3/4 flex flex-col gap-y-8 px-4 lg:px-8 py-4 rounded-lg bg-white dark:bg-zinc-700 shadow">
            {/* <!-- ARTICLE HEADER --> */}
            <div className="w-full flex flex-col gap-y-6 ">
              <div className="flex flex-col lg:flex-row gap-y-3 lg:items-center lg:justify-between">
                <h2 className="font-MorabbaMedium text-lg lg:text-2xl">
                  طرز تهیه آیس کاپوچینو و کاپوچینوی سرد
                </h2>
                <span className="flex items-center gap-x-1 text-green-500 cursor-pointer">
                  <FiShare2 />
                  <p className="font-DanaMedium">اشتراک گذاری</p>
                </span>
              </div>
              <div className="flex flex-wrap  items-center gap-y-3 gap-x-8 text-sm">
                <span className="flex items-center gap-x-1 text-gray-400 ">
                  <MdOutlineFormatListBulleted />
                  <p>دسته‌بندی : دانه اسپرسو</p>
                </span>
                <span className="flex items-center gap-x-1 text-gray-400 ">
                  <CiUser />
                  <p>توسط : پارسا وصالی </p>
                </span>
                <span className="flex items-center gap-x-1 text-gray-400 ">
                  <CiCalendar />
                  <p> تاریخ انتشار : 1403/05/20 </p>
                </span>
              </div>
            </div>

            {/* <!-- ARTICLE MAIN --> */}
            <div>
              <Image
                width={100}
                height={100}
                className="rounded-lg"
                src={articleSample}
                alt=""
              />
              <p className="mt-3 leading-10 text-gray-600 dark:text-gray-300">
                احتمالا وقتی کاپوچینو برای اولین بار در ایتالیا در دهه ۱۹۰۰ وارد
                صحنه شد باریستاها نمی‌دانستند که این نوشیدنی خامه‌ای در سال‌های
                آینده چقدر قرار است محبوب شود. درست کردن یک کاپوچینوی سرد در
                خانه با تجهیزات کم و چند مواد اولیه ساده به راحتی انجام می‌شود و
                شما می‌توانید فقط با کمی تمرین و دقت یک کاپوچینوی سرد بدون
                پرداخت هزینه‌های زیاد درست کنید. اگر عاشق تلخی طعم قهوه هستید،
                این دستور کاپوچینوی سرد خانگی آسان برای شما است.
              </p>
              <h2 className="mt-3 font-DanaMedium text-xl">
                کاپوچینوی سرد چیست؟
              </h2>
              <p className="mt-3 leading-10 text-gray-600 dark:text-gray-300">
                کاپوچینوی سرد یک نوشیدنی نسبتا جدید در دنیای نوشیدنی‌های بر پایه
                قهوه است که از کاپوچینوی سنتی که ریشه در ایتالیا دارد به وجود
                آمده است. در واقع با گسترش فرهنگ قهوه‌نوشی در جهان تقاضا برای
                نسخه‌های سرد نوشیدنی‌های گرم زیاد و کاپوچینوی سرد در نتیجه این
                تقاضا ظاهر شد.
              </p>
              <h2 className="mt-3 font-DanaMedium text-xl">مواد لازم :</h2>
              <ul className="mt-3 text-gray-600 dark:text-gray-300 space-y-2 child:flex child:items-center child:gap-x-2">
                <li>
                  <span className="w-3 h-3 rounded-full bg-green-500 flex"></span>
                  <p>یک یا دو شات قهوه اسپرسو</p>
                </li>
                <li>
                  <span className="w-3 h-3 rounded-full bg-green-500 flex"></span>
                  <p>یخ </p>
                </li>
                <li>
                  <span className="w-3 h-3 rounded-full bg-green-500 flex"></span>
                  <p>شیر</p>
                </li>
                <li>
                  <span className="w-3 h-3 rounded-full bg-green-500 flex"></span>
                  <p>سیروپ به دلخواه </p>
                </li>
              </ul>

              <h2 className="mt-4 font-DanaMedium text-xl">
                روش اول: طرز تهیه آیس کاپوچینوی با قهوه اسپرسو
              </h2>
              <p className="mt-3 leading-10 text-gray-600 dark:text-gray-300">
                شیر یک عنصر حیاتی در کاپوچینوی سرد است. برای کف‌دار کردن شیر از
                قسمت نازل بخار دستگاه اسپرسوساز برقی، فرنچ‌پرس، مخلوط‌کن یا همزن
                برقی استفاده کنید. در مقاله روش فوم‌گیری شیر با دستگاه فوم گیری
                از شیر را کامل توضیح داده‌ایم. اگر هیچ‌گونه دستگاهی ندارید شیر
                را با استفاده از مایکرویو کف‌دار کنید. شیر را در یک شیشه درب‌دار
                بریزید و بیش از یک سوم شیشه را پر نکنید، زیرا وقتی شیشه را تکان
                می‌دهید جا برای کف‌دار شدن شیر باقی بماند. شیشه را تا حد ممکن
                تکان بدهید که کف کند و حجم آن تقریبا ۲ برابر شود. سپس، درب شیشه
                را بردارید و بدون درپوش به مدت ۳۰ ثانیه در مایکروویو قرار بدهید،
                لطفا مطمئن شوید شیشه‌ای که استفاده می‌کنید سازگار با مایکروویو
                است. شیر کف‌دار شروع به بالا آمدن و گرمای مایکروویو کف شیر را در
                نهایت تثبیت می‌کند. مراقب باشید شیر در مایکروویو سر نرود.
              </p>
            </div>
          </div>

          {/* <!-- SIDE BAR --> */}
          <div className="top-2 lg:sticky w-full lg:w-1/4 child:rounded-lg child:bg-white child:dark:bg-zinc-700 child:shadow child:p-4 space-y-5 child:flex child:flex-col child:gap-y-4">
            <div>
              <h4 className="font-DanaMedium">جدیدترین مقالات : </h4>
              <ul className="w-full child:flex child:items-center child:gap-x-2 child:cursor-pointer space-y-4 ">
                <li>
                  <Image
                    width={100}
                    height={100}
                    className="w-24 h-16 object-cover rounded-lg"
                    src={articleSample}
                    alt=""
                  />
                  <a className="flex flex-col gap-y-2 ">
                    <p className="line-clamp-1">طرز تهیه آیس کاپوچینو و سرد</p>
                    <span className="flex items-center gap-x-1 text-sm text-gray-400">
                      <CiCalendar />
                      1403/02/21
                    </span>
                  </a>
                </li>
                <li>
                  <Image
                    width={100}
                    height={100}
                    className="w-24 h-16 object-cover rounded-lg"
                    src={articleSample}
                    alt=""
                  />
                  <a className="flex flex-col gap-y-2 ">
                    <p className="line-clamp-1">طرز تهیه آیس کاپوچینو و سرد</p>
                    <span className="flex items-center gap-x-1 text-sm text-gray-400">
                      <CiCalendar />
                      1403/02/21
                    </span>
                  </a>
                </li>
                <li>
                  <Image
                    width={100}
                    height={100}
                    className="w-24 h-16 object-cover rounded-lg"
                    src={articleSample}
                    alt=""
                  />
                  <a className="flex flex-col gap-y-2 ">
                    <p className="line-clamp-1">طرز تهیه آیس کاپوچینو و سرد</p>
                    <span className="flex items-center gap-x-1 text-sm text-gray-400">
                      <CiCalendar />
                      1403/02/21
                    </span>
                  </a>
                </li>
                <li>
                  <Image
                    width={100}
                    height={100}
                    className="w-24 h-16 object-cover rounded-lg"
                    src={articleSample}
                    alt=""
                  />
                  <a className="flex flex-col gap-y-2 ">
                    <p className="line-clamp-1">طرز تهیه آیس کاپوچینو و سرد</p>
                    <span className="flex items-center gap-x-1 text-sm text-gray-400">
                      <CiCalendar />
                      1403/02/21
                    </span>
                  </a>
                </li>
              </ul>
              <a href="articles.html" className="main-btn py-1.5 gap-x-1">
                مشاهده بیشتر
                <MdKeyboardArrowLeft />
              </a>
            </div>
            <div>
              <h4 className="font-DanaMedium"> دسته بندی : </h4>
              <ul className="child:flex child:items-center child:justify-between child:cursor-pointer space-y-3 ">
                <li className="group">
                  <span className="flex items-center justify-center gap-x-1 group-hover:pr-2 duration-300 transition-all group-hover:text-green-500">
                    <p>سلامتی</p>
                    <MdKeyboardArrowLeft className="text-xl" />
                  </span>
                  <span className="w-5 h-5 flex items-center justify-center rounded-lg text-white bg-green-500 text-xs">
                    12
                  </span>
                </li>
                <li className="group">
                  <span className="flex items-center justify-center gap-x-1 group-hover:pr-2 duration-300 transition-all group-hover:text-green-500">
                    <p>اخبار قهوه</p>
                    <MdKeyboardArrowLeft className="text-xl" />
                  </span>
                  <span className="w-5 h-5 flex items-center justify-center rounded-lg text-white bg-green-500 text-xs">
                    2
                  </span>
                </li>
                <li className="group">
                  <span className="flex items-center justify-center gap-x-1 group-hover:pr-2 duration-300 transition-all group-hover:text-green-500">
                    <p> تجهیزات قهوه</p>
                    <MdKeyboardArrowLeft className="text-xl" />
                  </span>
                  <span className="w-5 h-5 flex items-center justify-center rounded-lg text-white bg-green-500 text-xs">
                    6
                  </span>
                </li>
                <li className="group">
                  <span className="flex items-center justify-center gap-x-1 group-hover:pr-2 duration-300 transition-all group-hover:text-green-500">
                    <p>روش‌های دم‌آوری قهوه</p>
                    <MdKeyboardArrowLeft className="text-xl" />
                  </span>
                  <span className="w-5 h-5 flex items-center justify-center rounded-lg text-white bg-green-500 text-xs">
                    12
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <ProductSlider title="پرفروش ترین محصولات" />
    </Suspense>
  );
};

export default article;
