import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="w-full px-8 py-16 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="w-1/2 flex flex-col gap-8">
          <div className="w-fit py-2 rounded-full text-gray-100 flex items-center gap-x-2 font-semibold text-2xl">
            <Icon icon={"material-symbols:circle"} fontSize={16} />
            <span>Frontend Developer</span>
          </div>
          <h1 className="text-5xl text-gray-100 font-bold">Abimanyu Prakoso</h1>
          <p className="text-gray-100 text-md font-medium">
            I'm a Frontend Developer with experience in building modern,
            responsive, and user-friendly websites. In team collaborations, I
            always trying to understand user needs and communicate proactively
            to deliver relevant solutions and innovations.
          </p>
          <div className="flex items-center justify-start gap-2">
            <Button
              className={
                "flex items-center justify-between text-gray-300 bg-[#383838] hover:bg-[#484848] hover:cursor-pointer hover:shadow-2xl"
              }
            >
              <Icon icon={"gg:add"} className="text-gray-300 size-4" />
              <div>Rekrut Aku Bang</div>
            </Button>
            <Button
              className={
                "flex items-center justify-between text-gray-300 bg-[#383838] hover:bg-[#484848] hover:cursor-pointer hover:shadow-2xl"
              }
            >
              <Icon icon={"gg:add"} className="text-gray-300 size-4" />
              <div>Rekrut Aku Bang</div>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative size-96  rounded-full">
            <Image
              src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/150/2025/03/10/WhatsApp-Image-2025-03-10-at-061745-3402171774.jpeg"
              alt="Image"
              objectFit="cover"
              className="rounded-full p-4 shadow-white/25 shadow-sm"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
