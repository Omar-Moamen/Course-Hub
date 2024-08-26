import {createAsyncThunk} from "@reduxjs/toolkit";
import {client} from "../../../services/client";

export const actUserLogout = createAsyncThunk('auth/actUserLogout',
   async (_, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.get(`http://localhost:5000/logout`)
         return request.data;
      }
      catch (error)
      {
         return rejectWithValue(error.message)
      }
   }
);