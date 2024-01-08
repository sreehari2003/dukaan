type Icons = {
  name: string;
  icon: JSX.Element;
};

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
    icon: <LuClipboardList />,
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

export const Sidebar = () => {
  return (
    <nav className="bg-primary w-56 min-h-screen p-4">
      <div className="flex">
        <div className="w-10 h-10 bg-white rounded-md"></div>
        <div className="flex flex-col ml-4 items-start justify-center text-white">
          <span className="text-[15px]">Sreehari</span>
          <span className="text-[13px] font-normal leading-4 underline hover:cursor-pointer">
            visit store
          </span>
        </div>

        <RiArrowDropDownLine
          className="text-white text-2xl hover:cursor-pointer"
          size="40"
        />
      </div>
      <section className="flex flex-col justify-between h-[450px]  mt-6">
        {SIDEBAR.map((el) => (
          <div className="px-4 py-2 flex gap-1 hover:cursor-pointer font-medium">
            <span className="text-white text-sm self-center mr-3">
              {el.icon}
            </span>
            <span className="text-white text-sm">{el.name}</span>
          </div>
        ))}
      </section>
    </nav>
  );
};
