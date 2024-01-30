import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from "./moviesSlice"
import gptReducer from "./gptSlice";
import configureReducer from "./configureSlice";
const appStore = configureStore(
    {
        reducer:{
            user : userSlice,
            movies: movieReducer,
            gpt: gptReducer,
            lang : configureReducer,
        }
    }
)

export default appStore;