import React from "react";
import Header from "./Header";
import useAddNowPlayingMovies from "../hooks/useAddNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import { useSelector } from "react-redux";
import GptPage from "./GptPage";

export const Browse = () => {
  const showGptPage = useSelector((store) => store?.gpt?.gptSearch);

  useAddNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();

  return (
    <div className="">
      <Header />
      {showGptPage ? (
        <GptPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
