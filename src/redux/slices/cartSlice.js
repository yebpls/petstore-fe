import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { cartApi } from "../../apis/cartApi";

export const getCartIdById = createAsyncThunk(
  "cart/get_cart_id",
  async (id) => {
    try {
      const res = await cartApi.findCartIdById(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCartByCartId = createAsyncThunk(
  "cart/get_all_cart",
  async (id) => {
    try {
      const res = await cartApi.findAllByCartId(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addToCart = createAsyncThunk("cart/add", async (params) => {
  try {
    const res = await cartApi.addToCart(params);
    const { cartId } = initialState;
    getCartByCartId(cartId.id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  cart: [],
  cartItems: null,
  cartId: null,
};

const petSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartIdById.fulfilled, (state, action) => {
      return { ...state, cartId: action.payload };
    });
    builder.addCase(getCartByCartId.fulfilled, (state, action) => {
      return { ...state, cart: action.payload };
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      return { ...state, cart: [...state.cart, action.payload] };
    });
  },
});

export default petSlice.reducer;
