import {createSlice} from "@reduxjs/toolkit";

// const initialSwitchValue = false;
const initialSwitchValue = JSON.parse(localStorage.getItem("lang-status")) || false;

export const switchSlice = createSlice({
    name: "language",
    initialState: {value: initialSwitchValue},
    reducers:{
        SwitchLanguage: (state) => {
            state.value = !state.value;
        }
    },
});

export const {SwitchLanguage} = switchSlice.actions;

export default switchSlice.reducer;