import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const WorkSection = () => {
  const workExperienceData = [
    {
      id: 1,
      title: "PT. Semua Aplikasi Indonesia (Internship)",
      category: "Februari 2024 - Juni 2024",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/150/2025/03/10/WhatsApp-Image-2025-03-10-at-061745-3402171774.jpeg",
      link: "/",
      private: true,
    },
    {
      id: 2,
      title: "Bimbingan Belajar Himalaya (Part Time)",
      category: "August 2023 - Current",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/150/2025/03/10/WhatsApp-Image-2025-03-10-at-061745-3402171774.jpeg",
      link: "/",
      private: true,
    },
    {
      id: 3,
      title: "PT. Semua Aplikasi Indonesia",
      category: "September 2025 - Current",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/150/2025/03/10/WhatsApp-Image-2025-03-10-at-061745-3402171774.jpeg",
      link: "/",
      private: true,
    },
  ];

  return (
    <div className="bg-[#252525] border border-white/10 w-auto m-4 p-8 flex flex-col gap-y-2 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="w-fit py-2 rounded-full text-gray-300 font-bold text-2xl">
          <span>Work Experience</span>
        </div>
        <Button
          className={
            "flex items-center justify-between bg-[#383838] hover:bg-[#484848] hover:cursor-pointer hover:shadow-2xl text-gray-300"
          }
        >
          <span>View All</span>
          <Icon icon={"ic:round-chevron-right"} className=" size-4" />
        </Button>
      </div>
      <div className="w-full grid grid-cols-1 gap-4">
        {workExperienceData.map((item) => (
          <Button
            key={item.id}
            className="bg-[#313131] border-4 border-[#313131] hover:border-[#292929] hover:shadow-gray-500/10 shadow-lg hover:bg-[#313131] h-auto w-full p-3 flex flex-row items-center justify-between gap-4 rounded-lg transition-all duration-300"
          >
            <div className="relative size-20 border-8 border-[#292929] rounded-full shadow">
              <Image
                src={item.image}
                alt={item.title}
                objectFit="cover"
                className="rounded-full"
                fill
              />
            </div>
            <div className="flex-1 text-start space-y-2 text-gray-300">
              <div className="text-xl font-semibold">{item.title}</div>
              <div className="text-sm font-medium flex items-center gap-x-2">
                <Icon icon={"hugeicons:work-history"} />
                {item.category}
              </div>
            </div>
            <div className="relative group">
              <Link
                href={item.link}
                className={`text-gray-300 hover:text-white size-8 border border-gray-300 rounded-full hover:bg-white/10 flex items-center justify-center 
           transition-transform duration-300 ease-in-out hover:scale-105${
             item.private ? "disabled" : ""
           }`}
                aria-disabled={item.private}
                tabIndex={item.private ? -1 : undefined}
              >
                <Icon
                  icon={item.private ? "solar:lock-broken" : "majesticons:open"}
                  className="size-4"
                />
              </Link>
              {item.private && (
                <div
                  className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs 
           px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Private
                </div>
              )}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
