"use client";
import {
  ByIcon,
  CompareIcon,
  DataIcon,
  DeliveryIcon,
  LikeIcon,
} from "@/assets/icons";
import Products from "@/components/Products/Products";
import { IMG_API } from "@/hooks/getEnv";
import { Link } from "@/i18n/navigation";
import { getSingeProduct } from "@/service/getSingeProduct";
import { getVariation } from "@/service/getVariation";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
const SinglePage = () => {
  const params: { id: string } = useParams();
  const formatNumber = (input: string | number | undefined | null) => {
    if (input === undefined || input === null) return "";
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  const { data: singeProduct } = getSingeProduct(params.id);
  const { data: variations } = getVariation();
  return (
    <>
      <div className="containers !mt-[10px] !mb-[100px]">
        <div className="flex gap-[15px]">
          <Link
            href={"/"}
            className="flex gap-[15px] text-[15px] text-[#B6BABF]"
          >
            <span>Bosh sahifa </span> <span>/</span>{" "}
          </Link>
          <Link
            href={"/"}
            className="flex gap-[15px] text-[15px] text-[#B6BABF]"
          >
            <span>Smartfonlar </span> <span>/</span>{" "}
          </Link>
          <Link href={"/"} className="text-[#B6BABF]">
            {singeProduct.name}
          </Link>
        </div>
        <div>
          <h2 className="my-[30px] text-[#06172D]  text-[32px] font-bold">
            {singeProduct.name}
          </h2>
          <div className="flex justify-between">
            <div className="w-[45%] h-[430px] bg-[#EBEFF3] flex items-center justify-center relative">
              <Image
                className="w-[341px] h-[341px] "
                src={`${IMG_API}/${singeProduct.image}`}
                alt="Single Product image"
                width={341}
                height={341}
                priority
              />
              <div className="absolute top-[26px] right-[31px] flex gap-[20px]">
                <button>
                  <CompareIcon />
                </button>
                <button>
                  <LikeIcon />
                </button>
              </div>
            </div>
            <div className="w-[45%]">
              <p className="pb-[36px] text-[#06172D]">
                Narxi
                <span className="text-[32px] pl-[20px] font-bold">
                  {formatNumber(singeProduct.price)}
                </span>
                <span className="text-[24px] font-bold pl-[20px]">uzs</span>{" "}
              </p>
              <button className="w-[474px] h-[56px] text-[#545D6A]  bg-[#EBEFF3]">
                Oyiga 456 999 uszdan muddatli to’lov
              </button>
              <div className="flex gap-[14px] mt-[20px]">
                <button className="w-[230px] h-[56px] border  rounded-[6px]  text-[#134E9B]">
                  Savatga qo‘shish
                </button>
                <button className="w-[230px] h-[56px] rounded-[6px] text-white bg-[#134E9B]">
                  Xarid qilish
                </button>
              </div>
              <div>
                <p className="flex items-center gap-[16px] pt-[43px]">
                  {" "}
                  <DeliveryIcon />{" "}
                  <span>Yetkazib berish O’zbekiston bo’ylab </span>{" "}
                </p>
                <p className="flex items-center gap-[16px] py-[20px]">
                  {" "}
                  <ByIcon />{" "}
                  <span>Do’kondi o’zidan olib ketishingiz mumkin </span>
                </p>
                <p className="flex items-center gap-[16px]">
                  {" "}
                  <DataIcon />{" "}
                  <span>
                    Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......{" "}
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[80px]">
            <div className="flex items-center gap-[85px] mb-[45px]">
              <strong className="font-bold text-[18px]">
                Telfon xususiyatlari{" "}
              </strong>
              <strong className="font-bold text-[18px]">
                {" "}
                Mijozlarni fikrlari{" "}
              </strong>
            </div>
            <div className="w-[45%]">
              {variations?.options?.map((item: any) => (
                <div
                  key={singeProduct.id}
                  className="py-[5px] border-b-[2px] text-[#545D6A] text-[18px] border-slate3400 border-dashed flex justify-between"
                >
                  <div className="w-[50%] "> {variations.name}</div>
                  <div className="w-[50%] "> {item?.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Products API="/product-items" title="Oxirgi ko’rgan mahsulotlar" />
    </>
  );
};

export default SinglePage;
