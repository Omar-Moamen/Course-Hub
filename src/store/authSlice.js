import {createSlice} from "@reduxjs/toolkit";


const initialState = {isLoggedIn: true}
const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logInOut: (state, _action) =>
      {
         state.isLoggedIn = !state.isLoggedIn;
      }
   }
})

export default authSlice.reducer;
export const {logInOut} = authSlice.actions;