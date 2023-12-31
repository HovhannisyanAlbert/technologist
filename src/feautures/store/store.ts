import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from 'react-redux'
import { cardUserSliceReducer } from "../slice/cardUserSlice";


export const store =configureStore({
    reducer:{
       user:cardUserSliceReducer
      

    },
    devTools:true
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const usedispatch: () => AppDispatch = useDispatch 