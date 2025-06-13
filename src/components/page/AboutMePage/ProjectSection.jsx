import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = () => {
  const landingPageData = [
    {
      id: 1,
      title: "Landingpage Nonton+",
      category: "Hospitality, Hotel, Business",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/150/2025/03/10/WhatsApp-Image-2025-03-10-at-061745-3402171774.jpeg",
      link: "/",
      private: true,
    },
    {
      id: 2,
      title: "IPTV System - Nonton+ Website",
      category: "Hospitality, Reservation",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
      link: "https://nonton.id",
      private: true,
    },
    {
      id: 3,
      title: "Jadi Juara Dashboard",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=600&q=80",
      link: "https://nonton.id",
      private: true,
    },

    {
      id: 4,
      title: "Jadi Juara Application",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1540292618247-e7fc8c43c709?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://play.google.com/store/apps/details?id=com.himalaya_application.id&pcampaignid=web_share",
      private: false,
    },
  ];

  return (
    <div className="bg-[#252525] shadow-2xl shadow-white/10 border border-white/10 w-auto m-4 p-8 flex flex-col gap-y-2 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="w-fit py-2 rounded-full text-gray-100 font-bold text-2xl">
          <span>Project</span>
        </div>
        <Button
          className={
            "flex items-center justify-between bg-[#383838] hover:bg-[#484848] hover:cursor-pointer hover:shadow-2xl text-gray-100"
          }
        >
          <span>View All</span>
          <Icon icon={"ic:round-chevron-right"} className=" size-4" />
        </Button>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        {landingPageData.map((item) => (
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
            <div className="flex-1 text-start space-y-2 text-gray-100">
              <div className="text-xl font-semibold">{item.title}</div>
              <div className="text-md font-normal">{item.category}</div>
            </div>
            <div className="relative group">
              <Link
                href={item.link}
                className={`text-gray-100 hover:text-white size-8 border border-gray-300 rounded-full hover:bg-white/10 flex items-center justify-center 
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
              <div
                className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs 
           px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {item.private ? "Private" : item.link}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
