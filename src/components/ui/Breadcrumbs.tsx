import { MdOutlineArrowBackIos } from "react-icons/md";

const Breadcrumbs = () => {
  return (
    <section>
      <ul className="flex items-center gap-x-2 text-gray-400 text-sm lg:text-base">
        <li className="flex items-center gap-x-2">
          <a href="index.html">صفحه اصلی</a>
        </li>
        <MdOutlineArrowBackIos className="text-sm" />
        <li className="flex items-center gap-x-2">
          <a href="shop.html">فروشگاه</a>
        </li>
      </ul>
    </section>
  );
};

export default Breadcrumbs;
