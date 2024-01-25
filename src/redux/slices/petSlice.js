import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { petApi } from "../../apis/petApi";
import axios from "axios";

export const getAllPet = createAsyncThunk("pet/get_all", async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/pet/findAll");
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const getPetById = createAsyncThunk("pet/get_by_id", async (id) => {
  try {
    const res = await axios.get("http://localhost:8080/api/pet/findById", {
      params: {
        id: id,
        // Add other parameters as needed
      },
    });
    // const res = await petApi.getAll();
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  petList: null,
  pet: null,
};

const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPet.fulfilled, (state, action) => {
      return { ...state, petList: action.payload.data };
    });
    builder.addCase(getPetById.fulfilled, (state, action) => {
      return { ...state, pet: action.payload };
    });
  },
});

export default petSlice.reducer;
