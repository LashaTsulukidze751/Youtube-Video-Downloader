
import MP4 from "./MP4";
import { IoIosArrowDropleft } from "react-icons/io";
import { useState } from "react";

function Body(props) {
  return (
    <div className={`relative w-full h-full flex justify-center mt-24 text-center flex-col text-xl ${props.dayNightvalue ? " text-black" : " text-white"}`}>
      <h1 className={`mb-16`}>Download Youtube Video</h1>
       <MP4 onClick={() => setMp3Visible(false)} className=" m-2 w-16 transition-all border-2 border-red-600 rounded hover:bg-red-600 hover:text-white" dayNightvalue={props.dayNightvalue}></MP4>
    </div>
  );
}

export default Body;
