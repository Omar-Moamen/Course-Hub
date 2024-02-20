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
            .then(response =>
            {
               return response;
            })
            .catch(error =>
            {
               throw new Error(error.response.data);
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
            state.error = null;
         })
         .addCase(userLogin.fulfilled, (state, {payload}) =>
         {
            state.loading = false;
            state.user = payload;
            state.isLoggedIn = true;
            state.error = null;
            console.log(state.user)
         })
         .addCase(userLogin.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.user = null;
            state.error = payload;
            console.log(payload)
         });
   }
});

export default authSlice.reducer;
export const {logInOut} = authSlice.actions;