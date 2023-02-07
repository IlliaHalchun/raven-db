import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false,
}

export const generalSlice = createSlice({
    name: "parkingAreas",
    initialState,
    reducers: {
        openModal(state, action) {
            state.isModalOpen = true;
        },
        closeModal(state, action) {
            state.isModalOpen = false;
        }
    }
})

export default generalSlice.reducer;
export const { openModal, closeModal } = generalSlice.actions;

