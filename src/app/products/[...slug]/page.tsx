"use client";

import { useParams } from "next/navigation";

const Products = () => {
  const searchParams = useParams();
  console.log(searchParams);
  return <div></div>;
};

export default Products;
