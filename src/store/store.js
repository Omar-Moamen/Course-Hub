import {configureStore} from "@reduxjs/toolkit";
import user from './userSlice';
import auth from './authSlice';
import courses from './coursesSlice';

const store = configureStore({
   reducer: {
      user,
      auth,
      courses,
   }
})

export default store;