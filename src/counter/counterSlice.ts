import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0,
}
const counterSlice=createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count=state.count+action.payload;
        },
        deccrement:(state)=>{
            state.count=state.count-1;
        }
    }

})

export const {increment,deccrement}=counterSlice.actions;

export default counterSlice.reducer;