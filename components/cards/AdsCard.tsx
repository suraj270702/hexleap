"use client";
import Image from "next/image";
import adImg from "../../assets/sports_category/unnamed (1) 1.png";

const AdsCard = () => {
  return (
    <div className="w-full h-full md:max-w-[239px] md:max-h-[511px] p-[9px] bg-white shadow-lg dark:bg-[#3B3E47]">
      <div className="h-full md:h-[511px]">
        <div className=" relative w-full bg-[#006555]">
          <Image src={adImg} alt="Advertisement Image" />
          <div className=" absolute top-0 right-0 w-[48px] h-[25px] bg-[#000000]">
            <h1 className="text-[12px] font-bold text-white text-center mt-1">
              Ad
            </h1>
          </div>
        </div>
        <div className="border border-[#006555] w-full h-[275px] ">
          <div className="md:w-[188px] w-full mx-auto">
            <h1 className="text-[#222D3A] text-[16px] md:text-[20px] font-semibold dark:text-white">
              Advertisement title
            </h1>
            <div className="mt-3">
              <p className="text-[12px] md:text-[13px] text-[#525965] dark:text-[#DFDFDF]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia illum, esse facilis aspernatur assumenda et, hic
                consectetur tempore maxime facere quam. Illum ea velit odio
                ullam, at voluptates itaque laboriosam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsCard;
