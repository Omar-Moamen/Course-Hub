import {createAsyncThunk} from "@reduxjs/toolkit";
import {client} from "../../../services/client";

export const actGetCourses = createAsyncThunk('courses/actGetCourses',
   async (_, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.get(`http://localhost:5000/getCourses`);
         const data = await request.data;
         return data;
      } catch (error)
      {
         return rejectWithValue(error.message)
      }
   })