import AmazingOffer from "@/components/ui/AmazingOffer";
import Articles from "@/components/ui/Articles";
import BannerGroup from "@/components/ui/BannerGroup";
import Category from "@/components/ui/Category";
import ProductSlider from "@/components/ui/ProductSlider";
import Slider from "@/components/ui/Slider";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Slider />
      <Category />
      <ProductSlider name="productSlider" title="جدیدترین محصولات" />
      <ProductSlider name="productBestSellerSlider" title="محصولات پر فروش" />
      <BannerGroup />
      <AmazingOffer />
      <Articles />
    </Fragment>
  );
}
