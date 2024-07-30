import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    teachers: [],
    status: 'idle',
    error: null
};

// Addstudent
export const addTeacher = createAsyncThunk(
    'teacher/addStudent',
    async (teacherDetails) => {
        const response = await axios.post('http://127.0.0.1:8000/api/AddTeacher', teacherDetails, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    }
);

const teacherSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addTeacher.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addTeacher.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.teachers.push(action.payload); 
            })
            .addCase(addTeacher.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const teacherReducer = teacherSlice.reducer;