import Collections from "@/components/collections/Collections";
import SportsCategory from "@/components/sports/SportsCategory";
import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-[#F7F7F8] dark:bg-[#292B32]">
    <SportsCategory />
    <Collections />
   </div>
  );
}
