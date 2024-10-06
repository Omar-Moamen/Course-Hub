import {createSlice} from "@reduxjs/toolkit";
import {addUser} from "./actions/addUser";
import {addInstructor} from "./actions/addInstructor";
import {forgetPassword} from "./actions/forgetPassword";

const initialState = {loading: false, error: null}

const usersSlice = createSlice({
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
         .addCase(addUser.fulfilled, (state, _) =>
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
         .addCase(addInstructor.fulfilled, (state) =>
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
         .addCase(forgetPassword.fulfilled, (state) =>
         {
            state.loading = false;
            state.error = null;
         })
         .addCase(forgetPassword.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         })
   }
})

export default usersSlice.reducer;