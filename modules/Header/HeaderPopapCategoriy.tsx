"use client";
import { Context } from "@/context/Context";
import { IMG_API } from "@/hooks/getEnv";
import { Link } from "@/i18n/navigation";
import { getCategories } from "@/service/getCategories";
import { HeaderCategoriesType } from "@/types/HeaderButtonType";
import Image from "next/image";
import React, { useContext } from "react";
const HeaderPopapCategory = () => {
  const { showCategory } = useContext(Context);
  const { data: categories, isLoading } = getCategories();
  return (
    <div
      className={`${
        showCategory ? "h-auto sm:h-[570px]" : "h-0"
      } sm:w-[1000px] w-[500px] duration-300 overflow-hidden absolute flex flex-row sm:flex-row shadow-2xl bg-white top-[240px] sm:top-[160px] z-50`}
    >
      <div className="w-full sm:w-[30%] flex flex-col py-[20px] sm:py-[43px] px-[20px] sm:px-[32px] bg-[#EBEFF3]">
        {categories?.map((item: HeaderCategoriesType) => (
          <Link
            className="
          group
          py-[10px] flex items-center gap-[12px] pl-[20px] sm:pl-[40px] mt-[5px] text-[15px]
          text-[#1F2937] hover:bg-[#1F2937] hover:text-white
          transition-all duration-300 ease-in-out rounded-md
        "
            key={item.id}
            href="/"
          >
            <Image
              className="
            w-[22px] h-[22px]
            transition-transform duration-300
            group-hover:scale-110
          "
              src={`${IMG_API}/${item.icon}`}
              alt="category icon"
              width={24}
              height={24}
              priority
            />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="w-full sm:w-[70%] bg-[#ffffff] px-[20px] sm:px-[73px] pt-[25px] sm:pt-[55px]">
        <div className="flex flex-col sm:flex-row gap-[30px] sm:gap-[135px]">
          <div>
            <h2 className="text-lg font-semibold">Smartfonlar</h2>
          </div>
          <div>
            <p className="text-gray-700">Samsung smartfonlar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPopapCategory;
