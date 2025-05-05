// "use client";
// import { LocationIcon } from "@/assets/icons";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { HeaderTopStyle } from "./styles";
// import { useTranslations, useLocale  } from "next-intl";
// import { usePathname, useRouter } from "@/i18n/navigation";
// import { getCookie } from "cookies-next";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { HeaderTopListType } from "@/types/HeaderType";
// const HeaderTop = () => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const t = useTranslations();
//   const locale = useLocale() as 'en' | 'uz' | 'ru' 
//   const [lang, setLang] = useState<"uz" | "ru" | "en" | any>(
//     getCookie("NEXT_LOCALE") || "uz"
//   );
//   function changeLang(value: string) {
//     setLang(value);
//     router.push(pathname, { locale: value });
//   }
//   useEffect(() => {
//     const locale = getCookie("NEXT_LOCALE");
//     if (locale === "uz" || "ru" || locale === "en") {
//       setLang(locale);
//     }
//   }, []);
//   const pathMap = {
//     about: {
//       en: '/about',
//       uz: '/haqida',
//       ru: '/o-nas',
//     },
//     product: {
//       en: '/product',
//       uz: '/mahsulotlar',
//       ru: '/produkty',
//     },
//     contact: {
//       en: '/contact',
//       uz: '/boglanish',
//       ru: '/kontakty',
//     },
//   }
 
//   const list = [
//     {
//       id: 1,
//       title: "Tashkent",
//       path: "/",
//       icon: <LocationIcon />,
//     },
//     {
//       id: 2,
//       title: t('About Us'),
//       path: pathMap.about[locale], 
//       icon: null,
//     },
//     {
//       id: 3,
//       title: "Products",
//       path: "/product",
//       icon: null,
//     },
//     {
//       id: 4,
//       title: "Contacts",
//       path: "/contact",
//       icon: null,
//     },
//   ];
//   return (
//     <HeaderTopStyle>
//       <div className="containers header-top">
//         <div className="bg-[#EBEFF3] hidden sm:block py-[11px]">
//           <div className="flex items-center gap-[620px]">
//             <div className="flex items-center gap-[28px] ">
//               {list.map((item: HeaderTopListType) => (
//                 <Link
//                   className={`flex items-center text-[14px] text-[#545D6A] leading-[16.41px] ${
//                     item.icon && "gap-[11px]"
//                   }`}
//                   key={item.id}
//                   href={item.path}
//                 >
//                   {item.icon && item.icon}
//                   <span>{item.title}</span>
//                 </Link>
//               ))}
//             </div>
//             <div className="flex items-center  gap-[25px]">
//               <Link
//                 className="text-[14px] font-semibold leading-[18.2px] text-[#545D6A]"
//                 href={"tel:+998711234567"}
//               >
//                 +998 (71) 123-45-67
//               </Link>
//               <div>
//                 <Select onValueChange={changeLang} defaultValue={lang}>
//                   <SelectTrigger className="w-[65px] border-none shadow-none placeholder:text-[15px] text-[#545D6A] ">
//                     <SelectValue placeholder="Uz" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup className="bg-white border border-gray-200 shadow-lg rounded-md">
//                       <SelectItem
//                         className="px-3 py-2 text-sm hover:bg-blue-100 cursor-pointer"
//                         value="uz"
//                       >
//                         Uz
//                       </SelectItem>
//                       <SelectItem
//                         className="px-3 py-2 text-sm hover:bg-blue-100 cursor-pointer"
//                         value="ru"
//                       >
//                         Ru
//                       </SelectItem>
//                       <SelectItem
//                         className="px-3 py-2 text-sm hover:bg-blue-100 cursor-pointer"
//                         value="en"
//                       >
//                         En
//                       </SelectItem>
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </HeaderTopStyle>
//   );
// };

// export default HeaderTop;

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
      <div className="containers header-top">
        <nav>
          <Link href={"/"}>
            <LocationIcon />
            <span>{t("tashkent")}</span>
          </Link>
          <Link href="/about">{t("about-us")}</Link>
          <Link href={"/product"}>{t("products")}</Link>
          <Link href={"/contact"}>{t("contacts")}</Link>
        </nav>
        <div>
          <Link href={"tel:+998711234567"}>+998 (71) 123-45-67</Link>
          <Select onValueChange={changeLang} defaultValue={lang}>
            <SelectTrigger className="w-[65px] border-none shadow-none placeholder:text-[15px] cursor-pointer text-[#545D6A] ">
              <SelectValue placeholder="Uz" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="bg-white border border-gray-200 shadow-lg cursor-pointer rounded-md">
                <SelectItem
                  className="px-3 py-2 text-sm hover:bg-blue-100 cursor-pointer"
                  value="uz"
                >
                  Uz
                </SelectItem>
                <SelectItem
                  className="px-3 py-2 text-sm hover:bg-blue-100 cursor-pointer"
                  value="ru"
                >
                  Ru
                </SelectItem>
                <SelectItem
                  className="px-3 py-2 text-sm hover:bg-blue-100 cursor-pointer"
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
