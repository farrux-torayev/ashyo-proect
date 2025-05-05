
import Image from 'next/image';
import React from 'react';

const Musics = () => {
    return (
        <div className="containers">
  <div className="flex flex-row md:flex-row bg-[#282828] md:h-[420px] mb-[150px] mt-[50px] rounded-[10px] p-4 md:p-0">
    <div className="flex justify-center md:pl-[60px]">
      <Image
        src="/assets/icons/music.svg"
        alt="alt"
        width={518}
        height={493}
        className="hidden md:block w-[518px] h-[493px] cursor-pointer"
      />
      <Image
        src="/assets/icons/music.svg"
        alt="alt"
        width={188}
        height={178}
        className="md:hidden block w-[188px] h-[178px] cursor-pointer"
      />
    </div>
    <div className="md:pl-[67px] pt-6 md:pt-[97px] flex flex-col gap-[22px] items-center md:items-start text-center md:text-left">
      <h2 className="text-[20px] md:text-[32px] font-bold max-w-[90%] md:max-w-[438px] text-white">
        Musiqa zavqini his qilish uchun ko'p mablag' sarflash shart emas!
      </h2>
      <button className="h-[48px] md:h-[54px] w-[140px] md:w-[160px] border bg-white rounded-[6px] text-black">
        Batafsil
      </button>
    </div>
  </div>
</div>

    );
}

export default Musics;
