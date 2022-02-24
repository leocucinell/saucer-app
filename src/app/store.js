import { configureStore } from "@reduxjs/toolkit";

//Import slices here
import menuPopupSlice from "../features/menuPopupSlice";

//Create Store
const store = configureStore({
    reducer: {
        //pieces of state associated with slices go here
        menuPopup: menuPopupSlice
    }
});

export default store;