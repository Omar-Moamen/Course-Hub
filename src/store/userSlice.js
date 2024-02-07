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

// addUser asyncThunk
export const addUser = createAsyncThunk('user/addUser',
   async (userCredentials, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.post(`${baseUrl}/addUser`, userCredentials)
         const data = await request.data;
         return data;
      } catch (error)
      {
         return rejectWithValue(error.message);
      }
   }
);

// userLogin asyncThunk
export const userLogin = createAsyncThunk('user/userLogin',
   async (userCredentials, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.post(`${baseUrl}/userLogin`, userCredentials)
         const data = await request.data;
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
      // addUser
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
      // userLogin
      builder
         .addCase(userLogin.pending, (state, action) =>
         {
            state.loading = true;
            state.error = null;
            state.user = null;
         })
         .addCase(userLogin.fulfilled, (state, action) =>
         {
            state.loading = false;
            state.error = null;
            state.user = action.payload;
         })
         .addCase(userLogin.rejected, (state, action) =>
         {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
         })
   }
})

export default userSlice.reducer;