"use client";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { useFormik } from "formik";
import { useParams } from "next/navigation";
import { MdOutlineArrowBackIos } from "react-icons/md";

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
  console.log();
  return (
    <main className="container child:mt-8">
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row gap-4 ">
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
            <div className="accordion-header p-3 flex items-center justify-between">
              <p className="font-DanaMedium">دسته بندی </p>
              <MdOutlineArrowBackIos className="text-sm" />
            </div>
            <ul className="accordion-content  hidden py-2 mx-2 child:dark:text-gray-200 child:text-gray-600 child:flex items-center child:gap-x-2 child:py-1 child:px-2 child:rounded space-y-2">
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
      </div>
    </main>
  );
};

export default Products;
