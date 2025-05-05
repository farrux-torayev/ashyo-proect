"use client";
import React, { FC, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getBrandsE2 } from "@/service/getBrands";
import { getVariation } from "@/service/getVariation";
import { ProductFilterType, VariationType } from "@/types/VariationType";
import { BrandsType } from "@/types/BrandsType";
import { Skeleton } from "@heroui/skeleton";
import Button from "../Button";
import Slider from "@mui/material/Slider";
const ProductFilter: FC<ProductFilterType> = ({
  setMaxPrice,
  setMinPrice,
  setBrandId,
}) => {
  const queryClient = useQueryClient();
  const { brands, isLoading } = getBrandsE2();
  const { data: variation, isLoading: variationLoading } = getVariation();
  const [min, setMinValue] = useState<number>(10);
  const [max, setMaxValue] = useState<number>(200000000);
  const accumulatorData = [
    {
      id: 1,
      value: "3000 mAh",
    },
    {
      id: 2,
      value: "3200 mAh",
    },
    {
      id: 3,
      value: "3600 mAh",
    },
    {
      id: 4,
      value: "4000 mAh",
    },
    {
      id: 5,
      value: "4500 mAh",
    },
    {
      id: 6,
      value: "5000 mAh",
    },
  ];
  function handlePriceChange(_event: Event, newValue: number | number[]) {
    if (Array.isArray(newValue)) {
      setMinValue(newValue[0]);
      setMaxValue(newValue[1]);
    }
  }
  function handleFilterPriceBtnClick() {
    setMinPrice(min);
    setMaxPrice(max);
    queryClient.invalidateQueries({ queryKey: ["product_v2"] });
  }
  return (
    <div className="w-[25%] p-[18px] bg-[#EBEFF3] rounded-[8px] mt-[30px]">
      <h2 className="font-bold mb-[16px] text-[16px] leading-[34px]">
        Narx <span className="font-normal text-[14px]">[so‘m]</span>
      </h2>
      <div className="flex justify-between mb-[26px]">
        <div className="flex w-[45%] flex-col">
          <span className="font-normal text-[12px] leading-[34px] inline-block mb-[6px]">
            ..dan
          </span>
          <input
            type="number"
            value={min}
            onChange={(e) => setMinValue(Number(e.target.value))}
            className="py-[8px] px-[25px] bg-white text-center rounded-[5px] w-full"
            placeholder="Min naxr"
          />
        </div>
        <div className="flex w-[45%] flex-col">
          <span className="font-normal text-[12px] leading-[34px] inline-block mb-[6px]">
            ..gacha
          </span>
          <input
            type="number"
            value={max}
            onChange={(e) => setMaxValue(Number(e.target.value))}
            className="py-[8px] px-[25px] bg-white text-center rounded-[5px] w-full"
            placeholder="Max naxr"
          />
        </div>
      </div>
      <Slider
        value={[min, max]}
        onChange={handlePriceChange}
        aria-label="Slider"
        className="max-w-md"
        defaultValue={[min, max]}
        min={40}
        max={500000000}
        step={10}
      />
      <Button
        onClick={handleFilterPriceBtnClick}
        extraStyle="mt-5"
        title="Qidirish"
        type="button"
      />
      <div className="mt-[26px]">
        <h2 className="font-bold text-[16px] leading-[20px]">Brendi</h2>
        <div className="flex flex-wrap gap-[8px] mt-[15px]">
          {isLoading ? (
            <Skeleton className="h-5 !bg-white w-full mb-[5px] rounded-lg" />
          ) : (
            brands.map((item: BrandsType) => (
              <button
                onClick={() => setBrandId(item.id)}
                key={item.id}
                type="button"
                className="hover:scale-[1.1] duration-300 text-[12px] leading-[16px] py-[7px] px-[18px] bg-white rounded-[30px]"
              >
                {item.name}
              </button>
            ))
          )}
        </div>
      </div>
      <div className="mt-[26px]">
        <h2 className="font-bold text-[16px] leading-[20px]">
          Doiymi xotira ROM
        </h2>
        <div className="flex flex-wrap gap-[8px] mt-[15px]">
          {variationLoading ? (
            <Skeleton className="h-5 !bg-white w-full mb-[5px] rounded-lg" />
          ) : (
            variation.map((item: VariationType) => (
              <button
                key={item.id}
                type="button"
                className="hover:scale-[1.1] duration-300 text-[12px] leading-[16px] py-[7px] px-[18px] bg-white rounded-[30px]"
              >
                {item.value} GB
              </button>
            ))
          )}
        </div>
      </div>
      <div className="mt-[26px]">
        <h2 className="font-bold text-[16px] leading-[20px]">
          Doiymi xotira ROM
        </h2>
        <div className="flex flex-wrap gap-[8px] mt-[15px]">
          {variationLoading ? (
            <Skeleton className="h-5 !bg-white w-full mb-[5px] rounded-lg" />
          ) : (
            accumulatorData.map((item: { id: number; value: string }) => (
              <button
                key={item.id}
                type="button"
                className="hover:scale-[1.1] duration-300 text-[12px] leading-[16px] py-[7px] px-[18px] bg-white rounded-[30px]"
              >
                {item.value}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductFilter;
