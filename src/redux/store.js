import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice";
import petReducer from "./slices/petSlice";

export const store = configureStore({
  reducer: {
    accountReducer,
    petReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["your/action/type"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
});
