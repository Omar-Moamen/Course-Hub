import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import {wrapper} from 'axios-cookiejar-support';
import {CookieJar} from 'tough-cookie';

export const cookieJar = new CookieJar();
export const client = wrapper(axios.create({
   jar: cookieJar,
   withCredentials: true,
}));

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

// addUser asyncThunk
export const addInstructor = createAsyncThunk('user/addInstructor',
   async (userCredentials, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.post(`${baseURL}/addInstructor`, userCredentials)
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
         const request = await client.post(`${baseURL}/forgetPassword`, identifier)

         return request.data;
      }
      catch (error)
      {
         return rejectWithValue(error.message)
      }
   }
);

// getUser asyncThunk
export const getUser = createAsyncThunk('user/getUser',
   async (_, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.get(`${baseURL}/getCurrentUser`)

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
         })
         .addCase(addUser.fulfilled, (state, {payload}) =>
         {
            state.loading = false;
            state.error = null;
         })
         .addCase(addUser.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         })

      // addInstructor
      builder
         .addCase(addInstructor.pending, (state, _) =>
         {
            state.loading = true;
            state.error = null;
         })
         .addCase(addInstructor.fulfilled, (state, {payload}) =>
         {
            state.loading = false;
            state.error = null;
         })
         .addCase(addInstructor.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         })

      // forgetPassword
      builder
         .addCase(forgetPassword.pending, (state, _) =>
         {
            state.loading = true;
            state.error = null;
         })
         .addCase(forgetPassword.fulfilled, (state, {payload}) =>
         {
            state.loading = false;
            state.error = null;
         })
         .addCase(forgetPassword.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         })

      // getUser
      builder
         .addCase(getUser.pending, (state, _) =>
         {
            state.loading = true;
            state.error = null;
         })
         .addCase(getUser.fulfilled, (state, {payload}) =>
         {
            state.loading = false;
            state.user = payload;
            state.error = null;
         })
         .addCase(getUser.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         })
   }
})

export default userSlice.reducer;