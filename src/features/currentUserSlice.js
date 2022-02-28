import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const validateAndSetCurrentUser = createAsyncThunk(
    'validate/user',
    async(action) => {
        const refreshToken = action.refreshToken;
        const validateRefresh = await api.post(`auth/validateRefresh?refreshToken=${refreshToken}&id=${action.userData.id}`);
        const newUserData = validateRefresh.data.data;
        return newUserData;
    }
)

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {value: null},
    reducers: {
        setCurrentUser: (state, action) => {
            state.value = action.payload
        },
        removeCurrentUser: (state, action) => {
            state = {
                value: null
            }
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