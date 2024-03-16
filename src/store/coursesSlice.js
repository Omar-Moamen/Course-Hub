import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {client} from './userSlice';
import {baseURL} from './userSlice';

export const getCourses = createAsyncThunk('courses/getCourses',
   async (_, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.get(`${baseURL}/getCourses`);
         const data = await request.data;
         return data;
      } catch (error)
      {
         return rejectWithValue(error.message)
      }
   })


const initialState = {courses: null, coursesLoading: false};

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
            state.courses = payload;
            console.log(state.courses);
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