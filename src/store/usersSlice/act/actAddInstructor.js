import {createAsyncThunk} from "@reduxjs/toolkit";
import {client} from "../../../services/client";

export const actAddInstructor = createAsyncThunk('user/actAddInstructor',
   async (userCredentials, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.post(`/addInstructor`, userCredentials)
         const data = await request.data;
         return data;
      } catch (error)
      {
         return rejectWithValue(error.message);
      }
   }
);