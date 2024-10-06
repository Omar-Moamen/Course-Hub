import {createAsyncThunk} from "@reduxjs/toolkit";
import {client} from "../../../services/client";

export const userLogout = createAsyncThunk('auth/userLogout',
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