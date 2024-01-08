const Banner = () => {
  return (
    <div className="sticky top-0 z-50 grid grid-cols-1 bg-gray-100 shadow-md p-3 md:px-10 ">
      <div className="flex w-full justify-center items-center py-2">
        <button className="inline justify-center items-center hover:text-purple-900 text-black text-xs sm:text-sm md:text-lg font-semibold underline py-1 rounded-full px-2 cursor-pointer">
          Learn about Guest Favourites, the most loved homes on Airbnb
        </button>
      </div>
    </div>
  );
};

export default Banner;
