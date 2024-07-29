import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';


// addProgram
export const addProgram = createAsyncThunk(
    'programs/addProgram',
    async (programDetails) => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/AddProgram', programDetails, {
          headers: {
            'Content-Type': 'application/json', // Adjust if needed
          },
        });
        return response.data;
      } catch (error) {
        console.error('Failed to add program:', error);
        throw error;
      }
    }
  );

//   getProgram
export const getProgram = createAsyncThunk(
    'students/getProgram',
    async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/GetProgram');
        return response.data;
    }
);

const programSlice = createSlice({
    name:'program',
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(addProgram.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(addProgram.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.students.push(action.payload); // Adjust based on API response
        })
        .addCase(addProgram.rejected, (state, action) => {
            state.status = 'failed';
            state.isError = action.error.message;
        })
        .addCase(getProgram.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getProgram.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.students = action.payload; // Adjust based on API response
        })
        .addCase(getProgram.rejected, (state, action) => {
            state.status = 'failed';
            state.isError = action.error.message;
        })
    }
})

export const programReducer = programSlice.reducer;
