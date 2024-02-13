import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {baseURL, client} from './userSlice'


// userLogin asyncThunk
export const userLogin = createAsyncThunk('auth/userLogin',
   async (userCredentials, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.post(`${baseURL}/login`, userCredentials, {
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

const initialState = {user: null, isLoggedIn: false, loading: false, error: null};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) =>
   {
      builder
         .addCase(userLogin.pending, (state, _) =>
         {
            state.loading = true;
            state.user = null;
            state.error = null;
         })
         .addCase(userLogin.fulfilled, (state, {payload}) =>
         {
            state.loading = false;
            state.user = payload.user;
            state.error = null;
            console.log(payload, "fulfilled")
         })
         .addCase(userLogin.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.user = null;
            state.error = payload;
            console.log(payload, "error")
         });
   }
});

export default authSlice.reducer;
export const {logInOut} = authSlice.actions;