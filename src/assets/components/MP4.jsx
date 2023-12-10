import React from "react";

function MP4({data}) {
  return (
    <div
      className={`w-4/6 flex justify-between text-center flex-col border-2 border-red-600 bg-red-600 bg-opacity-40
      sm:flex-row sm:h-48 sm:w-full lg:h-96 `}
    >
      <img src={data.picture} alt="" className={`w-full bg-contain	sm:w-1/2`} />
      <div className="flex flex-col items-center justify-evenly w-full">
        <h1 className="  font-bold  md:text-2xl">
          {data.author}
        </h1>
        <h2 className=" text-xs md:text-base lg:mb-20">
          {data.description}
        </h2>

        {data.picture && (
          <div
            className={`flex flex-col w-full justify-center items-center md:flex-row md:justify-evenly`}
          >
            {data.links.map((link) => (
              <a
                className={`border-2 rounded border-red-600 bg-red-600 hover:border-white text-xs m-1 font-bold p-1 duration-300 cursor-pointer
                md:text-sm`}
                key={link.quality}
                href={link.link}
              >
                download {link.quality} quality
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MP4;
