import React, { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

function MP4(props) {
  const [input, setInput] = useState("");
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (link) {
        setLoading(true);

        const storedData = localStorage.getItem(link);

        if (storedData) {
          setData(JSON.parse(storedData));
          setLoading(false);
        } else {
          await getApi();
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [link]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      setLink(input);
    }
  };

  const getApi = async () => {
    const apiUrl = `https://social-media-video-downloader.p.rapidapi.com/api/getSocialVideo?url=${link}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "aee7525c9dmshecc47b4076cfe82p13c082jsn3905d9401418",
        "X-RapidAPI-Host": "social-media-video-downloader.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(apiUrl, options);
      const result = await response.json();
      setData(result);
      localStorage.setItem(result.description, JSON.stringify(result));
    } catch (error) {
      console.error(error);
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
        <div className="flex flex-col items-center mb-4">
          <form action="" onSubmit={handleSubmit} className={`w-1/2`}>
            <input
              type="text"
              placeholder="Paste Your Link Here"
              onChange={(e) => setInput(e.target.value)}
              className={`w-full border-4 rounded-lg py-1 px-2 border-red-600  ${
                props.dayNightvalue ? "text-black" : "text-black"
              }`}
            />
            <button
              className="px-2  border-4 hover:bg-red-600 border-red-600 m-2 rounded-lg"
              type="submit"
            >
              Search
            </button>
          </form>

          {data.error ? (
            <p>invalid input</p>
          ) : (
            link &&
            !loading && (
              <div
                className={`w-5/6 flex border-2 justify-between border-black text-center`}
              >
                <img src={data.picture} alt="" className={` w-2/4  bg-cover`} />
                <div className="flex flex-col items-start justify-center w-2/4">
                  <h1 className="text-xl font-bold md:text-3xl  m-1 w-full my-3">
                    {data.author}
                  </h1>
                  <h2 className="mb-7 sm:text-xl text-xs text-center w-full mt-3">
                    {data.description}
                  </h2>

                  {data.picture && (
                    <div
                      className={`flex flex-col w-full justify-center items-center h-full`}
                    >
                      {data.links.map((link) => (
                        <a
                          className={`border-2 rounded border-red-600 hover:bg-red-600 sm:text-xl text-xs mt-2 font-bold p-1 duration-300`}
                          key={link.quality}
                          href={link.url}
                        >
                          download {link.quality} quality
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default MP4;
