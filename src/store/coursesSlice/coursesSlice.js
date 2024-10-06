import {createSlice} from '@reduxjs/toolkit';
import {getCourses} from './actions/getCourses';

const initialState = {coursesData: [], loading: false};

const coursesSlice = createSlice({
   name: 'courses',
   initialState,
   reducers: {},
   extraReducers: (builder) =>
   {
      // getCourses
      builder.addCase(getCourses.pending, (state, _) =>
      {
         state.loading = true;
         state.error = null;
      })
         .addCase(getCourses.fulfilled, (state, {payload}) =>
         {
            state.loading = false;
            state.coursesData = payload;
            state.error = null;
         })
         .addCase(getCourses.rejected, (state, {payload}) =>
         {
            state.loading = false;
            state.error = payload;
         })
   }
})

export default coursesSlice.reducer;