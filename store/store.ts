import { configureStore } from "@reduxjs/toolkit";
import candidatesReducer from "./features/candidatesSlice";

export const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
    // we will add jds and applications here later
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
