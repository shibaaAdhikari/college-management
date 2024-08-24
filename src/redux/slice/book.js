import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

// Add Book Thunk
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

// Get Book Thunk
export const getBook = createAsyncThunk(
  'Books/getBook',
  async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/GetBook');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch books:', error);
      throw error;
    }
  }
);


// Edit Book thunk
export const editBook = createAsyncThunk(
  'Books/editBook',
  async ({ id, details }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/EditBook/${id}`,
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

// delete book thunk
// Delete shift
export const deleteBook = createAsyncThunk(
  'Books/deleteBook',
  async (book_id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/DeleteBook/${book_id}`);
      return book_id; // Return the ID of the deleted shift
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Slice definition
const BookSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add Book
      .addCase(addBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);  // Add the new book to the array
        state.status = 'succeeded';
      })
      .addCase(addBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Get Book
      .addCase(getBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;  // Set the fetched books into state
      })
      .addCase(getBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Edit Book
      .addCase(editBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.books.findIndex(book => book.book_id === action.payload.book_id);
        if (index !== -1) {
          state.books[index] = action.payload;
        }
      })
      .addCase(editBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || action.error.message; 
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = state.books.filter(shift => shift._id !== action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
  },
});

export const bookReducer = BookSlice.reducer;
