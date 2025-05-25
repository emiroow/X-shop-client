import Image from "next/image";
import { FC } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

interface Props {
  className?: string;
}

const ProductCard: FC<Props> = ({ className }) => {
  return (
    <div
      className={`relative group bg-white dark:bg-zinc-700 rounded-xl py-1 ${className}`}
    >
      {/* <!-- OFF BADGE --> */}
      <span className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 text-xs bg-green-500  rounded-full text-white z-30">
        20%
      </span>
      <Image
        width={200}
        height={200}
        quality={100}
        src={"/Images/products/p6.png"}
        alt="product-1"
        className="group-hover:scale-105 duration-300 mx-auto mb-3"
      />
      {/* <!-- PRODUCT MAIN --> */}
      <div className="px-2 lg:px-4 mb-3">
        <a
          href="product-details.html"
          className="line-clamp-2 font-DanaMedium mb-2 text-sm lg:text-base"
        >
          دانه قهوه اسپرسو یونیکا مقدار 250 گرم خط دوم طولانی
        </a>
        <div className="flex items-center gap-x-1 lg:gap-x-3">
          <p className="font-DanaDemiBold text-green-600 dark:text-green-500">
            200,000
            <span className="font-Dana text-sm">تومان</span>
          </p>
          <del className="font-Dana text-xs lg:text-sm text-rose-300 hidden lg:inline">
            230,000
            <span className="">تومان</span>
          </del>
        </div>
      </div>
      {/* <!-- PRODUCT FOOTER --> */}
      <div className="flex items-center justify-between px-2 lg:px-4 mb-3">
        <div className="flex items-center gap-x-2 child:transition-all child:duration-300">
          <span className="rounded-full p-2 dark:bg-zinc-800 dark:hover:bg-green-500 bg-gray-100 hover:bg-green-600 hover:text-white cursor-pointer">
            <IoCartOutline className=" md:text-xl text-md" />
          </span>
          <span className="hover:text-red-600 cursor-pointer">
            <IoMdHeartEmpty className=" md:text-xl text-md" />
          </span>
        </div>
        <div className="flex flex-row-reverse items-center gap-1 md:text-lg text-sm">
          <FaRegStar className=" text-yellow-400" />
          <FaRegStar className="" />
          <FaRegStar className="" />
          <FaRegStar className="" />
          <FaRegStar className="" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
