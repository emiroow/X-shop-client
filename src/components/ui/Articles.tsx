import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

const Articles = () => {
  return (
    <section className="container mt-16">
      {/* <!-- TITLE --> */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex flex-col gap-y-2">
          <h2 className="font-MorabbaMedium text-xl lg:text-3xl">
            مطالب خواندنی
          </h2>
        </div>
        <a
          href="articles.html"
          className="flex items-center px-2 py-1 rounded-lg gap-x-2 text-green-500 hover:ml-2 duration-300 transition-all"
        >
          مشاهده همه
          <IoIosArrowBack />
        </a>
      </div>
      <div
        className="flex items-center justify-center lg:justify-between flex-wrap gap-4 child-hover:-translate-y-2 child:duration-300
                child:bg-white child:dark:bg-zinc-700  child:w-[90%] child:sm:w-56 child:lg:w-72 child:rounded-lg child:p-2 child:cursor-pointer child:shadow
                "
      >
        {/* <!-- ITEM --> */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              width={100}
              height={100}
              src={"/Images/articles/a-1.jpg"}
              alt="test"
              className="h-[180px] w-full object-cover rounded-bl-3xl rounded-tr-3xl"
            />
            <div className="absolute opacity-0 left-0 top-0 bottom-0 right-0 bg-black/60 flex items-center justify-center group-hover:opacity-100 duration-300 transition-all rounded-bl-3xl rounded-tr-3xl">
              <a
                href="./article-details.html"
                className="flex items-center px-2 py-1 gap-x-1 font-DanaMedium rounded-lg border-2 border-white text-white"
              >
                <p>ادامه مطالب</p>
                <svg className="w-4 h-4">
                  <use href="#chevron-left"></use>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-y-1 my-2 px-1">
            <h2 className="font-DanaDemiBold">کشف دنیای قهوه</h2>
            <p className="line-clamp-2 text-sm text-gray-400">
              از دانه تا فنجان: فرآیند تولید قهوه از کاشت دانه‌های قهوه تا
              دم‌آوری نهایی، تمام مراحل تولید قهوه را بشناسید و لذت ببرید.
            </p>
          </div>
          <span className="flex w-full h-1 py-1 border-t border-gray-100 dark:border-white/10"></span>
          <div className="flex items-center justify-between text-sm px-1">
            <span className="flex items-center gap-x-1 text-gray-400">
              <svg className="w-4 h-4">
                <use href="#calendar"></use>
              </svg>
              <p className="mt-1">1403/5/1</p>
            </span>
            <span className="flex items-start gap-x-1 text-gray-400">
              <p className="font-DanaDemiBold">120</p>
              <svg className="w-4 h-4">
                <use href="#eye"></use>
              </svg>
            </span>
          </div>
        </div>
        {/* <!-- ITEM --> */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              width={100}
              height={100}
              src={"/Images/articles/a-1.jpg"}
              alt="test"
              className="h-[180px] w-full object-cover rounded-bl-3xl rounded-tr-3xl"
            />
            <div className="absolute opacity-0 left-0 top-0 bottom-0 right-0 bg-black/60 flex items-center justify-center group-hover:opacity-100 duration-300 transition-all rounded-bl-3xl rounded-tr-3xl">
              <a
                href="./article-details.html"
                className="flex items-center px-2 py-1 gap-x-1 font-DanaMedium rounded-lg border-2 border-white text-white"
              >
                <p>ادامه مطلب</p>
                <svg className="w-4 h-4">
                  <use href="#chevron-left"></use>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-y-1 my-2 px-1">
            <h2 className="font-DanaDemiBold">سفر به مزارع قهوه</h2>
            <p className="line-clamp-2 text-sm text-gray-400">
              گزارش‌هایی از بهترین مزارع قهوه جهان به دنیای مزارع قهوه سفر کنید
              و با داستان‌های جالب و جذاب از بهترین مزارع آشنا شوید
            </p>
          </div>
          <span className="flex w-full h-1 py-1 border-t border-gray-100 dark:border-white/10"></span>
          <div className="flex items-center justify-between text-sm px-1">
            <span className="flex items-center gap-x-1 text-gray-400">
              <svg className="w-4 h-4">
                <use href="#calendar"></use>
              </svg>
              <p className="mt-1">1403/5/1</p>
            </span>
            <span className="flex items-start gap-x-1 text-gray-400">
              <p className="font-DanaDemiBold">440</p>
              <svg className="w-4 h-4">
                <use href="#eye"></use>
              </svg>
            </span>
          </div>
        </div>
        {/* <!-- ITEM --> */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              width={100}
              height={100}
              src={"/Images/articles/a-1.jpg"}
              alt="test"
              className="h-[180px] w-full object-cover rounded-bl-3xl rounded-tr-3xl"
            />
            <div className="absolute opacity-0 left-0 top-0 bottom-0 right-0 bg-black/60 flex items-center justify-center group-hover:opacity-100 duration-300 transition-all rounded-bl-3xl rounded-tr-3xl">
              <a
                href="./article-details.html"
                className="flex items-center px-2 py-1 gap-x-1 font-DanaMedium rounded-lg border-2 border-white text-white"
              >
                <p>ادامه مطالب</p>
                <svg className="w-4 h-4">
                  <use href="#chevron-left"></use>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-y-1 my-2 px-1">
            <h2 className="font-DanaDemiBold">رازهای تهیه قهوه</h2>
            <p className="line-clamp-2 text-sm text-gray-400">
              نکات و ترفندهای باریستاهای حرفه‌ای با ترفندهای حرفه‌ای باریستاها
              آشنا شوید و قهوه‌ای عالی و بی‌نقص در خانه تهیه کنید.
            </p>
          </div>
          <span className="flex w-full h-1 py-1 border-t border-gray-100 dark:border-white/10"></span>
          <div className="flex items-center justify-between text-sm px-1">
            <span className="flex items-center gap-x-1 text-gray-400">
              <svg className="w-4 h-4">
                <use href="#calendar"></use>
              </svg>
              <p className="mt-1">1403/5/1</p>
            </span>
            <span className="flex items-start gap-x-1 text-gray-400">
              <p className="font-DanaDemiBold">89</p>
              <svg className="w-4 h-4">
                <use href="#eye"></use>
              </svg>
            </span>
          </div>
        </div>
        {/* <!-- ITEM --> */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              width={100}
              height={100}
              src={"/Images/articles/a-1.jpg"}
              alt="test"
              className="h-[180px] w-full object-cover rounded-bl-3xl rounded-tr-3xl"
            />
            <div className="absolute opacity-0 left-0 top-0 bottom-0 right-0 bg-black/60 flex items-center justify-center group-hover:opacity-100 duration-300 transition-all rounded-bl-3xl rounded-tr-3xl">
              <a
                href="./article-details.html"
                className="flex items-center px-2 py-1 gap-x-1 font-DanaMedium rounded-lg border-2 border-white text-white"
              >
                <p>ادامه مطلب</p>
                <svg className="w-4 h-4">
                  <use href="#chevron-left"></use>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-y-1 my-2 px-1">
            <h2 className="font-DanaDemiBold">شناخت انواع قهوه</h2>
            <p className="line-clamp-2 text-sm text-gray-400">
              آشنایی با انواع دانه‌ها و روش‌های دم‌آوری از انواع مختلف دانه‌های
              قهوه تا روش‌های متنوع دم‌آوری، همه چیز را درباره قهوه بدانید.
            </p>
          </div>
          <span className="flex w-full h-1 py-1 border-t border-gray-100 dark:border-white/10"></span>
          <div className="flex items-center justify-between text-sm px-1">
            <span className="flex items-center gap-x-1 text-gray-400">
              <svg className="w-4 h-4">
                <use href="#calendar"></use>
              </svg>
              <p className="mt-1">1403/5/1</p>
            </span>
            <span className="flex items-start gap-x-1 text-gray-400">
              <p className="font-DanaDemiBold">540</p>
              <svg className="w-4 h-4">
                <use href="#eye"></use>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
