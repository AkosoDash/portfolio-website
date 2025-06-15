import { Icon } from "@iconify/react";

const HeaderSection = () => {
  return (
    <div className="w-full px-8 py-4 flex flex-col">
      <div className="w-full flex flex-col gap-8">
        <div className="w-fit py-2 rounded-full text-gray-100/50 flex items-center gap-x-2 font-semibold text-2xl">
          <Icon icon={"line-md:circle-twotone"} fontSize={16} />
          <span>About Me</span>
        </div>

        <div className="flex flex-col gap-y-8 justify-start items-start">
          <div className="w-full ">
            <h1 className="text-5xl text-gray-100 font-bold mb-4">
              It's me Abimanyu
            </h1>
            <p className="text-gray-100 text-md font-medium text-justify">
              I'm a frontend developer based in Bali, Indonesia, with experience
              building responsive and interactive web interfaces using modern
              tools like Next.js, React, and Tailwind CSS. Though I have less
              than a year of professional experience, I've worked on some
              projects that sharpened my skills in creating clean, scalable, and
              user-focused web applications. I'm passionate about turning
              complex ideas into smooth and easy digital experiences — and I'm
              now ready to bring that passion to a team where I can grow and
              contribute even more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
