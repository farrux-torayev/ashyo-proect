"use client";
import HeaderForm from "@/components/HeaderForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderCenterActions from "./HeaderCenterActions";
import HeaderPopapCategory from "./HeaderPopapCategoriy";
import "./styles";
const HeaderCenter = () => {
  return (
    <div className="containers !py-[30px] flex flex-col sm:flex-row sm:items-center sm:justify-between  gap-[53px]">
      <Link
        className="flex items-center sm:translate-x-[-6px] sm:mb-0 mb-[10px] justify-center sm:justify-start"
        href="/"
      >
        <Image
          className="w-[48px] h-[48px] scale-[1.5]"
          src="/Logo.svg"
          alt="Logo"
          width={48}
          height={48}
          priority
        />
        <span className="translate-x-[-5px] text-[#134E9B] text-[36px] leading-[100%] font-black">
          Ashyo
        </span>
      </Link>
      <div className="flex flex-col sm:w-full w-[500px] sm:flex-row items-center justify-between gap-[50px] ">
        <HeaderForm />
        <HeaderCenterActions />
        <HeaderPopapCategory />
      </div>
    </div>
  );
};

export default HeaderCenter;
