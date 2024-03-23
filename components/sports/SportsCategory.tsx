"use client";

import AdsCard from "../cards/AdsCard";
import SportsCard from "./SportsCard";
import productImg from "../../assets/sports_category/Mask group.png";
import product1Img from "../../assets/sports_category/Mask group (1).png";
import product2Img from "../../assets/sports_category/Mask group (2).png";
import product3Img from "../../assets/sports_category/Mask group (3).png";
import { StaticImageData } from "next/image";
import { ModeToggle } from "../theme-toggle";

interface SportsDataProps {
  title: string;
  img: StaticImageData;
  events: number;
  sports: string;
}

const SportsCategory = () => {
  const productsData: SportsDataProps[] = [
    {
      title: "Sacramento River Cats",
      img: productImg,
      events: 48,
      sports: "Baseball",
    },
    {
      title: "Las Vegas Aviators",
      img: product1Img,
      events: 28,
      sports: "Baseball",
    },
    {
      title: "Sacramento River Cats",
      img: product2Img,
      events: 15,
      sports: "Ice Hockey",
    },
    {
      title: "Las Vegas Aviators",
      img: product1Img,
      events: 28,
      sports: "Baseball",
    },
  ];
  return (
    <div className="w-[96%] lg:w-[90%] mx-auto">
      <div className="flex items-center gap-x-5">
      <h1 className="text-[24px] text-[#000000] font-bold dark:text-white ">Sports</h1>
      <ModeToggle />
      </div>
      <div className="w-[80px] bg-[#738FFF] mt-2 h-[4px]"></div>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-5  lg:flex lg:items-center lg:justify-between lg:flex-wrap">
        {productsData.map((item, i) => (
          <SportsCard
            title={item.title}
            img={item.img}
            events={item.events}
            sports={item.sports}
            key={i}
          />
        ))}
        <AdsCard />
      </div>
      <div className="mt-10 md:mt-20 flex items-center justify-center">
        <button className="w-[124px] h-[46px] text-white bg-[#2C9CF0]">show more</button>
      </div>
    </div>
  );
};

export default SportsCategory;
