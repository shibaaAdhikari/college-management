import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    books: [],
    status: 'idle',
    error: null,
  };

// Add book
  export const addBook = createAsyncThunk(
    'Books/addBook',
    async (BookDetails) => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/AddBook', BookDetails, {
          headers: {
            'Content-Type': 'application/json', 
          },
        });
        return response.data;
      } catch (error) {
        console.error('Failed to add Book:', error);
        throw error;
      }
    }
  );

  // Get Book
  export const getBook = createAsyncThunk('Books/getBook',
         'Books/getBook',
          async () => {
          const response = await axios.get('http://127.0.0.1:8000/api/GetBook');
          return response.data;
         }
  );


  
const BookSlice = createSlice({
    name: 'Books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(addBook.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(addBook.fulfilled, (state, action) => {
          state.books.push(action.payload); 
          state.status = 'succeeded';
        })
        .addCase(addBook.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(getBook.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getBook.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.periodics = action.payload;
        })
        .addCase(getBook.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
    },
  });
  
export const bookReducer = BookSlice.reducer;