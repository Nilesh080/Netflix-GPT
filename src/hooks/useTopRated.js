import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addtopRated } from '../utils/moviesSlice';

const useTopRated = () => {
  const topRated = useSelector(store => store?.movies.topRated);
    const dispatch = useDispatch();
  const getData = async() =>{
   
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addtopRated(json.results));
  }

  useEffect(()=>{
    !topRated && getData();
  },[])
}

export default useTopRated