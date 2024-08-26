import {createAsyncThunk} from "@reduxjs/toolkit";
import {client} from "../../../services/client";

export const actForgetPassword = createAsyncThunk('user/actForgetPassword',
   async (identifier, thunkAPI) =>
   {
      const {rejectWithValue} = thunkAPI;
      try
      {
         const request = await client.post(`/forgetPassword`, identifier)

         return request.data;
      }
      catch (error)
      {
         return rejectWithValue(error.message)
      }
   }
);
