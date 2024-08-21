import { configureStore } from "@reduxjs/toolkit";
import { programReducer } from './slice/program';
import {studentReducer} from './slice/student'; 
import { teacherReducer } from "./slice/teacher";
import { periodicReducer } from "./slice/periodic";
import { shiftReducer } from "./slice/classShift";
import { bookReducer } from "./slice/book";


export const store = configureStore ({
    reducer:{
         programs:programReducer,
         students: studentReducer,
         teachers:teacherReducer, 
         periodics:periodicReducer,
         shifts:shiftReducer,
         books:bookReducer,
    },
})