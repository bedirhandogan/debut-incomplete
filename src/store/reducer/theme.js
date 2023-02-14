import {createSlice} from "@reduxjs/toolkit";

const theme = createSlice({
    name: 'themeSelector',
    initialState: {
        theme: "light"
    },
    reducers: {
        change: state => {
            state.theme = state.theme === "light" ? "dark" : "light";
            document.children[0].setAttribute('data-theme', state.theme);
        },
    }
});

export const { change } = theme.actions;
export default theme.reducer;