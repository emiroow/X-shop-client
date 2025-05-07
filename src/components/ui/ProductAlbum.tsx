"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";

const ProductAlbum = () => {
  const settings: Settings = {
    className: "rounded-lg border-none outline-none mb-3 customDots",
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-2 w-full rounded-lg border-none outline-none">
      <Slider {...settings}>
        <div>
          <Image
            className="rounded-lg w-full border-none outline-none"
            alt="test"
            width={366}
            height={366}
            src={`/Images/products/p-1.webp`}
          />
        </div>
        <div>
          <Image
            className="rounded-lg w-full border-none outline-none"
            alt="test"
            width={366}
            height={366}
            src={`/Images/products/p-2.webp`}
          />
        </div>
        <div>
          <Image
            className="rounded-lg w-full border-none outline-none"
            alt="test"
            width={366}
            height={366}
            src={`/Images/products/p-3.webp`}
          />
        </div>
        <div>
          <Image
            className="rounded-l w-full border-none outline-none"
            alt="test"
            width={366}
            height={366}
            src={`/Images/products/p-4.webp`}
          />
        </div>
      </Slider>
    </div>
  );
};

export default ProductAlbum;
