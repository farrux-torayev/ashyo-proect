"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // adjust path if needed
import { getCategories } from "@/service/getCategories";

const HeaderBottom = () => {
    const { data, isLoading, isError } = getCategories();

    if (isError) return <div>Error loading data</div>;

    return (
        <div className="containers">
            <ul className="flex justify-between items-center gap-[20px] py-[20px] cursor-pointer">
                {isLoading
                    ? 
                      Array.from({ length: 6 }).map((_, i) => (
                          <Skeleton
                              key={i}
                              className="h-4 w-20 rounded bg-gray-300"
                          />
                      ))
                    : data?.map((category: any) => (
                          <li
                              className="text-[#545D6A] hover:text-[#134E9B] transition duration-300 ease-in-out"
                              key={category.id}
                          >
                              {category.name}
                          </li>
                      ))}
            </ul>
        </div>
    );
};

export default HeaderBottom;
