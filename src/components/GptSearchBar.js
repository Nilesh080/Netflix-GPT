import openai from "../utils/openai";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import langConst from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";
import Shimmer from "./Shimmer";

const GptSearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieNames, movieResults } = useSelector(store => store?.gpt);
  const language = useSelector((store) => store?.lang?.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    return json.results;
  };

  const handleGptSearch = async () => {
    // console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
      console.log("error");
    }

    console.log(gptResults.choices?.[0]?.message?.content);
    const gptResultsArray =
      gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptResultsArray.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({
        movieResults: tmdbResults,
        movieNames: gptResultsArray,
      })
    );
  };

  const handleSearchClick = () =>{
    setIsLoading(true);
    setTimeout(() => {
      handleGptSearch();
    }, 2000);
  }

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black mt-11 md:mt-0 rounded-lg grid grid-cols-12 bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-3 rounded-lg col-span-9"
          type="text"
          placeholder={langConst[language].gptSearchPlaceholder}
        />
        <button
          onClick={handleSearchClick}
          className="bg-red-600 p-2 m-3 rounded-lg col-span-3 text-white font-bold"
        >
          {langConst[language].search}
        </button>
        { !movieResults && isLoading && <Shimmer />}
      </form>
    </div>
  );
};

export default GptSearchBar;
