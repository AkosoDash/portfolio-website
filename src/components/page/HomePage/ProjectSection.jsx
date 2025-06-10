import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <div className="bg-[#252525] border border-white/10 w-auto m-4 p-8 flex flex-col gap-y-2 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="w-fit py-2 rounded-full text-gray-300 font-semibold text-2xl">
          <span>Project</span>
        </div>
        <Button
          className={
            "flex items-center justify-between bg-[#383838] hover:bg-[#484848] hover:cursor-pointer hover:shadow-2xl text-gray-300"
          }
        >
          <span>View All</span>
          <Icon icon={"majesticons:open"} className=" size-4" />
        </Button>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Button className="bg-[#313131] border-4 border-[#313131] hover:shadow-white/25 shadow-sm hover:bg-[#313131] h-auto w-full p-2 flex flex-row items-center justify-between gap-4 rounded-lg">
          <div className="relative size-20 border-8 border-[#292929] rounded-full shadow">
            <Image
              src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/150/2025/03/10/WhatsApp-Image-2025-03-10-at-061745-3402171774.jpeg"
              alt="Image"
              objectFit="cover"
              className="rounded-full"
              fill
            />
          </div>
          <div className="flex-1 text-start space-y-2 text-gray-300">
            <div className="text-xl font-bold">Landingpage Nonton+</div>
            <div className="text-md font-normal">
              Hospitality, Hotel, Business
            </div>
          </div>
          <Icon
            icon={"ic:round-chevron-right"}
            className="text-white/10 size-10"
          />
        </Button>
      </div>
    </div>
  );
};

export default ProjectSection;
