import { createSlice } from "@reduxjs/toolkit";

const menuPopupSlice = createSlice({
    name: "menuPopup",
    initialState: {value: false},
    reducers: {
        changeVisibility: (state, action) => {
            //Toggles the value of the state
            state.value = !state.value
        }
    }
});

export const { changeVisibility } = menuPopupSlice.actions;
export default menuPopupSlice.reducer;