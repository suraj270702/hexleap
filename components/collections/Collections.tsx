"use client";

import CollectionCard from "./CollectionCard";
import leftArrow from "../../assets/tickets/Vector (4).png";
import rightArrow from "../../assets/tickets/Vector (5).png";

import Image, { StaticImageData } from "next/image";
import ticketImg from '../../assets/tickets/Ticket_Mockup 3.png'
import ticket1Img from '../../assets/tickets/unnamed 1 (1).png'


interface CollectionsProps{
    title:string,
    img:StaticImageData,
    address:string,
    btnText:string
}

const Collections = () => {
    const ticketsData:CollectionsProps[]=[
        {
            title:"Las Vegas Aviators",
            img:ticketImg,
            address:"Las Vegas Ballpark, Las Vegas, Nevada",
            btnText:"Take Flight Collection"
        },
        {
            title:"Sacramento River Cats",
            img:ticket1Img,
            address:"Sutter Health Park, Sacramento, California",
            btnText:"Orange Collection"
        },
        {
            title:"Las Vegas Aviators",
            img:ticketImg,
            address:"Las Vegas Ballpark, Las Vegas, Nevada",
            btnText:"Take Flight Collection"
        }
    ]
  return (
    <div className="mt-10 md:mt-44">
      <div className="w-[96%] lg:w-[90%] mx-auto bg-gradient-to-br from-custom-light-purple to-custom-light-blue dark:bg-gradient-to-br dark:from-custom-gray-900 dark:to-custom-purple-900">
        <div className="w-full lg:w-[75%] mx-auto">
          <h1 className="text-[#000000] text-[30px] md:text-[50px] font-bold text-center dark:text-white">
            Collection Spotlight
          </h1>
          <p className="text-[12px] md:text-[14px] text-center text-[#000000] dark:text-white">
            Discover extraordinary moments with our Spotlight Collection meta
            tickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
        </div>
        <div className="w-full lg:w-[85%] mx-auto mt-10 flex items-center justify-between">
          <div className="w-[37px] h-[49px] border border-[#2C9CF0] flex items-center justify-center cursor-pointer">
            <Image src={leftArrow} alt="Left Arrow" />
          </div>
          <div className="w-full lg:w-[75%] mx-auto flex items-center gap-x-5 md:justify-between overflow-x-auto custom">
            {
                ticketsData.map((item,i)=>(
                    <CollectionCard title={item.title} img={item.img} address={item.address} btnText={item.btnText} key={i} />
                ))
            }
          </div>
          <div className="w-[37px] h-[49px] border border-[#2C9CF0] flex items-center justify-center cursor-pointer">
            <Image src={rightArrow} alt="Left Arrow" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
