import { createSlice } from "@reduxjs/toolkit";

const configureSlice = createSlice({
    name : "lang",
    initialState:{
        language : "en",
    },
    reducers : {
        addLanguage : (state, action)=>{
            state.language = action.payload;
        }
    }
});

export const { addLanguage } = configureSlice.actions;
export default configureSlice.reducer;