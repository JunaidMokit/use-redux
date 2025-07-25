
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice"
import taskReducer from "../counter/taskSlice"



export const store=configureStore({
    reducer:{
       counter:counterReducer,
       todo:taskReducer
    },
    
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;