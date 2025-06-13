"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/",
    icon: "proicons:home",
    tooltip: "Home",
  },
  {
    href: "/about-me",
    icon: "si:user-line",
    tooltip: "About Me",
  },
  {
    href: "/work",
    icon: "hugeicons:work",
    tooltip: "Work",
  },
  {
    href: "/project",
    icon: "eos-icons:project-outlined",
    tooltip: "Project",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center fixed top-8 z-50">
      <div className="bg-[#212121] border border-white/10 shadow-xl font-semibold w-[calc(100%-256px)] py-4 px-8 flex justify-between items-center rounded-lg">
        <div className="flex gap-4 items-center justify-center">
          {navItems.map(({ href, icon, tooltip }) => (
            <div key={href} className="relative group">
              <Link
                href={href}
                className={`text-gray-100 hover:text-white size-10 rounded-full hover:bg-white/10 flex items-center justify-center 
                transition-transform duration-300 ease-in-out hover:scale-110 ${
                  href === pathname &&
                  "bg-white/5 ring-2 ring-gray-100 shadow-2xl shadow-white"
                }`}
              >
                <Icon icon={icon} className="size-6" />
              </Link>
              <div
                className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs 
                px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {tooltip}
              </div>
            </div>
          ))}
        </div>

        <Link
          href="https://drive.google.com/file/d/1gX1hn0I8qm4r_ysjeDobacsFYlPv6vJY/view?usp=sharing"
          target="_blank"
        >
          <Button className="flex items-center gap-2 bg-[#383838] hover:bg-[#484848] hover:cursor-pointer hover:shadow-2xl">
            <Icon icon="gg:add" className="text-white size-4" />
            <span>Rekrut Aku Bang</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
