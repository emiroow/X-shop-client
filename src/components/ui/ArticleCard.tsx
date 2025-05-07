import Image from "next/image";

const ArticleCard = () => {
  return (
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
          آشنایی با انواع دانه‌ها و روش‌های دم‌آوری از انواع مختلف دانه‌های قهوه
          تا روش‌های متنوع دم‌آوری، همه چیز را درباره قهوه بدانید.
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
  );
};

export default ArticleCard;
