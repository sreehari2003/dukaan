type Icons = {
  name: string;
  icon: JSX.Element;
};
const Project = () => <img src="project.svg" className="w-4" />;

const SIDEBAR: Array<Icons> = [
  {
    name: "Home",
    icon: <GoHome />,
  },
  {
    name: "Orders",
    icon: <LuClipboardList />,
  },
  {
    name: "Products",
    icon: <Project />,
  },
  {
    name: "Delivery",
    icon: <CiDeliveryTruck />,
  },
  {
    name: "Marketing",
    icon: <PiSpeakerHighLight />,
  },
  {
    name: "Analytics",
    icon: <TbBrandGoogleAnalytics />,
  },
  {
    name: "Payments",
    icon: <MdPayments />,
  },
  {
    name: "Tools",
    icon: <BsCursor />,
  },
  {
    name: "Discount",
    icon: <CiDiscount1 />,
  },
  {
    name: "Audiance",
    icon: <TbUsers />,
  },
  {
    name: "Appearence",
    icon: <IoColorPaletteOutline />,
  },
  {
    name: "Plugins",
    icon: <AiOutlineThunderbolt />,
  },
];

import { RiArrowDropDownLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiSpeakerHighLight } from "react-icons/pi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { BsCursor } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { IoColorPaletteOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiWallet } from "react-icons/ci";

export const Sidebar = () => {
  return (
    <nav className="bg-primary w-56 min-h-screen py-4 px-[10px]  justify-between flex-col hidden md:flex">
      <div className="flex justify-between flex-col w-52 px-4 py-2">
        <div className="flex justify-between">
          <div className="flex">
            <img src="image.png" alt="" />
            <div className="flex flex-col ml-4 items-start justify-center text-white">
              <span className="text-[15px] font-medium">Nishyan</span>
              <span className="text-xs font-medium underline hover:cursor-pointer opacity-[0.8]">
                visit store
              </span>
            </div>
          </div>

          <RiArrowDropDownLine
            className="text-white text-2xl hover:cursor-pointer"
            size="30"
          />
        </div>

        <section className="flex flex-col  mt-6  justify-between">
          {SIDEBAR.map((el) => (
            <div className="flex hover:cursor-pointer hover:bg-[#363C51] hover:rounded-md py-2 px-2">
              <span className="text-white/100 text-md self-center font-normal opacity-[0.8]">
                {el.icon}
              </span>
              <span className="ml-2 text-white/100 text-md font-normal opacity-[0.8]">
                {el.name}
              </span>
            </div>
          ))}
        </section>
      </div>
      <section className="bg-[#353C53] flex justify-around rounded-md p-2">
        <div className="bg-[#ffffff1a] p-2 rounded-md flex items-center justify-center">
          <CiWallet size={30} className="self-center text-white" />
        </div>
        <div className="flex flex-col">
          <span className="font-normal text-white/100 text-[13px] leading-4 opacity-[0.8]">
            Available credits
          </span>
          <span className="text-white">222.10</span>
        </div>
      </section>
    </nav>
  );
};
