import {createSlice} from "@reduxjs/toolkit";
import {actAddUser} from "./act/actAddUser";
import {actAddInstructor} from "./act/actAddInstructor";
import {actForgetPassword} from "./act/actForgetPassword";

const initialState = {loading: false, error: null}

const usersSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: (builder) =>
   {
      // addUser
      builder
         .addCase(actAddUser.pending, (state, _) =>
         {
            state.loading = true;
            state.error = null;
         })
         .addCase(actAddUser.fulfilled, (state, _) =>
         {
            state.loading = false;
            state.error = null;
         })
         .addCase(actAddUser.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         })

      // addInstructor
      builder
         .addCase(actAddInstructor.pending, (state, _) =>
         {
            state.loading = true;
            state.error = null;
         })
         .addCase(actAddInstructor.fulfilled, (state) =>
         {
            state.loading = false;
            state.error = null;
         })
         .addCase(actAddInstructor.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         })

      // forgetPassword
      builder
         .addCase(actForgetPassword.pending, (state, _) =>
         {
            state.loading = true;
            state.error = null;
         })
         .addCase(actForgetPassword.fulfilled, (state) =>
         {
            state.loading = false;
            state.error = null;
         })
         .addCase(actForgetPassword.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         })
   }
})

export default usersSlice.reducer;