import Image from "next/image";

const HeadserSection = () => {
  return (
    <div className="w-full min-h-screen bg-gray-800 flex items-center justify-between px-14 ">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl text-white font-bold">Hello, I'm John Doe</h1>
        <p className="text-gray-300 text-lg">
          I am a web developer with a passion for creating beautiful and
          functional websites.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Contact Me
        </button>
      </div>
      <Image
        src="file.svg"
        alt="Image"
        width={200}
        height={200}
        className="rounded-full"
      />
    </div>
  );
};

export default HeadserSection;
