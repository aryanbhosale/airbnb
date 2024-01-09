import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon
} from "@heroicons/react/solid";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";

const Header = ({ placeholder }) => {

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const router = useRouter()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput = () => {
    setSearchInput("")
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    })
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-1 sm:grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      <div className="hidden relative sm:inline-flex items-center h-10  my-auto ">
        <Image
        alt="logo"
        onClick={() => router.push('/')}
          className="cursor-pointer"
          src={"/header-logo.png"}
          width={100}
          height={100}
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>

      <div className="flex hover:bg-gray-100 active:bg-white w-full justify-center items-center border-2 rounded-full py-2 shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500 placeholder:text-xs md:placeholder:text-sm"
          type="text"
          placeholder={placeholder || "Search destinations"}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker ranges={[selectionRange]} minDate={new Date()} rangeColors={["#fd5b61"]} onChange={handleSelect} />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-5" />
            <input value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} min={1} type="number" className="w-12 pl-2 text-lg outline-none text-gray-700" />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-600">Cancel</button>
            <button onClick={search} className="flex-grow text-red-500">Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
