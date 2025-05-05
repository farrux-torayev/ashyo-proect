import { CompareIcon, LikeIcon, ProfileIcon, ShopIcon } from "@/assets/icons";
import HeaderRight from "@/components/HeaderRight";
import { HeaderActionType } from "@/types/HeaderCenterType";
import React from "react";
const HeaderCenterRight = () => {
  const actionList = [
    {
      id: 1,
      icon: <CompareIcon />,
      actionCount: 2,
    },
    {
      id: 2,
      icon: <LikeIcon />,
      actionCount: 11,
    },
    {
      id: 3,
      icon: <ShopIcon />,
      actionCount: 7,
    },
    {
      id: 4,
      icon: <ProfileIcon />,
      actionCount: 0,
    },
  ];
  return (
    <div className="flex gap-[15px] cursor-pointer">
      {actionList.map((item: HeaderActionType) => (
        <HeaderRight
          key={item.id}
          actionCount={item.actionCount}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default HeaderCenterRight;
