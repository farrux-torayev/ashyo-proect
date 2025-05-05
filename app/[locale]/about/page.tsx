import { PechatIcons, SentIcons } from "@/assets/icons";
import Products from "@/components/Products/Products";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="containers">
        <div className="flex flex-wrap gap-[10px] py-[20px] text-[15px] text-[#B6BABF]">
          <Link href="/" className="flex gap-[5px] items-center">
            <span>Bosh sahifa</span> <span>/</span>
          </Link>
          <Link href="/" className="flex gap-[5px] items-center">
            <span>Smartfonlar</span> <span>/</span>
          </Link>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between gap-[20px] md:gap-[36px]">
          <div className="w-full md:w-[30%] pt-[20px] mb-[50px] space-y-4">
            {[
              {
                title: "Ashyo haqida",
                text: "Ashyo 2022 yilda Toshkent shahrida tashkil etylgan.",
              },
              {
                title: "Muddatli to’lov",
                text: "Ashyoda barcha eliktronika maishiy texnikalar uchun qulay onlayn to’lov rejasi",
              },
              {
                title: "To‘lov usullari",
                text: "Siz uchun qulay usulda to’lang do’konda, Cilik, Payme orqali.",
              },
              {
                title: "Yetkazib berish",
                text: "Ashyoda tovarlarni yetkazib berish shartlari..",
              },
              {
                title: "Tavorlarga kafolat",
                text: "Ashyo onlayn do’konining kafolati va qaytarilish haqida hamma narsani bilib oling.",
              },
              {
                title: "Yordam",
                text: "Tushumagan narsalaringiz bo’lsa savollaringizni bering.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#EBEFF3] rounded-[10px] px-6 py-5">
                <p className="text-[18px] font-bold mb-[10px]">{item.title}</p>
                <p className="text-[14px] font-[400]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="w-full md:w-[70%] pt-[10px] md:pt-[20px]">
            <h2 className="text-[24px] md:text-[32px] font-[700] mb-[20px] md:mb-[29px]">
              Ashyo haqida
            </h2>
            <div className="bg-[#6F73EE] border rounded-[10px] text-white flex items-center justify-center text-[48px] md:text-[150px] font-black w-full h-[180px] md:h-[300px] mb-[30px]">
              Ashyo
            </div>
            <div className="text-[16px] md:text-[18px] font-[400] space-y-4">
              <p>
                Ashyo - bozor narhid maishy texnika va electronics dukonlari
                qurilmalari. 2 oydan davomida mijozlarga keng assortimentdagi
                mahsulotlarni, kafolatli va benson hizmatni taklif etib keladi.
              </p>
              <p>
                Ashyo 2022 yilda Toshkent shahrida tashkil etylgan. Bugungi
                kunga qadar jami poytaxtda va viloyatlarda 26 that dukon
                faoliyat ko'rsatmoqda.
              </p>
              <p>
                Siz tovarlarni har kanday kulay usulda sotib olishingiz mumkin:
                tarmoq dukonlarida yoki website. Maishy uchun texnikasi onlayn
                b'lib t'lov rezhashi mavjud. Ruyhatdan utish uchun zarur bulgan
                huzhzhat - bu pasport.
              </p>
              <p>
                Yuridik shahslar uchun pul o'tkazish yo'li bilan, eng muximi -
                qo'shimcha to'lovlarsiz sotib olish mumkin.
              </p>
              <div className="flex  gap-[20px]">
                <PechatIcons /> <SentIcons />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Products API="/product-items" title="Oxirgi ko’rgan mahsulotlar" />
    </>
  );
}
