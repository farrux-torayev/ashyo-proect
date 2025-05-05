"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { getBanners } from "@/service/getBanners";
import { BannersType } from "@/types/BannersType";
import Button from "@/components/Button";
import Image from "next/image";
import { IMG_API } from "@/hooks/getEnv";
const Hero = () => {
  const { data: banners } = getBanners();

  return (
    <div className="bg-[#F3F0F0]">
  <div className="hero containers">
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper mt-5"
    >
      {banners.map((item: BannersType) => (
        <SwiperSlide key={item.id}>
          <div className="relative flex flex-row md:flex-row items-center md:items-start md:justify-between gap-4">
            <div className="w-full md:w-[60%] text-center md:text-left px-4">
              <h2 className="mb-[10px] text-[24px] md:text-[44px] font-black">
                {item.name}
              </h2>
              <p className="text-[#545D6A] mb-[22px] text-[14px] md:text-base">{item.description}</p>
              <Button type="button" title="Batafsil" />
            </div>
            <Image
              className="w-full max-w-[300px] md:max-w-[500px]  h-auto object-contain"
              src={`${IMG_API}/${item.image}`}
              alt="Render Img"
              width={500}
              height={700}
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

  );
};

export default Hero;
