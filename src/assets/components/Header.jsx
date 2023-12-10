import React from "react";
import { IoCodeDownloadSharp } from "react-icons/io5";


function Header() {
  return (
    <div className={`w-full flex justify-center text-4xl p-2 border-b-2 border-red-600 font-bold items-center md:justify-between`}>
        <p className={`  first-letter:text-red-600`}>L-DOWNLOAD</p>
        <IoCodeDownloadSharp className=" hidden h-10 w-10 md:block"/>
    </div>
  );
}

export default Header;
