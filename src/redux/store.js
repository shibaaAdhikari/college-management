import { configureStore } from "@reduxjs/toolkit";
import { programReducer } from './slice/program';


export const store = configureStore ({
    reducer:{
         program:programReducer,
    },
})