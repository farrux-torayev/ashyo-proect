"use client"
import { IMG_API } from "@/hooks/getEnv";
import Image from "next/image";
import React, { FC } from "react";
import Button from "../Button";
import { CompareIcon, ShopIcon } from "@/assets/icons";
import formatNumber from "@/hooks/formatNumber";
import { useRouter } from "@/i18n/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { ProductItemType,  } from "@/types/ProductsType";
import "./styles.css";

const ProductItem: FC<{item:ProductItemType, E2?:boolean }> = ({ item, E2}) => {
  
  const router = useRouter();
  const queryClient = useQueryClient();
  function handleClick() {
    router.push(`${item.id}`);
    queryClient.invalidateQueries({ queryKey: [`single_product`] });
  }
  return (
    <div className="product-img-div ">
      <>
        <div
          onClick={() => handleClick()}
          className="relative product-img-wrapper  mt-[30px] bg-[#EBEFF3] py-[43px] rounded-[6px] w-full flex items-center justify-center mb-[16px]"
        >
          <Image
            className="w-[202px] h-[202px]"
            src={`${IMG_API}/${item.image}`}
            alt={item.product.image}
            width={202}
            height={202}
            priority
          />
          {item.product.is_aksiya && (
            <span className="absolute left-[25px] top-[21px] font-semibold text-[14px] text-[#E81504] bg-white py-[7px] px-[10px] rounded-[5px]">
              Aksiyada
            </span>
          )}
        </div>
        <div>
          <p
            onClick={() => handleClick()}
            className="line-clamp-1 product-img-text  text-[16px] text-[#545D6A] mb-[28px]"
          >
            {item.product.name}
          </p>
          <div className="flex justify-between items-end">
            <div onClick={() => handleClick()}>
              <strong className="font-bold text-[20px] text-[#0A1729] mb-[10px]">
                {formatNumber(item.price)} uzs
              </strong>
              <p className="bg-[#F02C961A] text-[#F02C96]  py-[7px] px-[10px] text-[15px] rounded-[3px]">
                6 oy / 1 200 000 usz
              </p>
            </div>
            <div className="flex gap-[10px] items-center ">
              <Button
                extraStyle="bg-transparent !text-[#545D6A] border-[1px] border-[#EBEFF3] !p-0 w-[52px] h-[52px] flex item-center justify-center"
                iconPosition="right"
                icon={<CompareIcon />}
                type="button"
              />
              <Button
                extraStyle="!p-0 w-[52px] h-[52px] flex item-center justify-center"
                iconPosition="right"
                icon={<ShopIcon />}
                type="button"
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductItem;
