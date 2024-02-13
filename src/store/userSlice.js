import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import {wrapper} from 'axios-cookiejar-support';
import {CookieJar} from 'tough-cookie';

export const cookieJar = new CookieJar();
export const client = wrapper(axios.create({
   jar: cookieJar,
   withCredentials: true,
}))
export const baseURL = "http://localhost:5000";

// addUser asyncThunk
export const addUser = createAsyncThunk('user/addUser',
   async (userCredentials, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.post(`${baseURL}/addParent`, userCredentials)
         const data = await request.data;
         return data;
      } catch (error)
      {
         return rejectWithValue(error.message);
      }
   }
);

// forgetPassword asyncThunk
export const forgetPassword = createAsyncThunk('user/forgetPassword',
   async (identifier, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.post(`${baseURL}/forgetPassword`,
            identifier,
            {
               withCredentials: true
            })
            .then(function (response)
            {
               return response
            })
            .catch(function (error)
            {
               throw new Error(error.response.data)
            });
         return request.data;
      }
      catch (error)
      {
         return rejectWithValue(error.message)
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
         .addCase(addUser.pending, (state, _) =>
         {
            state.loading = true;
            state.error = null;
            state.user = null;
         })
         .addCase(addUser.fulfilled, (state, {payload}) =>
         {
            state.loading = false;
            state.error = null;
            state.user = payload;
         })
         .addCase(addUser.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.user = null;
            state.error = payload;
         })
      // forgetPassword
      builder
         .addCase(forgetPassword.pending, (state, _) =>
         {
            state.loading = true;
            state.error = null;
            state.user = null;
         })
         .addCase(forgetPassword.fulfilled, (state, {payload}) =>
         {
            state.loading = false;
            state.error = null;
            state.user = payload;
            console.log(payload, "forgetPass")
         })
         .addCase(forgetPassword.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.user = null;
            state.error = payload;
            console.log(payload, "forgetPass Error")
         })
   }
})

export default userSlice.reducer;