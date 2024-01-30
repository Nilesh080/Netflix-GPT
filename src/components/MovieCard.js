import React from 'react'
import { API_OPTIONS, Movie_Poster_URL } from '../utils/constant'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { addTrailerVideo, addoverview, addtitle } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';
import Shimmer from './Shimmer';

const MovieCard = ({poster, Id, title, overview}) => {
  const dispatch = useDispatch();
  if(!poster) return null
  

  const getMovieVideos = async () => {
    const data = await fetch(
    "https://api.themoviedb.org/3/movie/" +
        Id +
        "/videos?language=en-US",
    API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    dispatch(addtitle(title));
    dispatch(addoverview(overview));
};

  const handleClick = () =>{
    getMovieVideos();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button onClick={handleClick} className="w-36 md:w-48 pr-4 transform transition-transform duration-500 ease-in-out hover:scale-105 hover:translate-z-0">
        <img className='' src={Movie_Poster_URL+poster} alt="Movie-poster" />
    </button>
  )
}

export default MovieCard