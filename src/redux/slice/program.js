import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// import { data } from 'autoprefixer';

// action
export const fetchProgram = createAsyncThunk('program/fetchProgram', async () => {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    console.log('Fetched data from dummyjson:', data);  
    return data;
});

const programSlice = createSlice({
    name:'program',
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder)=>{
       builder.addCase(fetchProgram.pending,(state,action)=>{
            state.isLoading = true;
        })

       builder.addCase(fetchProgram.fulfilled, (state , action) =>{
        state.isLoading=false;
        state.action=action.payload;
       })

       builder.addCase(fetchProgram.rejected,(state,action)=>{
        console.log("Error",action.payload);
        state.isError=true;
       })
    }
})

export const programReducer = programSlice.reducer;
