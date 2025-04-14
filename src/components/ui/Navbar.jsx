import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white font-semibold w-full py-6 px-7 flex flex-row justify-between items-center absolute top-0">
      <div className="text-2xl">Logo</div>
      <div className="flex gap-6">
        <Link href="/" className="text-gray-600 hover:text-black">
          About
        </Link>
        <Link href="/" className="text-gray-600 hover:text-black">
          Portfolio
        </Link>
        <Link href="/" className="text-gray-600 hover:text-black">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
