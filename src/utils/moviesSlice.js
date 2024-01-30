import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRated : null,
        upComing: null,
        title: null,
        overview: null,
        isMute: true,
    },
    reducers:{
        addNowPlayingMovies:(state , action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addpopularMovies:(state , action)=>{
            state.popularMovies = action.payload;
        },
        addtopRated:(state , action)=>{
            state.topRated = action.payload;
        },
        addupComing:(state , action)=>{
            state.upComing = action.payload;
        },
        addtitle:(state , action)=>{
            state.title = action.payload;
        },
        addoverview:(state , action)=>{
            state.overview = action.payload;
        },
        addTrailerVideo:(state, action) =>{
            state.trailerVideo = action.payload;
        },
        toggleMute:(state) =>{
            state.isMute = !state.isMute;
        },

    }
});

export const { addNowPlayingMovies,addpopularMovies,addtopRated,addupComing, addTrailerVideo, addoverview,addtitle,toggleMute} = moviesSlice.actions;
export default moviesSlice.reducer;