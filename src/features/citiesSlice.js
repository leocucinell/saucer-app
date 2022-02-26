import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../api/api';

export const getCities = createAsyncThunk(
    'get/cities',
    () => {
        const cities = api.get(
            'city/city_list'
        ).then((result) => {
            return result.data.body
        });
        return cities
    }
)

const citiesSlice = createSlice({
    name: "cities",
    initialState: {value: []},
    reducers: {},
    extraReducers: {
        [getCities.fulfilled]: (state, action) => {
            state.value = action.payload
        }
    }
});

export default citiesSlice.reducer;