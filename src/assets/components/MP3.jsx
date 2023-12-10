import React from "react";

function MP3({ data, link }) {
  return (
    <div
      className={`w-4/6 h-full flex justify-between items-center flex-col text-center border-2 border-red-600 bg-red-600 bg-opacity-40
      sm:flex-row sm:h-48 sm:w-full lg:h-96  `}
    >
      <div className="w-full h-full flex items-center justify-center sm:w-1/2">
        <iframe
        className="w-full h-full "
          src={`https://www.youtube.com/embed/${link.slice(32, 43)}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className=" w-full h-full flex flex-col items-center justify-center sm:w-1/2 sm:justify-evenly">
        <h2 className="  text-xs text-center w-full md:text-lg lg:text-xl">
          {data.title}
        </h2>
        <h2 className="mb-7 hidden text-xs text-center w-full sm:block md:text-base lg:text-lg">
          File Size: {data.size}
        </h2>
        <a
          className={` cursor-pointer border-2 rounded border-red-600  bg-red-600 hover:border-white text-xs font-bold p-1 duration-300 md:text-base`}
          href={data.link}
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default MP3;
