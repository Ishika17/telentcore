import { configureStore } from "@reduxjs/toolkit";
import jdsReducer from "./features/jdsSlice";
import candidatesReducer from "./features/candidatesSlice";

export const store = configureStore({
  reducer: {
    jds: jdsReducer,
    candidates: candidatesReducer,
  },
});

// These two lines make the (state: RootState) possible in your selectors
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
