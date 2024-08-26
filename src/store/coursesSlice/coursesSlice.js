import {createSlice} from '@reduxjs/toolkit';
import {actGetCourses} from './act/actGetCourses';

const initialState = {coursesData: [], loading: false};

const coursesSlice = createSlice({
   name: 'courses',
   initialState,
   reducers: {},
   extraReducers: (builder) =>
   {
      // getCourses
      builder.addCase(actGetCourses.pending, (state, _) =>
      {
         state.loading = true;
         state.error = null;
      })
         .addCase(actGetCourses.fulfilled, (state, {payload}) =>
         {
            state.loading = false;
            state.coursesData = payload;
            state.error = null;
         })
         .addCase(actGetCourses.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         })
   }
})

export default coursesSlice.reducer;