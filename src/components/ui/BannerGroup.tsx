import Link from "next/link";

const BannerGroup = () => {
  return (
    <section className="container mt-16">
      <div className="flex flex-col lg:flex-row gap-y-4 items-center justify-between gap-x-10 child:rounded-lg child:text-white child:w-full child:h-48 child:lg:h-60 child:flex  child:pr-12 child:justify-center child:flex-col child:gap-y-4 child:cursor-pointer ">
        <Link
          href="shop.html"
          className="banner banner-1 group child:duration-300"
        >
          <h2 className="font-MorabbaMedium text-xl lg:text-3xl group-hover:mr-5">
            انواع قهوه
          </h2>
          <p className="text-base lg:text-lg group-hover:mr-5">
            ترکیبی و تک خاستگاه
          </p>
        </Link>
        <Link
          href="shop.html"
          className="banner banner-2 group child:duration-300"
        >
          <h2 className="font-MorabbaMedium text-xl lg:text-3xl group-hover:mr-5">
            پودر های فوری
          </h2>
          <p className="text-base lg:text-lg group-hover:mr-5">
            نسکافه ، هات چاکلت ، ماسالا
          </p>
        </Link>
      </div>
    </section>
  );
};

export default BannerGroup;
