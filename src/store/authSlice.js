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
//          const request = await client.get(`${baseURL}/isLoggedIn`)
//          return request.data;
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

         return request.data;
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

const initialState = {user: null, isLoggedIn: false, error: null};

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
            state.error = null;
         })
         .addCase(userLogin.fulfilled, (state, {payload}) =>
         {
            state.user = payload;
            state.isLoggedIn = true;
            state.error = null;
            console.log(payload)
         })
         .addCase(userLogin.rejected, (state, {payload}) =>
         {
            state.error = payload;
         });

      // // userIsLoggedIn
      // builder
      //    .addCase(userIsLoggedIn.pending, (state, _) =>
      //    {
      //       state.isLoggedIn = false;
      //       state.error = null;
      //    })
      //    .addCase(userIsLoggedIn.fulfilled, (state, {payload}) =>
      //    {
      //       state.isLoggedIn = payload;
      //       state.error = null;
      //    })
      //    .addCase(userIsLoggedIn.rejected, (state, {payload}) =>
      //    {
      //       state.isLoggedIn = false;
      //       state.error = payload;
      //    });

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

      // userLogout
      builder
         .addCase(userLogout.pending, (state, _) =>
         {
            state.error = null;
         })
         .addCase(userLogout.fulfilled, (state, {payload}) =>
         {
            state.isLoggedIn = payload;
            state.user = null;
            state.error = null;
         })
         .addCase(userLogout.rejected, (state, {payload}) =>
         {
            state.error = payload;
         });
   }
});

export default authSlice.reducer;
export const {logInOut} = authSlice.actions;