"use client";
import { IMG_API } from "@/hooks/getEnv";
import { getCategories } from "@/service/getCategories";
import { HeaderCategoriesType } from "@/types/HeaderButtonType";
import Image from "next/image";
import React from "react";
import "./style.css";
const BrandCategory = () => {
  const { data: categories } = getCategories();

  return (
    <div className="containers brand-category-wrapper b-[80px] ">
      {categories.map((item: HeaderCategoriesType) => (
        <div key={item.id} className="brand-category-item   ">
          <Image
            className="w-[343px] h-[248px]"
            src={`${IMG_API}/${item.image}`}
            alt={item.name}
            width={343}
            height={254}
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default BrandCategory;
