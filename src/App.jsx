import { MdDarkMode } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { useState } from "react";
import Body from "./assets/components/Body";
import "./index.css";

function App() {
  const [dayNight, setDayNight] = useState(true);

  return (
    <div className={`w-full min-h-screen font-sans flex  items-center flex-col ${dayNight ? 'bg-gray-100' : ' bg-stone-900'}`}>
      <div
        className={`flex w-full justify-between text-4xl border-b border-red-600 font-bold ${dayNight ? " text-black" : " text-white"}  `}
      >
        <p className={` my-2 ml-4 first-letter:text-red-600`}>L-DOWNLOAD</p>
        {dayNight ? (
          <MdDarkMode
            onClick={() => setDayNight(!dayNight)}
            className={`my-2 mr-4`}
          />
        ) : (
          <WiDaySunny
            onClick={() => setDayNight(!dayNight)}
            className={`my-2 mr-4`}
          />
        )}
      </div>
      <Body dayNightvalue={dayNight} />
    </div>
  );
}

export default App;
