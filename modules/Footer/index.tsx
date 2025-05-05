import {
  AppStoreIcon,
  CommitIcon,
  FacebookIcon,
  GooglePlayIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets/icons";
import Image from "next/image";
import React from "react";
const Footer = () => {
  return (
    <div className="containers">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="w-full md:w-[400px]">
          <div className="mt-[40px]">
            <h2 className="text-[#000000B2] text-[18px] md:text-[20px] font-bold pb-[20px] text-center md:text-left">
              Bizning ijtimoiy tarmoqlarda
            </h2>
            <div className="flex gap-[10px] justify-center md:justify-start flex-wrap">
              <span className="p-3 bg-[#EBEFF3] rounded-[7px]">
                <FacebookIcon />
              </span>
              <span className="p-3 bg-[#EBEFF3] rounded-[7px]">
                <YoutubeIcon />
              </span>
              <span className="p-3 bg-[#EBEFF3] rounded-[7px]">
                <TelegramIcon />
              </span>
              <span className="p-3 bg-[#EBEFF3] rounded-[7px]">
                <TwitterIcon />
              </span>
              <span className="p-3 bg-[#EBEFF3] rounded-[7px]">
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="alt"
                  width={20}
                  height={20}
                />
              </span>
            </div>
          </div>
          <div className="pt-[30px] text-center md:text-left">
            <h2 className="pb-[12px] text-[#000000B2] text-[18px] md:text-[20px] font-bold">
              Mobil ilovani yuklab oling
            </h2>
            <div className="flex flex-col sm:flex-row gap-[15px] items-center md:items-start justify-center md:justify-start mb-[30px]">
              <button className="flex items-center gap-[10px] bg-[#EBEFF3] py-[12px] px-[20px] rounded-[10px]">
                <AppStoreIcon />{" "}
                <span className="text-[16px] font-bold">App Store</span>
              </button>
              <button className="flex items-center gap-[10px] bg-[#EBEFF3] py-[12px] px-[20px] rounded-[10px]">
                <GooglePlayIcon />{" "}
                <span className="text-[16px] font-bold">Google Play</span>
              </button>
            </div>
            <p className="text-[#00000066] text-[12px] font-normal">
              © 2022 Ashyo ro’yxatdan o‘tgan litsenziyalangan brend.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[236px] mt-[30px] md:mt-[60px] text-center md:text-left">
          <h2 className="text-[#000000B2] text-[18px] md:text-[20px] font-bold mb-[18px]">
            Menyu
          </h2>
          <ul className="flex flex-col gap-[12px] text-[#000000B2]">
            <li>
              <a href="">Ashyo haqida</a>
            </li>
            <li>
              <a href="">Foydalanish shartlari</a>
            </li>
            <li>
              <a href="">Maxfiylik va xavfsizlik siyosati</a>
            </li>
            <li>
              <a href="">Qaytarish siyosati</a>
            </li>
            <li>
              <a href="">Biz bilan aloqa</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[350px] mt-[30px] md:mt-[60px]">
          <h2 className="text-[18px] md:text-[20px] font-bold text-center md:text-left">
            Aloqa
          </h2>
          <p className="text-[20px] md:text-[24px] pt-[13px] font-bold text-center md:text-left">
            +998 (71) 123-45-67
          </p>
          <p className="pt-[25px] pb-[15px] text-[14px] text-[#000000B2] text-center md:text-left">
            Savolingiz bormi?
          </p>
          <div className="flex relative w-full justify-center md:justify-start">
            <input
              type="text"
              className="rounded-[6px] w-full md:w-[350px] h-[54px] outline-none pl-[11px] bg-[#EBEFF3]"
              placeholder="O’zingiz qiziqtirgan savollarni bering"
            />
            <span className="absolute right-[10px] top-[17px]">
              <CommitIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
