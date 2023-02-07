import { parkingAreasSlice } from "./parkings/slice";
import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {generalSlice} from "./general/slice";


const store = configureStore({
    reducer: {
        parking: parkingAreasSlice.reducer,
        general: generalSlice.reducer
    },
})

export const useTypedDispatch: () => typeof store.dispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export default store;
