import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "./type";
import { GetUserCard } from "../thunk/thunk";

const initialState:initialStateType= {
    cardUser:[],
    isLoading:false
}
const cardUserSlice = createSlice({
    name:"card/user",
    initialState,
    reducers:{
        getDefaultUserCard:(state,action)=>{
            
            state.cardUser = action.payload
        },
        getaddCard:(state,action)=>{
            state.cardUser = [...state.cardUser,...action.payload]
        },
        
    },
    extraReducers:(bulider)=>{
        bulider.addCase(GetUserCard.pending,(state)=>{
               state.isLoading = true
        })
        .addCase(GetUserCard.fulfilled,(state)=>{
            state.isLoading = false
     })

    }
})
export const {getDefaultUserCard,getaddCard} = cardUserSlice.actions
export const cardUserSliceReducer = cardUserSlice.reducer