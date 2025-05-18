import Breadcrumbs from "@/components/ui/Breadcrumbs";

const AboutUs = () => {
  return (
    <div className="container child:my-8">
      <Breadcrumbs />
      <section className="w-full  flex flex-col lg:flex-row gap-4 p-5 rounded-lg shadow bg-white dark:bg-zinc-700">
        <div className=" w-full lg:w-2/4">
          {/* <!-- LOGO --> */}
          {/* <a href="index.html" className="text-green-500 transition-colors w-fit block">
                    <p className="font-MorabbaBold text-3xl">کافئین</p>
                    <p className="tracking-tighter">حس نو با قهوه...</p>
                </a> */}

          <p className="mt-3 leading-10 text-gray-600 dark:text-gray-300">
            خوش آمدید به کافیین، مقصد نهایی شما برای تجربه‌ای بی‌نظیر از
            قهوه‌های باکیفیت و طعم‌های فوق‌العاده! در کافیین، ما به عشق و هنر
            تهیه قهوه اعتقاد داریم و تلاش می‌کنیم تا هر فنجان قهوه‌ای که به دست
            شما می‌رسد، تجربه‌ای لذت‌بخش و خاطره‌انگیز باشد.
          </p>
          <h2 className="mt-3 font-DanaMedium text-xl"> خدمات ما</h2>
          <ul className="mt-3 text-gray-600 dark:text-gray-300 space-y-2 child:flex child:items-center child:gap-x-2">
            <li>
              <span className="w-3 h-3 rounded-full bg-green-500 hidden lg:flex"></span>
              <p>
                قهوه‌های تخصصی: مجموعه‌ای از قهوه‌های برشت و دم‌کرده با طعم‌ها و
                عطرهای منحصر به فرد.
              </p>
            </li>
            <li>
              <span className="w-3 h-3 rounded-full bg-green-500 hidden lg:flex"></span>
              <p>
                محیط دلپذیر: طراحی مدرن و راحت برای تجربه‌ای لذت‌بخش از زمان
                خود.{" "}
              </p>
            </li>
            <li>
              <span className="w-3 h-3 rounded-full bg-green-500 hidden lg:flex"></span>
              <p>
                سرویس حرفه‌ای: تیم ما متعهد است تا بهترین تجربه ممکن را برای شما
                فراهم کند.{" "}
              </p>
            </li>
          </ul>
          <h2 className="mt-3 font-DanaMedium text-xl">چشم‌انداز ما</h2>
          <p className="mt-3 leading-10 text-gray-600 dark:text-gray-300">
            در کافیین، ما به آینده‌ای روشن برای صنعت قهوه چشم دوخته‌ایم و در
            تلاش هستیم تا با نوآوری‌های مستمر و تعهد به کیفیت، به عنوان یکی از
            بهترین مقصدهای قهوه در منطقه شناخته شویم. هدف ما این است که با ارائه
            قهوه‌ای با کیفیت و خدمات استثنایی، لحظات خاصی را برای شما خلق کنیم
          </p>

          <div className="flex items-center gap-x-4 text-gray-600 dark:text-gray-300 mt-3">
            <span className="flex items-center gap-x-2">
              <p>coffeepages</p>
              <img
                className="w-5 h-5"
                src="./Images/svg/instagram.png"
                alt="instagram"
              />
            </span>
            <span className="flex items-center gap-x-2">
              <p>coffeepages</p>
              <img
                className="w-5 h-5"
                src="./Images/svg/telegram.png"
                alt="telegram"
              />
            </span>
          </div>
        </div>
        <div className="flex justify-end  w-full lg:w-2/4">
          <img
            src="./Images/abouteus.webp"
            className="rounded-lg  lg:h-[35rem]"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
