import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLogin: false,
  role: "",
  userId: null,
  username: "",
  loading: false,
  error: null,
  success: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setId: (state, action) => {
      return { ...state, userId: action.payload };
    },
    setRole: (state, action) => {
      return { ...state, role: action.payload };
    },
    setIsLogin: (state, action) => {
      return { ...state, isLogin: action.payload };
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setRole, setIsLogin, setUsername, setId } = accountSlice.actions;

export default accountSlice.reducer;
