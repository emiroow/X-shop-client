const page = () => {
  return (
    <section className="container flex items-center flex-col justify-center mt-28">
      <div className="max-w-lg w-full shadow">
        <div className="bg-white dark:bg-zinc-700 rounded-lg overflow-hidden">
          <div className="p-3 lg:p-8">
            <p className="mt-2 lg:mt-4 text-center text-gray-400">
              لطفا کد ارسال شده را وارد نمایید
            </p>
            <form method="POST" action="#" className="mt-8 space-y-6">
              <div className="grid grid-cols-12 child:col-span-3 gap-x-2 xs:gap-x-8  child:text-lg w-full child:bg-gray-100 child:dark:bg-zinc-500/30 child:rounded-lg child:pr-10 child:h-16">
                <input
                  className="appearance-none "
                  // minlength="1"
                  // maxlength="1"
                  type="text"
                />
                <input
                  className="appearance-none "
                  // minlength="1"
                  // maxlength="1"
                  type="text"
                />
                <input
                  className="appearance-none "
                  // minlength="1"
                  // maxlength="1"
                  type="text"
                />
                <input
                  className="appearance-none "
                  // minlength="1"
                  // maxlength="1"
                  type="text"
                />
              </div>

              <div className="flex mt-4">
                <div className="text-sm flex flex-col space-y-2">
                  <a
                    className="font-medium text-blue-500 hover:text-blue-500"
                    href="#"
                  >
                    زمان باقی مانده تا ارسال مجدد کد : 30 ثانیه
                  </a>
                  <a
                    className="font-medium text-green-500 hover:text-green-600"
                    href="#"
                  >
                    کد را دریافت نکردم
                  </a>
                </div>
              </div>
              <div>
                <button
                  className="group transition-colors relative w-full flex justify-center py-3 px-4 border border-transparent font-DanaMedium rounded-lg text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  type="submit"
                >
                  تایید
                </button>
              </div>
            </form>
          </div>
          <div className="px-8 py-4 text-center">
            <span className="text-gray-400">حساب کاربری ندارید؟ </span>
            <a
              className="font-medium text-green-500 hover:text-green-400"
              href="signup.html"
            >
              ثبت نام کنید
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
