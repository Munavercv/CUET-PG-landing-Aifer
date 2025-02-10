import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    show: false
}

const enrollPopupSlice = createSlice({
    name: 'enrollPopup',
    initialState,
    reducers: {
        toggleShow: (state) => {
            state.show = !state.show
        }
    }
})

export const { toggleShow } = enrollPopupSlice.actions;
export default enrollPopupSlice.reducer;