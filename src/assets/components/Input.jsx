import React, { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import MP4 from "./MP4";
import MP3 from "./MP3";

function Input() {
  const [input, setInput] = useState("");
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [format, setFormat] = useState({
    MP3: false,
    MP4: false,
  });

  useEffect(() => {
    fetchData();
  }, [link]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      setLink(input.slice(0, 43));
    }
  };

  const fetchData = async () => {
    if (format.MP3) {
      const apiUrl = `https://youtube-mp3-download-highest-quality1.p.rapidapi.com/ytmp3/ytmp3/custom/?url=${link}&quality=320`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "007a8165afmsh3e461e678bd9cfcp19820ajsnac9fb82a7aa5",
          "X-RapidAPI-Host":
            "youtube-mp3-download-highest-quality1.p.rapidapi.com",
        },
      };
      if (link) {
        setLoading(true);
        try {
          const response = await fetch(apiUrl, options);
          const result = await response.json();
          setData(result);
          console.log(result);
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
      }
    }
    if (format.MP4) {
      const apiUrl = `https://social-media-video-downloader.p.rapidapi.com/api/getSocialVideo?url=${link}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "aee7525c9dmshecc47b4076cfe82p13c082jsn3905d9401418",
          "X-RapidAPI-Host": "social-media-video-downloader.p.rapidapi.com",
        },
      };
      if (link) {
        setLoading(true);
        try {
          const response = await fetch(apiUrl, options);
          const result = await response.json();
          setData(result);
          console.log(result);
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
      }
    }
  };

  return (
    <div>
      {loading ? (
        <div className="w-full mt-12 flex justify-center items-center flex-col">
          <p className={` text-red-600 font-extrabold text-3xl sm:text-5xl`}>
            POWERED BY LASHANET
          </p>
          <AiOutlineLoading className=" animate-spin h-12 w-12 mt-4 fill-red-600" />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit} className={`w-5/6 md:w-4/6 lg:3/6`}>
            <input
              type="text"
              placeholder="Paste Your Link Here"
              onChange={(e) => setInput(e.target.value)}
              className="w-full border-4 rounded-lg outline-none py-1 px-2 border-red-600 text-black"
            />
            <div>
              <button
                type="submit"
                onClick={() => {setFormat({ MP3: true, MP4: false })}}
                className=" w-14 h-8 border-2 rounded duration-200
                border-red-600  hover:border-white  m-3 bg-red-600 font-bold"
              >
                MP3
              </button>
              <button
                type="submit"
                onClick={() => {setFormat({ MP3: false, MP4: true })}}
                className=" w-14 h-8 border-2 rounded duration-200
                border-red-600 hover:border-white  m-3 bg-red-600 font-bold"
              >
                MP4
              </button>
            </div>
          </form>

          {data.error ? (
            <p>invalid input</p>
          ) : (
            link &&
            !loading && (
              <div className=" w-5/6 flex justify-center">
                {format.MP3 && <MP3 data={data} link={link} />}
                {format.MP4 && <MP4 data={data} />}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Input;
