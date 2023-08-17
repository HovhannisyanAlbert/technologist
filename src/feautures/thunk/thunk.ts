import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getDefaultUserCard, getaddCard } from "../slice/cardUserSlice";
export const GetUserCard = createAsyncThunk(
  "get/user",
  async (_, { dispatch }) => {
    const response = await axios.get(
      "https://random-data-api.com/api/v2/users?size=10"
    );

    dispatch(getDefaultUserCard(response.data));
  }
);

export const GetAddUserCard = createAsyncThunk(
  "add/card",
  async (size: number, { dispatch }) => {
    const response = await axios.get(
      `https://random-data-api.com/api/v2/users?size=${size}`
    );
    console.log(response.data)
    dispatch(getaddCard(response.data));
  }
);
