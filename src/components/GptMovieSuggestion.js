import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector(store => store?.gpt);
  if (!movieNames) return null;
  return (
    <div className='w-full bg-black p-10 text-white bg-opacity-90'>
      <div>
        {
          movieNames.map((movieName, idx) => <MovieList key={movieName} title={movieName} movies={movieResults[idx]} />)
        }
      </div>
    </div>
  )
}

export default GptMovieSuggestion