import {configureStore} from "@reduxjs/toolkit";
import users from './usersSlice/usersSlice';
import auth from './authSlice/authSlice';
import courses from './coursesSlice/coursesSlice';

const store = configureStore({
   reducer: {
      users,
      auth,
      courses,
   }
})

export default store;