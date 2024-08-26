import {createSlice} from "@reduxjs/toolkit";
import {actUserLogin} from "./act/actUserLogin";
import {actGetUser} from './act/actGetUser';
import {actUserLogout} from "./act/actUserLogout";

const initialState = {user: null, loading: false, error: null};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) =>
   {
      // userLogin
      builder
         .addCase(actUserLogin.pending, (state, _) =>
         {
            state.loading = true;
            state.error = null;
         })
         .addCase(actUserLogin.fulfilled, (state, {payload}) =>
         {
            state.user = payload;
            state.loading = false;
            state.error = null;
         })
         .addCase(actUserLogin.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         });

      // getUser
      builder
         .addCase(actGetUser.pending, (state, _) =>
         {
            state.loading = true;
            state.error = null;
         })
         .addCase(actGetUser.fulfilled, (state, {payload}) =>
         {
            state.loading = false;
            state.user = payload;
            state.error = null;
         })
         .addCase(actGetUser.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         })

      // userLogout
      builder
         .addCase(actUserLogout.pending, (state, _) =>
         {
            state.loading = true;
            state.error = null;
         })
         .addCase(actUserLogout.fulfilled, (state, {payload}) =>
         {
            state.user = null;
            state.loading = false;
            state.error = null;
         })
         .addCase(actUserLogout.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         });
   }
});

export default authSlice.reducer;