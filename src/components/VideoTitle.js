import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMute } from "../utils/moviesSlice";

const VideoTitle = ({ title, overview }) => {
  const movie = useSelector((store) => store?.movies);
  const Mute = useSelector((store) => store?.movies?.isMute);
  const dispatch = useDispatch();
  const overviewSize = movie.overview.length;
  const handleMuteButton = () =>{
    dispatch(toggleMute());
  }
  return (
    <div className=" w-screen aspect-video pt-[16%] px-3 md:px-24 absolute  bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-4xl font-bold text-gray-200 md:text-white">{movie.title}</h1>
      {overviewSize > 359 ? (
        <p className="hidden md:inline-block py-6 text-lg w-6/12 text-gray-400">
          {movie.overview}
        </p>
      ) : (
        <p className="hidden md:inline-block py-6 text-lg w-1/4 text-gray-400">
          {movie.overview}
        </p>
      )}
      <div className="my-4 md:m-0">
        <button onClick={handleMuteButton} className=" bg-white text-black py-1 md:py-4 px-2 md:px-12 text-lg font-serif md:text-xl  rounded-lg hover:bg-opacity-80">
            {
              Mute ? "🔇 UnMute":"🔊 Mute"  
            }
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          ▶️ Play
        </button>
        
      </div>
    </div>
  );
};

export default VideoTitle;
