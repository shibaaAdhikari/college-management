import { configureStore } from "@reduxjs/toolkit";
import { programReducer } from './slice/program';
import {studentReducer} from './slice/student'; 


export const store = configureStore ({
    reducer:{
         programs:programReducer,
         students: studentReducer, 
    },
})