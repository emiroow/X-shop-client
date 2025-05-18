import Breadcrumbs from "@/components/ui/Breadcrumbs";

const Questions = () => {
  return (
    <div className="container child:my-8">
      <Breadcrumbs />
      <section className="w-full px-5 pt-5 pb-10 rounded-lg shadow bg-white dark:bg-zinc-700">
        <h2 className="font-MorabbaMedium text-xl flex w-fit border-b-2 border-green-500 pb-1">
          سوالات متداول
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-DanaMedium mt-4 mb-8 text-sm lg:text-base">
          اگر سوال مورد نظر خود را پیدا نکردید به{" "}
          <a href="#" className="font-DanaMedium text-green-500">
            پشتیبانی
          </a>
          تیکت بدهید
        </p>

        {/* <!-- accordion --> */}
        <div className="mt-4 w-full lg:w-[60%] mx-auto dark:bg-zinc-600 cursor-pointer  rounded-lg border border-gray-200 dark:border-white/20">
          <div className="accordion-header p-3 flex items-center justify-between">
            <p className="font-DanaMedium line-clamp-1 text-sm md:text-base">
              چگونه می‌توانم سفارش خود را پیگیری کنم؟
            </p>
            <svg className="w-4 h-4">
              <use href="#chevron-left"></use>
            </svg>
          </div>
          <div className="accordion-content hidden py-2 mx-4 child:dark:text-gray-200 child:text-gray-400">
            <p>
              شما می‌توانید با ورود به حساب کاربری خود و انتخاب بخش "سفارشات
              من"، وضعیت سفارش خود را مشاهده کنید.
            </p>
          </div>
        </div>
        <div className="mt-4 w-full lg:w-[60%] mx-auto dark:bg-zinc-600 cursor-pointer  rounded-lg border border-gray-200 dark:border-white/20">
          <div className="accordion-header p-3 flex items-center justify-between">
            <p className="font-DanaMedium line-clamp-1 text-sm md:text-base">
              چگونه می‌توانم سفارش خود را لغو کنم؟
            </p>
            <svg className="w-4 h-4">
              <use href="#chevron-left"></use>
            </svg>
          </div>
          <div className="accordion-content hidden py-2 mx-4 child:dark:text-gray-200 child:text-gray-400">
            <p>
              اگر سفارش شما هنوز ارسال نشده باشد، می‌توانید با مراجعه به حساب
              کاربری و تماس با پشتیبانی، سفارش خود را لغو کنید.
            </p>
          </div>
        </div>
        <div className="mt-4 w-full lg:w-[60%] mx-auto dark:bg-zinc-600 cursor-pointer  rounded-lg border border-gray-200 dark:border-white/20">
          <div className="accordion-header p-3 flex items-center justify-between">
            <p className="font-DanaMedium line-clamp-1 text-sm md:text-base">
              آیا امکان بازگشت کالا وجود دارد؟
            </p>
            <svg className="w-4 h-4">
              <use href="#chevron-left"></use>
            </svg>
          </div>
          <div className="accordion-content hidden py-2 mx-4 child:dark:text-gray-200 child:text-gray-400">
            <p>
              بله، شما می‌توانید تا 7 روز پس از دریافت کالا، درخواست بازگشت آن
              را ثبت کنید.
            </p>
          </div>
        </div>
        <div className="mt-4 w-full lg:w-[60%] mx-auto dark:bg-zinc-600 cursor-pointer  rounded-lg border border-gray-200 dark:border-white/20">
          <div className="accordion-header p-3 flex items-center justify-between">
            <p className="font-DanaMedium line-clamp-1 text-sm md:text-base">
              هزینه ارسال چگونه محاسبه می‌شود؟
            </p>
            <svg className="w-4 h-4">
              <use href="#chevron-left"></use>
            </svg>
          </div>
          <div className="accordion-content hidden py-2 mx-4 child:dark:text-gray-200 child:text-gray-400">
            <p>
              هزینه ارسال بر اساس محل زندگی شما و وزن سفارش محاسبه می‌شود و در
              مرحله نهایی خرید نمایش داده می‌شود.
            </p>
          </div>
        </div>
        <div className="mt-4 w-full lg:w-[60%] mx-auto dark:bg-zinc-600 cursor-pointer  rounded-lg border border-gray-200 dark:border-white/20">
          <div className="accordion-header p-3 flex items-center justify-between">
            <p className="font-DanaMedium line-clamp-1 text-sm md:text-base">
              چگونه می‌توانم از تخفیفات و پیشنهادات ویژه مطلع شوم؟
            </p>
            <svg className="w-4 h-4">
              <use href="#chevron-left"></use>
            </svg>
          </div>
          <div className="accordion-content hidden py-2 mx-4 child:dark:text-gray-200 child:text-gray-400">
            <p>
              با عضویت در خبرنامه ما یا دنبال کردن صفحات اجتماعی فروشگاه، از
              جدیدترین تخفیفات مطلع خواهید شد.
            </p>
          </div>
        </div>
        <div className="mt-4 w-full lg:w-[60%] mx-auto dark:bg-zinc-600 cursor-pointer  rounded-lg border border-gray-200 dark:border-white/20">
          <div className="accordion-header p-3 flex items-center justify-between">
            <p className="font-DanaMedium line-clamp-1 text-sm md:text-base">
              روش‌های پرداخت در فروشگاه چیست؟
            </p>
            <svg className="w-4 h-4">
              <use href="#chevron-left"></use>
            </svg>
          </div>
          <div className="accordion-content hidden py-2 mx-4 child:dark:text-gray-200 child:text-gray-400">
            <p>
              شما می‌توانید از طریق کارت‌های بانکی، پرداخت آنلاین و یا درگاه‌های
              معتبر پرداخت خود را انجام دهید.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Questions;
