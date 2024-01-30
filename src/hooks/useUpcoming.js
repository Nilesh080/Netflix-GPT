import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addupComing } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constant';

const useUpcoming = () => {

  const upComing = useSelector(store => store?.movies.upComing);
  const dispatch = useDispatch();
  const getData = async() =>{
   
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addupComing(json.results));
  }

  useEffect(()=>{
    !upComing && getData();
  },[])
}

export default useUpcoming