import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addpopularMovies } from '../utils/moviesSlice'

const usePopularMovies = () => {

  const popularMovies = useSelector(store => store?.movies.popularMovies);
  const dispatch = useDispatch();
  const getData = async() =>{
   
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addpopularMovies(json.results));
  }

  useEffect(()=>{
    !popularMovies && getData();
  },[])
}

export default usePopularMovies