import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    students: [],
    status: 'idle',
    error: null
};

// Add the addStudent thunk here
export const addStudent = createAsyncThunk(
    'students/addStudent',
    async (studentDetails) => {
        const response = await axios.post('http://127.0.0.1:8000/api/AddStudent', studentDetails, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    }
);

export const getStudents = createAsyncThunk(
    'students/getStudents',
    async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/GetStudent');
        return response.data;
    }
);
const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addStudent.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addStudent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.students.push(action.payload); // Adjust based on API response
            })
            .addCase(addStudent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getStudents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getStudents.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.students = action.payload; // Adjust based on API response
            })
            .addCase(getStudents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});
export const studentReducer = studentSlice.reducer;
// export default ;
