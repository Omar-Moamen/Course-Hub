import {configureStore} from "@reduxjs/toolkit";
import user from './userSlice';
import auth from './authSlice';

const store = configureStore({
   reducer: {
      user,
      auth,
   }
})

export default store;