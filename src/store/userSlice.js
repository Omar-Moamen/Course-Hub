import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getUser = createAsyncThunk();

const initialState = {user: [], loading: false, error: null}

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: {

   }
})

export default userSlice.reducer;