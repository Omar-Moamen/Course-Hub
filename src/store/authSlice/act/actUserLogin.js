import {createAsyncThunk} from "@reduxjs/toolkit";
import {client} from "../../../services/client";

export const actUserLogin = createAsyncThunk('auth/actUserLogin',
   async (userCredentials, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.post(`http://localhost:5000/login`, userCredentials)
         return request.data;
      }
      catch (error)
      {
         return rejectWithValue(error.message)
      }
   }
);