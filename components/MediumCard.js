import Image from "next/image"

const Medium = ({ img, location, distance, dates }) => {
  return (
    <div className="flex flex-col m-2 mt-5 cursor-pointer sm:p-3 rounded-xl hover:scale-105 transition transform duration-200 ease-out">
      <div className="justify-center items-center relative h-64 w-64 md:h-64 md:w-64 lg:h-64 lg:w-64 xl:h-72 xl:w-72 2xl:h-80 2xl:w-80">
        <Image className="rounded-2xl" src={img} fill />
      </div>
      <div className="justify-start">
        <h2 className="font-semibold">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
        <h3 className="text-gray-500">{dates}</h3>
      </div>
    </div>
  )
}

export default Medium