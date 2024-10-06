import {createAsyncThunk} from "@reduxjs/toolkit";
import {client} from "../../../services/client";

export const getUser = createAsyncThunk('auth/getUser',
   async (_, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.get(`http://localhost:5000/getCurrentUser`)
         const data = await request.data;
         return data;
      }
      catch (error)
      {
         return rejectWithValue(error.message)
      }
   }
);