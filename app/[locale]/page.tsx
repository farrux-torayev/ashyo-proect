import React from "react";
import Products from "@/components/Products/Products";
import Brands from "@/modules/Brand";
import Hero from "@/modules/Hero";
import BrandCategory from "@/modules/BrandCategory";
import Musics from "@/modules/Musics";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Products  API="/product-items"  title="Most popular product" />
      <Products  API="/product-items"  title="Most popular product" />
      <Products  API="/product-items"  title="Sale product" />
      <BrandCategory />
      <Products  API="/product-items"  title="Aksiyadagi tovarlar"/>
      <Musics/>
      <Products API="/product-items" title="Oxirgi ko’rgan mahsulotlar"/>
      <ToastContainer position="top-right" />
    </>
  );
}
