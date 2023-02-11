import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {generalSlice} from "./general/general.redux.slice";
import {parkingSlice} from "./parking/parking.redux.slice";


const store = configureStore({
    reducer: {
        parking: parkingSlice.reducer,
        general: generalSlice.reducer
    },
})

export const useTypedDispatch: () => typeof store.dispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export default store;
