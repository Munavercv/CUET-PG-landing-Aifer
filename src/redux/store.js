import { configureStore } from "@reduxjs/toolkit";
import enrollPopupReducer from './slices/enrollPopupSlice';

const store = configureStore({
    reducer: {
        enrollPopup: enrollPopupReducer
    }
})

export default store;