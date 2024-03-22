"use client";
import Image, { StaticImageData } from "next/image";
import productImg1 from "../../assets/sports_category/Mask group.png";
interface SportsDataProps {
    title: string;
    img: StaticImageData;
    events: number;
    sports: string;
  }
const SportsCard = ({title,img,events,sports}:SportsDataProps) => {
  return (
    <div className="w-full h-full md:w-[239px] md:h-[511px]  p-[9px] bg-white dark:bg-[#3B3E47]  shadow-lg">
      <div>
        <Image src={img} alt="product image 1" />
        <div className="mt-2">
          <h1 className="text-[14px] md:text-[17px] font-medium text-[#000000] dark:text-white">
            {title}
          </h1>

          <div className="mt-2 bg-[#F7F7F8] dark:bg-[#292B32] py-2 pl-2">
            <div className="flex flex-row gap-x-5">
              <div className="flex flex-col gap-y-3">
                <h1 className="text-[#525965] text-[12px] dark:text-[#DFDFDF]">Total Events </h1>
                <h1 className="text-[#000000] text-[12px] md:text-[14px] font-medium dark:text-white">{events} Events </h1>
              </div>
              <div className="flex flex-col gap-y-3">
                <h1 className="text-[#525965] text-[12px] dark:text-[#DFDFDF]">Sports</h1>
                <h1 className="text-[#000000] text-[12px] md:text-[14px] font-medium dark:text-white">{sports}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCard;
