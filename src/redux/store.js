import { configureStore } from "@reduxjs/toolkit";
import { programReducer } from './slice/program';
import {studentReducer} from './slice/student'; 


export const store = configureStore ({
    reducer:{
         program:programReducer,
         students: studentReducer, 
    },
})