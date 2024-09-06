import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className=" w-full h-[120px] flex-row px-[16px] flex flex-row bg-lime-100/50 items-center  justify-end px-[48px]">
      <TopMenuItem title="Booking" pageRef="/booking"></TopMenuItem>
      <Image
        src={"/img/logo_lime.png"}
        alt="logo"
        className="h-[100px] w-[100px] relative"
        width={100}
        height={100}
      />
    </div>
  );
}
