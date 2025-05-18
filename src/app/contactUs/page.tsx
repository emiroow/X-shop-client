import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";

const ContactUs = () => {
  return (
    <div className="container child:my-8">
      <Breadcrumbs />
      <section className="w-full p-5 rounded-lg shadow bg-white dark:bg-zinc-700">
        <h2 className="font-MorabbaMedium text-xl flex w-fit border-b-2 border-green-500 pb-1">
          تماس با ما
        </h2>
        <p className="text-gray-500 dark:text-gray-200 font-DanaMedium mt-4 mb-8 text-sm lg:text-base">
          قبل از مطرح کردن هر گونه سوال بخش{" "}
          <a className="text-green-500" href="index.html">
            {" "}
            سوالات متداول
          </a>{" "}
          را مطالعه نمایید
        </p>

        <div className="flex flex-col lg:flex-row items-start gap-x-8">
          <div className="w-full lg:w-3/4">
            <form className="w-full grid grid-cols-12 gap-4">
              <input
                type="text"
                placeholder="شماره موبایل"
                className="tailwind-input col-span-6"
              />
              <input
                type="text"
                placeholder="عنوان"
                className="tailwind-input col-span-6"
              />
              <input
                type="text"
                placeholder="ایمیل"
                className="tailwind-input col-span-12 "
              />
              <textarea
                className="tailwind-input col-span-12 h-24"
                placeholder="متن دیدگاه"
              ></textarea>
              <button className="mx-auto rounded-lg col-span-12 w-32 p-2 bg-green-500 hover:bg-green-600 text-white transition-all">
                ارسال پیام
              </button>
            </form>
          </div>
          <ul className="w-full lg:w-2/4 space-y-4 lg:space-y-8 mt-5 lg:mt-0">
            <li>
              <span className="flex items-center gap-x-2 font-DanaMedium dark:text-gray-200 text-gray-500">
                <CiMail className="text-xl" />
                آدرس ایمیل :
              </span>
              <p className="text-lg  text-green-500 mt-1.5">coffein@info.com</p>
            </li>
            <li>
              <span className="flex items-center gap-x-2 font-DanaMedium dark:text-gray-200 text-gray-500">
                <LuPhone className="text-xl" />
                تلفن :
              </span>
              <p className="text-lg  text-green-500 mt-1.5">0926-002-2737</p>
            </li>
            <li>
              <span className="flex items-center gap-x-2 font-DanaMedium dark:text-gray-200 text-gray-500">
                <FaLocationDot className="text-xl" />
                آدرس :
              </span>
              <p className="text-green-500 mt-1.5">
                بلوار آزادی، خیابان استاد معین، کوچه گلستان، پلاک ۱۰
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
