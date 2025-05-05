"use client";
import { getCategories} from "@/service/getCategories";
import { HeaderCategoriesType } from "@/types/HeaderButtonType";
import Link from "next/link";
import React from "react";
import "./styles" 
import HeaderCategorySkleton from "./HeaderCategorySkleton";

const HeaderButton = () => {
  const { data: categories, isLoading } = getCategories();

  return (
    <> 
    <div className="hidden md:flex items-center justify-between containers  ">
      {isLoading
        ? <HeaderCategorySkleton/>
        : categories?.map((item: HeaderCategoriesType) => (
            <Link
              key={item.id}
              className="text-[#545D6A] text-[16px] hover:text-[#134E9B] duration-300"
              href={`/product/categoryId/${item.name}`}
            >
              {item.name}
            </Link>
          ))}
    </div>
    </>
  );
};

export default HeaderButton;
