import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  periodics: [],
  status: 'idle',
  error: null,
};

// addPeriodic thunk
export const addPeriodic = createAsyncThunk(
  'Periodics/addPeriodic',
  async (PeriodicDetails) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/AddPeriodic', PeriodicDetails, {
        headers: {
          'Content-Type': 'application/json', // Adjust if needed
        },
      });
      return response.data;
    } catch (error) {
      console.error('Failed to add Periodic:', error);
      throw error;
    }
  }
);

// getPeriodic thunk
export const getPeriodic = createAsyncThunk(
  'Periodics/getPeriodic',
  async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/GetPeriodic');
    return response.data;
  }
);

// editPeriodic thunk
export const editPeriodic = createAsyncThunk(
  'Periodics/editPeriodic',
  async ({ id, details }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/EditPeriodic/${id}`,
        details,
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


// deletePeriodic
export const deletePeriodic = createAsyncThunk(
  'Periodics/deletePeriodic',
  async (periodicId, { rejectWithValue }) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/DeletePeriodic/${periodicId}`);
      return periodicId;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const PeriodicSlice = createSlice({
  name: 'Periodics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPeriodic.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPeriodic.fulfilled, (state, action) => {
        state.periodics.push(action.payload); 
        state.status = 'succeeded';
      })
      .addCase(addPeriodic.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getPeriodic.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPeriodic.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.periodics = action.payload;
      })
      .addCase(getPeriodic.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(editPeriodic.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editPeriodic.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.periodics.findIndex(periodic => periodic.periodic_id === action.payload.periodic_id);
        if (index !== -1) {
          state.periodics[index] = action.payload;
        }
      })
      .addCase(editPeriodic.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deletePeriodic.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletePeriodic.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.periodics = state.periodics.filter(periodic => periodic.periodic_id !== action.payload);
      })
      .addCase(deletePeriodic.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const periodicReducer = PeriodicSlice.reducer;

