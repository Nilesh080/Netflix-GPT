import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptSearch : false,
        movieResults: null,
        movieNames: null,
    },
    reducers:{
        toggleGptButton:(state, action)=>{
            state.gptSearch = !state.gptSearch;
        },
        addGptMovieResult:(state, action)=>{
            const { movieResults, movieNames } = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        },
    }
});

export const { toggleGptButton, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;