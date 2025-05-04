"use client";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductCard from "@/components/ui/ProductCard";
import { useFormik } from "formik";
import { useParams } from "next/navigation";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const Products = () => {
  const searchParams = useParams();

  type formik = {
    isCategory: boolean;
    isBrand: boolean;
    maxRange?: number;
    minRange?: number;
  };

  const formik = useFormik<formik>({
    initialValues: {
      isCategory: false,
      isBrand: false,
      maxRange: 100000,
      minRange: 0,
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <main className="container child:mt-8">
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row gap-4 ">
        {/* <!-- SIDE FILTER BOX --> */}
        <div className="lg:sticky top-1 h-fit lg:w-1/4 flex flex-col gap-y-4 items-center shadow rounded-lg p-4 dark:bg-zinc-700 bg-white">
          {/* <!-- TITLE --> */}
          <div className="flex items-center justify-between w-full">
            <span className="flex items-center gap-x-1">
              <svg className="w-5 h-5">
                <use href="#filter"></use>
              </svg>
              <p className="font-DanaMedium ">فیلتر ها</p>
            </span>
            <p className="text-green-500">حدف همه</p>
          </div>

          {/* <!-- accordion --> */}
          <div className="mt-3 w-full dark:bg-zinc-600 cursor-pointer shadow rounded-lg">
            <div
              onClick={() =>
                formik.setFieldValue("isCategory", !formik.values.isCategory)
              }
              className="accordion-header p-3 flex items-center justify-between"
            >
              <p className="font-DanaMedium">دسته بندی </p>
              <MdOutlineArrowBackIos
                className={`text-sm transition-transform duration-200 ${
                  formik.values.isCategory ? "rotate-90" : "rotate-0"
                }`}
              />
            </div>
            <ul
              className={`accordion-content overflow-hidden transition-all duration-300 ease-in-out ${
                formik.values.isCategory
                  ? "max-h-96 opacity-100 py-2"
                  : "max-h-0 opacity-0 "
              }  child:dark:text-gray-200 child:text-gray-600 child:flex items-center child:gap-x-2 child:py-1 child:px-2 child:rounded space-y-2`}
            >
              <li>
                <label className="cl-checkbox">
                  <input type="checkbox" />
                  <span></span>
                </label>
                <p>کپسول قهوه</p>
              </li>
              <li>
                <label className="cl-checkbox">
                  <input type="checkbox" />
                  <span></span>
                </label>
                <p> دانه قهوه</p>
              </li>
              <li>
                <label className="cl-checkbox">
                  <input type="checkbox" />
                  <span></span>
                </label>
                <p>قهوه ساز</p>
              </li>
            </ul>
          </div>

          {/* <!-- RANGE PRICE --> */}
          <div className="wrapper my-4">
            <div className="slider-bar">
              <div
                style={{
                  left: `${Math.round(
                    ((formik.values.minRange || 0) / 100000) * 100
                  )}%`,
                  right: `${
                    100 -
                    Math.round(
                      ((formik.values.maxRange || 100000) / 100000) * 100
                    )
                  }%`,
                }}
                className={`progress`}
              ></div>
            </div>
            <div className="range-input">
              <input
                type="range"
                min="0"
                max="100000"
                defaultValue={formik.values.maxRange}
                onChange={(e) =>
                  formik.setFieldValue("maxRange", parseInt(e.target.value))
                }
                className="max-range"
              />
              <input
                type="range"
                min="0"
                max="100000"
                defaultValue={formik.values.minRange}
                onChange={(e) =>
                  formik.setFieldValue("minRange", parseInt(e.target.value))
                }
                className="min-range"
              />
            </div>
            <div className="price-input mt-3 text-green-600">
              <div className="field justify-start">
                <span className="text-sm font-DanaMedium mr-2">تومان</span>
                <p className="min-input">{formik.values.minRange}</p>
              </div>
              <div className="field justify-end">
                <span className="text-sm font-DanaMedium mr-2">تومان</span>
                <p className="max-input">{formik.values.maxRange}</p>
              </div>
            </div>
          </div>

          {/* <!-- CHECK BOX --> */}
          <div className="flex my-2 w-full flex-col h-auto gap-y-5 child:flex child:items-center child:justify-between child:font-DanaMedium">
            <div className="">
              <p>فقط کالا های موجود</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="">
              <p>فقط محصولات ویژه</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
        {/* <!-- FILTER BOX & PRODUCTS --> */}
        <div className="lg:w-3/4">
          {/* <!-- TOP FILTER BOX --> */}
          <div className="w-full dark:bg-zinc-700 bg-white flex flex-wrap items-center justify-start lg:gap-x-8 py-2 px-2 sm:px-4 shadow rounded-lg sm:h-16">
            <div className="flex items-center gap-x-2">
              <svg className="w-5 h-5">
                <use href="#sort-list"></use>
              </svg>
              <h2 className="font-DanaDemiBold">مرتب سازی بر اساس :</h2>
            </div>
            <ul className="flex items-center gap-x-1 lg:gap-x-5 child:transition-all child:cursor-pointer child-hover:bg-gray-300/30 child:rounded-lg child:px-1 child:py-1 child:text-sm child:lg:text-base">
              <li className="text-green-500">محبوب ترین</li>
              <li>پرفروش ترین</li>
              <li>ارزان ترین</li>
              <li>گران ترین</li>
            </ul>
          </div>
          {/* <!-- PRODUCTS --> */}
          <div className=" mt-4 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-6 sm:gap-7 child:cursor-pointer child:overflow-hidden child:rounded-lg child:bg-white child:dark:bg-zinc-700 child:shadow lg:child:w-56 child:relative">
            {/* <!-- PRODUCT ITEM --> */}
            <ProductCard />
            {/* <!-- PRODUCT ITEM --> */}
            <ProductCard />
            {/* <!-- PRODUCT ITEM --> */}
            <ProductCard />
            {/* <!-- PRODUCT ITEM --> */}
            <ProductCard />
            {/* <!-- PRODUCT ITEM --> */}
            <ProductCard />
            {/* <!-- PRODUCT ITEM --> */}
            <ProductCard />
            {/* <!-- PRODUCT ITEM --> */}
            <ProductCard />
          </div>
          {/* <!-- PAGINATION --> */}
          <div className="mt-10 w-full flex items-center justify-center">
            <ul className="flex items-center gap-x-3 child:flex child:items-center child:justify-center child:w-8 child:h-8 child:cursor-pointer child:shadow child:rounded-lg child:transition-all child:duration-300">
              <li className="bg-white dark:bg-zinc-700 hover:bg-green-500 hover:text-white">
                <MdArrowForwardIos />
              </li>
              <li className="text-white bg-green-500">
                <a href="#">1</a>
              </li>
              <li className="bg-white dark:bg-zinc-700 hover:bg-green-500 hover:text-white">
                <a href="#">2</a>
              </li>
              <li className="bg-white dark:bg-zinc-700 hover:bg-green-500 hover:text-white">
                <a href="#">...</a>
              </li>
              <li className="bg-white dark:bg-zinc-700 hover:bg-green-500 hover:text-white">
                <MdArrowBackIosNew />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
