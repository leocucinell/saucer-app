import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const validateAndSetCurrentUser = createAsyncThunk(
    'validate/user',
    async(action) => {
        console.log("VALIDATING USER")
        const refreshToken = action.refreshToken;
        const validateRefresh = await api.post(`auth/validateRefresh?refreshToken=${refreshToken}&id=${action.userData.id}`);
        const newUserData = validateRefresh.data.data;
        console.log(newUserData)
        return newUserData;
    }
)

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {value: null},
    reducers: {
        setCurrentUser: (state, action) => {
            console.log('~~ setCurrentUser Action/Reducer ~~');
            console.log(action);
            state.value = action.payload
        },
        removeCurrentUser: (state, action) => {
            state = {
                value: null
            }
            console.log('Current user removed');
        }
    },
    extraReducers: {
        [validateAndSetCurrentUser.pending]: () => {
            //console.log('Loading current user')
        },
        [validateAndSetCurrentUser.fulfilled]: (state, action) => {
            state.value = action.payload;
        },
        [validateAndSetCurrentUser.rejected]: () => {
            console.log('Too long since last login. Please login again');
        }
    }
});

export const {setCurrentUser,removeCurrentUser} = currentUserSlice.actions;
export default currentUserSlice.reducer;