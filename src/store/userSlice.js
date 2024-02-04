import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import {wrapper} from 'axios-cookiejar-support';
import {CookieJar} from 'tough-cookie';


const cookieJar = new CookieJar();
const client = wrapper(axios.create({
   jar: cookieJar,
   withCredentials: true,
}))
const baseUrl = "http://localhost:5000";

export const addUser = createAsyncThunk('user/addUser',
   async (userCredentials, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const res = await client.post(`${baseUrl}/login`, userCredentials)
         const data = await res.data;
         return data;
      } catch (error)
      {
         return rejectWithValue(error.message);
      }
   }
);

const initialState = {user: null, loading: false, error: null}

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: (builder) =>
   {
      builder
         .addCase(addUser.pending, (state, action) =>
         {
            state.loading = true;
            state.error = null;
            state.user = null;
         })
         .addCase(addUser.fulfilled, (state, action) =>
         {
            state.loading = false;
            state.error = null;
            state.user = action.payload;
         })
         .addCase(addUser.rejected, (state, action) =>
         {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
         })
   }
})

export default userSlice.reducer;