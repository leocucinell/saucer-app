import { configureStore } from "@reduxjs/toolkit";

//Import slices here
import menuPopupSlice from "../features/menuPopupSlice";
import currentUserSlice from "../features/currentUserSlice";
import citiesSlice from '../features/citiesSlice';

//Create Store
const store = configureStore({
    reducer: {
        //pieces of state associated with slices go here
        menuPopup: menuPopupSlice,
        currentUser: currentUserSlice,
        cities: citiesSlice
    }
});

export default store;