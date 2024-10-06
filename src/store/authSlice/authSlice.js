import {createSlice} from "@reduxjs/toolkit";
import {userLogin} from "./actions/userLogin";
import {getUser} from './actions/getUser';
import {userLogout} from "./actions/userLogout";

const initialState = {user: null, loading: false, error: null};

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
            state.loading = true;
            state.error = null;
         })
         .addCase(userLogin.fulfilled, (state, {payload}) =>
         {
            state.user = payload;
            state.loading = false;
            state.error = null;
         })
         .addCase(userLogin.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         });

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
            state.loading = true;
            state.error = null;
         })
         .addCase(userLogout.fulfilled, (state, {payload}) =>
         {
            state.user = null;
            state.loading = false;
            state.error = null;
         })
         .addCase(userLogout.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         });
   }
});

export default authSlice.reducer;