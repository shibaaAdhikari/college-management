import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  programs: [],
  status: 'idle',
  error: null,
};

// addProgram thunk
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

// getProgram thunk
export const getProgram = createAsyncThunk(
  'programs/getProgram',
  async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/GetProgram');
    return response.data;
  }
);

// editProgram thunk
export const editProgram = createAsyncThunk(
  'programs/editProgram',
  async ({ programId, programDetails }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/EditProgram/${programId}`,
        programDetails,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
    
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// deleteProgram
export const deleteProgram = createAsyncThunk(
  'programs/deleteProgram',
  async (programId, { rejectWithValue }) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/DeleteProgram/${programId}`);
      return programId;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const programSlice = createSlice({
  name: 'programs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProgram.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addProgram.fulfilled, (state, action) => {
        state.programs.push(action.payload);
      })
      .addCase(addProgram.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Use 'error' instead of 'isError'
      })
      .addCase(getProgram.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProgram.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.programs = action.payload; // Use 'programs'
      })
      .addCase(getProgram.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Use 'error'
      })
      .addCase(editProgram.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editProgram.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.programs.findIndex(program => program.program_id === action.payload.program_id);
        if (index !== -1) {
          state.programs[index] = action.payload;
        }
      })
      .addCase(editProgram.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteProgram.pending, (state) => {
        state.status = 'loading';
    })
    .addCase(deleteProgram.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.programs = state.programs.filter(program => program.program_id !== action.payload);
    })
    .addCase(deleteProgram.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
    });
  },
});

export const programReducer = programSlice.reducer;
