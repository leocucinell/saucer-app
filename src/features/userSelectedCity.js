import { createSlice } from "@reduxjs/toolkit";

const userSelectedCitySlice = createSlice({
    name: "userSelectedCity",
    initialState: {value: {id: 1}},
    reducers: {
        changeCity: (state, action) => {
            state.value.id = action.payload;
        }
    }
});

export const { changeCity } = userSelectedCitySlice.actions;
export default userSelectedCitySlice.reducer;