import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    shifts: [],
    status: 'idle',
    error:'null',
}

// addShift
export const addShift = createAsyncThunk(
    'shifts/addShift',
    async(shiftdetails)=>{
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/AddClassShift',shiftdetails,{
            headers:{
                'Content-Type':'application/json'
            },
          });
          return response.data; 
        } catch (error) {
            console.error('Failed to add shift:', error);
            throw error; 
        }
    }
) 

// getShift
export const getShift = createAsyncThunk(
  'programs/getShift',
  async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/GetClassShifts');
    return response.data;
  }
);

// editShift
export const editShift = createAsyncThunk(
  'shifts/editShift',
  async ({ classShift_id, name, in_time, out_time }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/EditClassShift/${classShift_id}`,
        { name, in_time, out_time },
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


// Delete shift
export const deleteShift = createAsyncThunk(
  'shifts/deleteShift',
  async (classShift_id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/DeleteClassShift/${classShift_id}`);
      return classShift_id; // Return the ID of the deleted shift
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


const ShiftSlice= createSlice({
    name: 'shifts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(addShift.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(addShift.fulfilled, (state, action) => {
          state.programs.push(action.payload);
        })
        .addCase(addShift.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(getShift.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getShift.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.shifts = action.payload; 
        })
        .addCase(getShift.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(editShift.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(editShift.fulfilled, (state, action) => {
          state.status = 'succeeded';
          const index = state.shifts.findIndex(shift => shift.classShift_id === action.payload.classShift.classShift_id);
          if (index !== -1) {
            state.shifts[index] = action.payload.classShift;
          }
        })
              
        .addCase(editShift.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
        .addCase(deleteShift.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(deleteShift.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.shifts = state.shifts.filter(shift => shift.classShift_id !== action.payload);
        })
        .addCase(deleteShift.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
    },
  });
export const shiftReducer = ShiftSlice.reducer;