import Image from "next/image";
import Link from "next/link";
import { BsArrowUpCircle } from "react-icons/bs";
import instagram from "../../../public/Images/svg/instagram.png";
import telegram from "../../../public/Images/svg/telegram.png";
const Footer = () => {
  return (
    <footer className="relative mt-14 lg:mt-32 text-gray-300 bg-zinc-800 pt-8">
      <div className="container">
        {/* <!-- EMAIL BOX --> */}
        <div className="mb-12 flex border-b pb-8 border-white/10 flex-col-reverse sm:flex-row gap-y-5 items-center sm:items-end justify-between">
          <div className="flex gap-y-2 flex-col">
            <h2 className="font-DanaDemiBold">
              از جدیدترین تخفیف ها با خبر شوید
            </h2>
            <div className="bg-zinc-600 p-1 rounded-lg w-72 lg:w-[350px] flex items-center justify-between">
              <input
                type="text"
                className="bg-transparent text-gray-200 px-2"
                placeholder="ایمل یا شماره تلفن"
              />
              <button className="px-4 py-1 bg-green-500 rounded-lg font-DanaMedium">
                ثبت
              </button>
            </div>
          </div>
          {/* <!-- GO TO TOP BTN --> */}
          <Link
            href="#"
            className="flex items-center gap-x-2 text-sm p-2 cursor-pointer rounded-lg border-2 border-gray-200"
          >
            بازگشت به بالا
            <BsArrowUpCircle className="text-lg" />
          </Link>
        </div>

        <div className="flex mt-8 items-center justify-between flex-col lg:flex-row gap-y-10 lg:gap-x-20 flex-wrap">
          <div className="flex flex-col gap-y-2 w-full lg:w-[30%]">
            {/* <!-- LOGO --> */}
            <a
              href="index.html"
              className="text-green-500 transition-colors w-fit block"
            >
              <p className="font-MorabbaBold text-3xl">کافئین</p>
              <p className="tracking-tighter">حس نو با قهوه...</p>
            </a>
            {/* <!-- ABOUTE --> */}
            <p className="leading-8">
              در فروشگاه آنلاین ما، بهترین دانه‌های قهوه از سراسر جهان را با
              کیفیت بالا و طعمی بی‌نظیر برای شما فراهم آورده‌ایم. با انتخاب
              محصولات ما، لذت یک فنجان قهوه عالی را در خانه تجربه کنید.
            </p>
          </div>

          <div className="flex flex-col gap-y-2 w-full lg:w-auto">
            <h2 className="font-DanaDemiBold text-lg mb-3">- دسترسی سریع</h2>
            <div className="flex gap-x-10 child:space-y-2">
              <ul className="child-hover:text-green-500 child:transition-all">
                <li>
                  <a href="index.html">صفحه اصلی</a>
                </li>
                <li>
                  <a href="shop.html">فروشگاه</a>
                </li>
                <li>
                  <a href="contact-us.html">تماس با ما </a>
                </li>
                <li>
                  <a href="questions.html">سوالات متداول </a>
                </li>
              </ul>
              <ul className="child-hover:text-green-500 child:transition-colors">
                <li>
                  <a href="login.html"> ثبت نام | ورود </a>
                </li>
                <li>
                  <a href="articles.html">وبلاگ</a>
                </li>
                <li>
                  <a href="">شرایط و قوانین</a>
                </li>
                <li>
                  <a href="">حریم خصوصی </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-y-5 w-full lg:w-auto">
            <h2 className="font-DanaDemiBold text-lg">- تماس با ما</h2>
            <div className="flex items-center gap-x-1 lg:gap-x-2 hover:text-green-500 transition-colors cursor-pointer">
              <svg className="w-5 h-5">
                <use href="#map"></use>
              </svg>
              <p className="line-clamp-1">
                بلوار آزادی، خیابان استاد معین، کوچه گلستان، پلاک ۱۰
              </p>
            </div>

            <div className="flex lg:items-center flex-col gap-y-2 lg:flex-row gap-x-5 child:cursor-pointer child-hover:text-green-500 child:transition-colors">
              <span className="flex items-start gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#envelope"></use>
                </svg>
                <p>coffein@info.com</p>
              </span>

              <span className="flex items-start gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#phone"></use>
                </svg>
                <p>0923-122-3311</p>
                <p className="mr-2">0926-002-2737</p>
              </span>
            </div>

            <div className="flex items-start justify-start gap-x-10">
              <button className="flex items-center gap-x-2">
                <p dir="ltr">@coffeepages</p>
                <Image src={instagram} className="w-6 h-6" alt="instagram" />
              </button>
              <button className="flex items-center gap-x-2">
                <p dir="ltr">@coffeepages</p>
                <Image src={telegram} className="w-6 h-6" alt="instagram" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- COPY RIGTH --> */}
      <div className="bg-zinc-900">
        <div className="container  mt-12 py-2 flex flex-col lg:flex-row gap-y-2 lg:items-center lg:justify-between">
          <p className="text-sm lg:text-base">
            تمام حقوق این سایت متعلق به
            <Link
              href="index.html"
              className="text-green-500 font-DanaMedium mx-2"
            >
              کافئین
            </Link>
            میباشد
          </p>
          <p className="text-sm">
            Copyright © 2024 Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
