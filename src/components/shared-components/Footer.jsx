"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-8 px-8 pt-16 py-4 items-center justify-center">
      <h1 className="text-5xl text-gray-100 font-bold">
        Feel Free to Contact Me!
      </h1>
      <p className="text-gray-100 text-md font-medium mx-16 text-center">
        If you’d like to learn more about my professional experience, skills,
        and background, feel free to download my CV. You’re also welcome to
        reach out to me directly if you have any questions, opportunities, or
        would like to connect further.
      </p>
      <div className="flex items-center justify-start gap-4">
        <Link
          href={
            "https://drive.google.com/file/d/1gX1hn0I8qm4r_ysjeDobacsFYlPv6vJY/view?usp=sharing"
          }
          target="_blank"
        >
          <Button
            className={
              "flex items-center justify-between text-gray-100 bg-[#383838] hover:bg-[#484848] ring-1 ring-[#383838] hover:ring-4 hover:cursor-pointer hover:shadow-2xl"
            }
          >
            <Icon
              icon={"ph:read-cv-logo-bold"}
              className="text-gray-100 size-4"
            />
            <div>Download CV</div>
          </Button>
        </Link>

        <Button
          onClick={() => {
            navigator.clipboard.writeText("abimanyuprakoso098@gmail.com");
            toast("Email copied to your clipboard!", {
              icon: <Icon icon="hugeicons:clipboard" fontSize={20} />,
              duration: 1500,
              position: "top-center",
            });
          }}
          className="flex items-center justify-between shadow-xl ring-1 ring-[#383838] hover:ring-4 text-gray-100 bg-transparent hover:bg-transparent hover:ring-[#383838] hover:cursor-pointer"
        >
          <Icon icon="solar:copy-broken" className="text-gray-100 size-4" />
          <div className="transition-all duration-300">Copy Email</div>
        </Button>
      </div>
      <div className="w-full flex flex-col items-stcenterart justify-center">
        <div className="bg-[#252525] shadow-2xl shadow-white/10 border border-white/10 w-full m-4 p-8 flex flex-row items-center justify-between gap-y-2 rounded-lg text-gray-100">
          <div className="w-fit py-2 rounded-full text-gray-100 flex items-center gap-x-2 font-semibold text-2xl">
            <Icon icon={"line-md:circle-twotone"} fontSize={12} />
            <span>Follow Me!</span>
          </div>
          <div className="flex items-center justify-end text-gray-100 gap-x-4">
            <Link
              href={"https://www.linkedin.com/in/abimanyu-prakoso-7a20aa179/"}
              target="_blank"
              className="size-12 ring-4 ring-[#383838] hover:ring-[#212121]  rounded-full bg-[#383838] flex items-center justify-center transition-all duration-200"
            >
              <Icon icon={"line-md:linkedin"} className="text-3xl " />
            </Link>
            <Link
              href={"https://github.com/AkosoDash"}
              target="_blank"
              className="size-12 ring-4 ring-[#383838] hover:ring-[#212121]  rounded-full bg-[#383838] flex items-center justify-center transition-all duration-200"
            >
              <Icon icon={"line-md:github-loop"} className="text-3xl " />
            </Link>
            <Link
              href={"https://www.instagram.com/abimanyu_wkwk/"}
              target="_blank"
              className="size-12 ring-4 ring-[#383838] hover:ring-[#212121]  rounded-full bg-[#383838] flex items-center justify-center transition-all duration-200"
            >
              <Icon icon={"line-md:instagram"} className="text-3xl " />
            </Link>
          </div>
        </div>
        <div className="bg-[#252525] shadow-2xl shadow-white/10 border border-white/10 w-full m-4 px-8 py-4 flex flex-col items-center justify-center rounded-lg text-gray-100">
          <div className="w-fit py-2 rounded-full text-gray-100 flex items-center gap-x-2 font-normal text-sm">
            <Icon icon={"solar:copyright-broken"} fontSize={16} />
            <span>2025 - Created by Abimanyu Prakoso. All right reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
