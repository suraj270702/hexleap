"use client";

import Image, { StaticImageData } from "next/image";
import ticketImg from "../../assets/tickets/Ticket_Mockup 3.png";

interface CollectionsProps{
    title:string,
    img:StaticImageData,
    address:string,
    btnText:string
}

const CollectionCard = ({title,img,address,btnText}:CollectionsProps) => {
  return (
    <div className=" h-full min-w-[200px] lg:w-[257px] lg:h-[625px]  bg-white shadow-lg dark:bg-[#3B3E47]">
      <div>
        <Image src={img} alt="" />
        <div>
          <div className="flex items-center justify-between relative mt-4 lg:mt-0">
            <div className="w-[30px] h-[30px] bg-gradient-to-br from-custom-light-purple to-custom-light-blue    dark:from-custom-gray-900 dark:to-custom-purple-900 rounded-full absolute -left-3 dark:bg-gradient-to-br   overflow-hidden"></div>
            <h1 className=" text-[#A9ACB2] text-[30px] absolute left-8 hidden lg:block">
              --------------
            </h1>
            <h1 className=" text-[#A9ACB2] text-[30px] absolute left-8 lg:hidden">
              ----------
            </h1>
            <div className="w-[30px] h-[30px] bg-gradient-to-br from-custom-light-purple to-custom-light-blue rounded-full absolute -right-3 dark:bg-gradient-to-br dark:from-custom-gray-900 dark:to-custom-purple-900   overflow-hidden"></div>
          </div>
          <div className="mt-5 w-[90%] mx-auto">
            <h1 className="text-[#000000] text-[14px] lg:text-[17px] font-medium text-center dark:text-white">
              {title}
            </h1>
            <div className="flex items-center justify-center">
            <div className="mt-4 flex items-center gap-x-2">
                <span className="text-[10px] md:text-[14px] text-[#000000] dark:text-white">Oct 15</span>
                <div className="border border-black dark:border-white h-[14px] border-l"></div>
                <span className="text-[10px] md:text-[14px] text-[#000000] dark:text-white">SUN</span>
                <div className="border border-black dark:border-white h-[14px] border-l"></div>
                <span className="text-[10px] md:text-[14px] text-[#000000] dark:text-white">4:30 pm</span>

            </div>
            </div>
            <div className="mt-3">
                <p className="text-[10px] md:text-[14px] text-[#525965] text-center dark:text-[#DFDFDF]">
                {address}
                </p>
            </div>
            <div className="mt-1 lg:mt-3">
                <button className="h-[31px] w-full bg-[#1D1D1F] text-center text-white text-[13px]">{btnText}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
