import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {baseURL, client} from './userSlice'


// userLogin asyncThunk
export const userLogin = createAsyncThunk('auth/userLogin',
   async (userCredentials, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.post(`${baseURL}/login`, userCredentials)
         return request.data;
      }
      catch (error)
      {
         return rejectWithValue(error.message)
      }
   }
);

// // userIsLoggedIn asyncThunk
// export const userIsLoggedIn = createAsyncThunk('auth/userIsLoggedIn',
//    async (_, thunkAPI) =>
//    {
//       const {rejectWithValue} = thunkAPI;
//       try
//       {
//          const request = await client.get(`${baseURL}/isLoggedIn`);
//          const data = await request.data;
//          return data;
//       }
//       catch (error)
//       {
//          return rejectWithValue(error.message)
//       }
//    }
// );

// getUser asyncThunk
export const getUser = createAsyncThunk('auth/getUser',
   async (_, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.get(`${baseURL}/getCurrentUser`)
         const data = await request.data;
         return data;
      }
      catch (error)
      {
         return rejectWithValue(error.message)
      }
   }
);

// userLogout asyncThunk
export const userLogout = createAsyncThunk('auth/userLogout',
   async (_, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.get(`${baseURL}/logout`)
         return request.data;
      }
      catch (error)
      {
         return rejectWithValue(error.message)
      }
   }
);

const initialState = {user: null, authLoading: false, error: null};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) =>
   {
      // userLogin
      builder
         .addCase(userLogin.pending, (state, _) =>
         {
            state.authLoading = true;
            state.error = null;
         })
         .addCase(userLogin.fulfilled, (state, {payload}) =>
         {
            state.user = payload;
            state.authLoading = false;
            state.error = null;
         })
         .addCase(userLogin.rejected, (state, {payload}) =>
         {
            state.authLoading = false;
            state.error = payload;
         });

      // getUser
      builder
         .addCase(getUser.pending, (state, _) =>
         {
            state.authLoading = true;
            state.error = null;
         })
         .addCase(getUser.fulfilled, (state, {payload}) =>
         {
            state.authLoading = false;
            state.user = payload;
            state.error = null;
         })
         .addCase(getUser.rejected, (state, {payload}) =>
         {
            state.authLoading = false;
            state.error = payload;
         })

      // userLogout
      builder
         .addCase(userLogout.pending, (state, _) =>
         {
            state.authLoading = true;
            state.error = null;
         })
         .addCase(userLogout.fulfilled, (state, {payload}) =>
         {
            state.user = null;
            state.authLoading = false;
            state.error = null;
         })
         .addCase(userLogout.rejected, (state, {payload}) =>
         {
            state.authLoading = false;
            state.error = payload;
         });
   }
});

export default authSlice.reducer;