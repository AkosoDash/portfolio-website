import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center fixed top-8 z-50">
      <div className="bg-[#212121] border border-white/10 shadow-xl font-semibold w-[calc(100%-256px)] py-4 px-8 flex flex-row justify-between items-center rounded-lg">
        <div className="flex gap-4 items-center justify-center ">
          <div className="relative group">
            <Link
              href="/"
              className="text-gray-500 hover:text-white size-10 rounded-full hover:bg-white/10 flex items-center justify-center 
               transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <Icon icon="proicons:home" className="size-6" />
            </Link>
            <div
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs 
               px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Home
            </div>
          </div>
          <div className="relative group">
            <Link
              href="/"
              className="text-gray-500 hover:text-white size-10 rounded-full hover:bg-white/10 flex items-center justify-center 
               transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <Icon icon="si:user-line" className="size-6" />
            </Link>
            <div
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs 
               px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Tentangku
            </div>
          </div>
          <div className="relative group">
            <Link
              href="/"
              className="text-gray-500 hover:text-white  size-10 rounded-full hover:bg-white/10 flex items-center justify-center 
               transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <Icon icon="hugeicons:work" className="size-6 " />
            </Link>
            <div
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs 
               px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Projek
            </div>
          </div>
          <div className="relative group">
            <Link
              href="/"
              className="text-gray-500 hover:text-white size-10 rounded-full hover:bg-white/10 flex items-center justify-center 
               transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <Icon icon="hugeicons:activity-04" className="size-6" />
            </Link>
            <div
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs 
               px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Skill
            </div>
          </div>
        </div>
        <Button
          className={
            "flex items-center justify-between bg-[#383838] hover:bg-[#484848] hover:cursor-pointer hover:shadow-2xl"
          }
        >
          <Icon icon={"gg:add"} className="text-white size-4" />
          <div>Rekrut Aku Bang</div>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
