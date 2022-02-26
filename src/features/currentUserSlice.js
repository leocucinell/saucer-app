import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {value: null},
    reducers: {
        setCurrentUser: (state, action) => {
            console.log('~~ setCurrentUser reducer ~~')
            console.log(action)
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~")
            state.value = action.payload
        },
        removeCurrentUser: (state, action) => {
            state = {
                value: null
            }
        }
    }
});

export const {setCurrentUser,removeCurrentUser} = currentUserSlice.actions;
export default currentUserSlice.reducer;