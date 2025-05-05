"use client";
import { LocationIcon } from "@/assets/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HeaderTopStyle } from "./styles";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { getCookie } from "cookies-next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const HeaderTop = () => {
  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations("HeaderTopContent");
  const [lang, setLang] = useState<"uz" | "ru" | "en" | any>(
    getCookie("NEXT_LOCALE") || "uz"
  );
  function changeLang(value: string) {
    setLang(value);
    router.push(pathname, { locale: value });
  }
  useEffect(() => {
    const locale = getCookie("NEXT_LOCALE");
    if (locale === "uz" || "ru" || locale === "en") {
      setLang(locale);
    }
  }, []);
  return (
    <HeaderTopStyle>
      <div className="hidden lg:flex containers header-top justify-between items-center">
        <nav className="flex gap-6 items-center">
          <Link href={"/"} className="flex items-center gap-1">
            <LocationIcon />
            <span>{t("tashkent")}</span>
          </Link>
          <Link href="/about">{t("about-us")}</Link>
          <Link href={"/product"}>{t("products")}</Link>
          <Link href={"/contact"}>{t("contacts")}</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href={"tel:+998711234567"}>+998 (71) 123-45-67</Link>
          <Select onValueChange={changeLang} defaultValue={lang}>
            <SelectTrigger className="w-[65px] border-none shadow-none placeholder:text-[15px] cursor-pointer text-[#545D6A] ">
              <SelectValue placeholder="Uz" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="bg-white border border-gray-200 shadow-lg cursor-pointer rounded-md">
                <SelectItem
                  className="px-3 py-2 text-sm hover:bg-blue-100"
                  value="uz"
                >
                  Uz
                </SelectItem>
                <SelectItem
                  className="px-3 py-2 text-sm hover:bg-blue-100"
                  value="ru"
                >
                  Ru
                </SelectItem>
                <SelectItem
                  className="px-3 py-2 text-sm hover:bg-blue-100"
                  value="en"
                >
                  En
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </HeaderTopStyle>
  );
};

export default HeaderTop;
