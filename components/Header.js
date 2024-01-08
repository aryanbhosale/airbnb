import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-1 sm:grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      <div className="hidden relative sm:inline-flex items-center h-10  my-auto ">
        <Image
          className="cursor-pointer"
          src={"/header-logo.png"}
          width={100}
          height={100}
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>

      <div className="flex hover:bg-gray-100 active:bg-white w-full justify-center items-center border-2 rounded-full py-2 shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
          type="text"
          placeholder="Search destinations"
        />
        <SearchIcon className="inline-flex h-8 bg-red-400 hover:bg-red-500 text-white rounded-full p-2 cursor-pointer mx-2" />
      </div>

      <div className="hidden sm:flex items-center space-x-5 justify-end">
        <p className="hidden justify-center items-center md:inline text-gray-800 text-sm font-medium hover:bg-gray-100 py-1 hover:scale-95 hover:text-purple-900 transition transform duration-150 ease-out rounded-full px-2 cursor-pointer">
          Airbnb your home
        </p>
        <GlobeAltIcon className="h-5 text-gray-800 font-thin hover:bg-gray-100 hover:scale-90 hover:text-purple-900 transition transform duration-150 ease-out rounded-full cursor-pointer" />
        <div className="flex items-center space-x-4 border-2 p-2 hover:scale-90 transition transform duration-150 ease-out rounded-full hover:shadow-lg cursor-pointer">
          <MenuIcon className="h-5 text-gray-800" />
          <UserCircleIcon className="h-8 text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
