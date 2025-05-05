"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { getProducts } from "@/service/getProducts";
import ProductItem from "./ProductItem";
import ProductItemSkeleton from "./ProductItemSkeleton";
import { ProductItemType, ProductPageType } from "@/types/ProductsType";
const Products: FC<ProductPageType> = ({
  title,
  API,
  extraStyle: extraClass,
}) => {
  const { products, isLoading } = getProducts(API);
  return (
    <div className={`products pb-[100px pb-[100px] ${extraClass}`}>
      <div className="containers !mb-[50px] ">
        <h2 className="text-black text-[32px] mt-[50px] font-bold leading-[130%]">
          {title}
        </h2>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className=""
      >
        {isLoading ? (
          <ProductItemSkeleton />
        ) : (
          products.map((item: ProductItemType) => (
            <SwiperSlide key={item.id}>
              {" "}
              <ProductItem item={item} />{" "}
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <div className="px-5 sm:hidden  grid  grid-cols-2 gap-[15px] flex-wrap">
        {isLoading ? (
          <ProductItemSkeleton />
        ) : (
          products.map((item: ProductItemType) => (
            <ProductItem key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
