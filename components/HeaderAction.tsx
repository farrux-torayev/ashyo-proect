import { HeaderActionType } from "@/types/HeaderCenterType";
import React, { FC } from "react";

const HeaderAction: FC<HeaderActionType> = ({ id, icon, actionCount,onClick }) => {
  return (
    <>
      <div onClick={onClick} className="hidden  relative  w-[50px] h-[50px] bg-[#EBEFF3] md:flex items-center justify-center rounded-[6px] ">
        {icon}
        {actionCount != 0 && (
          <span className="absolute flex items-center justify-center right-[-10px] top-[-10px] w-[20px] h-[20px] rounded-[50%] bg-[red] text-[white] font-bold text-[12px]">
            {actionCount}
          </span>
        )}
      </div>
    </>
  );
};

export default HeaderAction;
