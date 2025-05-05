"use client";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Button from "./Button";
import { ArrowDownIcon, SearchIcon } from "@/assets/icons";
import Input from "./Input";
import { useTranslations } from "next-intl";
import { Context } from "@/context/Context";
import { instance } from "@/hooks/instance";
import debounce from "@/hooks/debounce";
import { HeaderSearchType } from "@/types/HeaderCenterType";
const HeaderForm = () => {
  const t = useTranslations("HeaderCenterContent");
  const { setShowCategory, showCategory } = useContext(Context);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<HeaderSearchType[]>([]);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
    setIsLoading(true);
    setShowSearch(true);
    if (!e.target.value) {
      setIsLoading(false);
      setShowSearch(false);
    }
  }
  function handleSearchClick(name: string) {
    setSearchValue(name);
    setShowSearch(false);
  }
  const searchWatchingValue = debounce(searchValue, 1000);
  useEffect(() => {
    if (searchWatchingValue) {
      instance()
        .get("/categories/search", { params: { name: searchWatchingValue } })
        .then((res) => {
          setSearchResult(res.data);
          setIsLoading(false);
        });
    }
  }, [searchWatchingValue]);
  return (
    <div className="flex items-center gap-[10px] z-5">
      <Button
        onClick={() => setShowCategory(!showCategory)}
        title={t("category")}
        iconPosition="right"
        type="button"
        icon={
          <ArrowDownIcon
            className={`transition-transform duration-300 ${
              showCategory ? "rotate-180" : ""
            }`}
          />
        }
      />
      <div className="sm:w-[518px] w-[300px] relative  ">
        <Input
          value={searchValue}
          onChange={handleSearch}
          extraStyle="w-full"
          type="text"
          placeholder={t("placeholder")}
        />
        <Button
          extraStyle="absolute top-0 bottom-0 right-0 !w-[58px] h-[100%] !p-0"
          iconPosition="right"
          icon={<SearchIcon />}
          type="button"
        />
        <ul
          className={`bg-white ${
            showSearch
              ? `${
                  searchResult.length > 2 ? "h-[400px] overflow-auto" : "h-auto"
                }"  py-[40px]" `
              : "h-0 overflow-hidden"
          } duration-300 absolute flex flex-col shadow w-full `}
        >
          {isLoading
            ? "loading..."
            : showSearch &&
              searchResult.map((item) => (
                <li
                  onClick={() => handleSearchClick(item.name)}
                  className="cursor-pointer pl-[40px] text-[545D6A] py-[17px] border-b-[1px] border-[#B6BABF4D]"
                  key={item.id}
                >
                  {item.name}
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};
export default HeaderForm;
