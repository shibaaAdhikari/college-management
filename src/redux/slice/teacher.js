import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    teachers: [],
    status: 'idle',
    error: null
};

// Addstudent
export const addTeacher = createAsyncThunk(
    'teacher/addTeacher',
    async (teacherDetails) => {
        const response = await axios.post('http://127.0.0.1:8000/api/AddTeacher', teacherDetails, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    }
);

// getTeacher
export const getTeacher = createAsyncThunk(
    'teacher/getTeacher',
    async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/GetTeacher');
        return response.data;
    }
);

// editTeacher
export const updateTeacher = createAsyncThunk(
    'teacher/updateTeacher',
    async ({ teacherId, teacherDetails }) => {
        try {
            const response = await axios.put(
                `http://127.0.0.1:8000/api/EditTeacher/${teacherId}`,
                teacherDetails, 
                {
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                }
            );
            return response.data; 
      
        } catch (error) {
            return Promise.reject(error);
        }
    }
);

// deleteTeacher
export const deleteTeacher = createAsyncThunk(
    'teacher/deleteTeacher',
    async (teacherId) => {
        const response = await axios.delete(`http://127.0.0.1:8000/api/DeleteTeacher/${teacherId}`);
        return teacherId;
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
            .addCase(getTeacher.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTeacher.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.teachers = action.payload;  
            })
            .addCase(getTeacher.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateTeacher.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateTeacher.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const updatedTeacher = action.payload.teacher;
                const index = state.teachers.findIndex(teacher => teacher.teacher_id === updatedTeacher.teacher_id);
                if (index !== -1) {
                    state.teachers[index] = updatedTeacher;
                }
            })
            .addCase(updateTeacher.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteTeacher.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteTeacher.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.teachers = state.teachers.filter(teacher => teacher.teacher_id !== action.payload);
            })
            .addCase(deleteTeacher.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const teacherReducer = teacherSlice.reducer;