import { configureStore } from "@reduxjs/toolkit";

//Import slices here
import menuPopupSlice from "../features/menuPopupSlice";
import currentUserSlice from "../features/currentUserSlice";

//Create Store
const store = configureStore({
    reducer: {
        //pieces of state associated with slices go here
        menuPopup: menuPopupSlice,
        currentUser: currentUserSlice
    }
});

export default store;