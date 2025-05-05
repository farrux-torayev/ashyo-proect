import { FacebookIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from '@/assets/icons';
import Button from '@/components/Button';
import { InstagramIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const  ContactsPage = () => {
    return (
        // <div className=''>
        //     <div className='containers'> 
        //         <div className='py-[21px] flex gap-[20px]  text-[#B6BABF]'>
        //        <span className=' text-[14px] font-[400]'>Bosh sahifa  /</span>
        //        <span className=' text-[14px] font-[400]'>Qayta aloqa   /</span>
        //         </div>
        //         <h2 className='text-[32px] font-[700] pb-[16px]'>Qayta aloqa</h2>
        //         <p className='text-[#545D6A]'>Bizning ishimiz haqidagi fikir mulohazalaringiz bilan bo’lishing yoki izohlar maydonida o’zingizni qiziqtirgan  <br /> savolingizni yo’llang</p>
        //         <div className='flex gap-[30px] my-[30px] '>
        //         <div className='flex flex-col'>
        //         <span>Ism</span>
        //         <input className='rounded-[6px] w-[330px]  bg-[#EBEFF3] h-[77px]' type="text" placeholder='' />
        //         </div>
        //         <div className='flex flex-col'>
        //         <span>Familya</span>
        //         <input className='rounded-[6px] w-[330px]  bg-[#EBEFF3] h-[77px]' type="text" placeholder='' />
        //         </div>
        //         </div>
        //         <div className='flex gap-[30px]'>
        //         <div className='flex flex-col '>
        //         <span>Telfon raqam</span>
        //         <input className='rounded-[6px] w-[330px]  bg-[#EBEFF3] h-[77px]' type="text" placeholder='' />
        //         </div>
        //         <div className='flex flex-col '>
        //         <span>Elktronpochta</span>
        //         <input className='rounded-[6px] w-[330px]  bg-[#EBEFF3] h-[77px]' type="text" placeholder='' />
        //         </div>
        //         </div>
        //         <div className='mt-[30px] '>
        //         <p>O’zingizni fikrlangizni qoldiring</p>
        //         <input className=' w-[690px] rounded-[6px]   bg-[#EBEFF3] h-[151px]' type="text" placeholder='' />
        //         </div>
        //         <Button type='button' extraStyle='border w-[690px] h-[56px] mt-[30px] mb-[100px]' title='Yuborish'/>

        //     <div className='bg-white w-[455px] h-[422px] rounded-[6px] absolute z-1 bottom-[-820px] pl-[60px] pt-[60px]'>
        //         <h3 className='pb-[20px] text-[18px] font-bold'>OOO “Ashyo”</h3>
        //         <p className='pb-[20px] '><span className='text-[12px] font-[400]'> Telfon raqam;</span> <span>+998 71 123 45 56</span></p>
        //         <p className='pb-[20px]'><span className='text-[12px] font-[400]'>Elktron pochta;</span> <span>ashyo@gmail.com</span></p>
        //         <p className='pb-[20px] flex flex-col'><span className='pb-[10px] text-[12px] font-[400]'>Manzilimiz;</span> <span className='text-[16px]'>100052, O‘zbekiston Respublikasi, Toshkent shahri, Bodomzor yo‘li 1-tor ko‘chasi, 72
        //         </span></p>
        //         <div className='mb-[60px]'>
        //             <p className='pb-[15px]'>Ijtimoiy tarmoqlarimiz</p>
        //             <div className='flex items-center gap-[20px]'>
        //                 <p className='px-[12px] py-[12px] bg-[#EBEFF3] rounded-[7px]'> <FacebookIcon/></p>
        //                 <p className='px-[12px] py-[15px] bg-[#EBEFF3] rounded-[7px]'> <YoutubeIcon/></p>
        //                 <p className='px-[12px] py-[12px] bg-[#EBEFF3] rounded-[7px]'> <TelegramIcon/></p>
        //                 <p className='px-[12px] py-[14px] bg-[#EBEFF3] rounded-[7px]'> <TwitterIcon/></p>
        //                 <p className='px-[12px] py-[10px] bg-[#EBEFF3] rounded-[7px]'> <InstagramIcon/></p>
        //             </div>
        //         </div>
        //     </div>
        //     </div>
        //     <Image className='w-full h-[500px] relative' src="/assets/icons/contact.svg" alt="alt" width={500} height={300} />

        // </div>
        <div className="">
  <div className="containers">
    <div className="py-[21px] flex flex-wrap gap-[10px] text-[#B6BABF] text-[14px] font-[400]">
      <span>Bosh sahifa /</span>
      <span>Qayta aloqa /</span>
    </div>

    <h2 className="text-[24px] md:text-[32px] font-[700] pb-[16px]">Qayta aloqa</h2>
    <p className="text-[#545D6A]">
      Bizning ishimiz haqidagi fikir mulohazalaringiz bilan bo’lishing yoki izohlar maydonida o’zingizni qiziqtirgan <br className="hidden md:block" />
      savolingizni yo’llang
    </p>

    <div className="my-[30px] flex flex-col gap-[20px]">
      <div className="flex flex-col md:flex-row gap-[30px]">
        <div className="flex flex-col w-full md:w-[330px]">
          <span>Ism</span>
          <input className="rounded-[6px] bg-[#EBEFF3] h-[77px] w-full" type="text" />
        </div>
        <div className="flex flex-col w-full md:w-[330px]">
          <span>Familya</span>
          <input className="rounded-[6px] bg-[#EBEFF3] h-[77px] w-full" type="text" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-[30px]">
        <div className="flex flex-col w-full md:w-[330px]">
          <span>Telfon raqam</span>
          <input className="rounded-[6px] bg-[#EBEFF3] h-[77px] w-full" type="text" />
        </div>
        <div className="flex flex-col w-full md:w-[330px]">
          <span>Elktron pochta</span>
          <input className="rounded-[6px] bg-[#EBEFF3] h-[77px] w-full" type="text" />
        </div>
      </div>

      <div>
        <p>O’zingizni fikringizni qoldiring</p>
        <textarea className="w-full max-w-[690px] rounded-[6px] bg-[#EBEFF3] h-[151px]" />
      </div>

      <Button type="button" extraStyle="border w-full max-w-[690px] h-[56px] mt-[10px] mb-[40px]" title="Yuborish" />
    </div>

    <div className="bg-[#f6fafd] w-full md:w-[455px] rounded-[6px] px-[30px] pt-[40px] pb-[20px] mb-[50px]">
      <h3 className="pb-[20px] text-[18px] font-bold">OOO “Ashyo”</h3>
      <p className="pb-[20px]">
        <span className="text-[12px] font-[400]">Telefon raqam: </span>+998 71 123 45 56
      </p>
      <p className="pb-[20px]">
        <span className="text-[12px] font-[400]">Elektron pochta: </span>ashyo@gmail.com
      </p>
      <p className="pb-[20px]">
        <span className="text-[12px] font-[400]">Manzilimiz:</span> <br />
        <span className="text-[16px]">
          100052, O‘zbekiston Respublikasi, Toshkent shahri, Bodomzor yo‘li 1-tor ko‘chasi, 72
        </span>
      </p>
      <div>
        <p className="pb-[15px]">Ijtimoiy tarmoqlarimiz</p>
        <div className="flex items-center gap-[20px]">
          <p className="p-[12px] bg-[#EBEFF3] rounded-[7px]"><FacebookIcon /></p>
          <p className="p-[12px] bg-[#EBEFF3] rounded-[7px]"><YoutubeIcon /></p>
          <p className="p-[12px] bg-[#EBEFF3] rounded-[7px]"><TelegramIcon /></p>
          <p className="p-[12px] bg-[#EBEFF3] rounded-[7px]"><TwitterIcon /></p>
          <p className="p-[12px] bg-[#EBEFF3] rounded-[7px]"><InstagramIcon /></p>
        </div>
      </div>
    </div>
  </div>
  <Image
    className="w-full h-[500px] relative hidden md:block"
    src="/assets/icons/contact.svg"
    alt="Contact"
    width={500}
    height={300}
  />
</div>

    );
}

export default  ContactsPage;
