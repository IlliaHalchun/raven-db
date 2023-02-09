import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Modal} from "../../common/modal.enum";

interface IInitialState {
    modal: Modal
}

const initialState: IInitialState = {
    modal: Modal.None,
}

export const generalSlice = createSlice({
    name: "parkingAreas",
    initialState,
    reducers: {
        setModal(state, action: PayloadAction<Modal>) {
            state.modal = action.payload;
        },

        closeModal(state) {
            state.modal = Modal.None;
        }
    }
})

export default generalSlice.reducer;
export const { setModal, closeModal } = generalSlice.actions;

