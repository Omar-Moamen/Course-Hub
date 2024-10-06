import {createAsyncThunk} from "@reduxjs/toolkit";
import {client} from "../../../services/client";

export const addUser = createAsyncThunk('user/addUser',
   async (userCredentials, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.post(`/addParent`, userCredentials)
         const data = await request.data;
         return data;
      } catch (error)
      {
         return rejectWithValue(error.message);
      }
   }
);