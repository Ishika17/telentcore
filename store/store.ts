import { configureStore } from "@reduxjs/toolkit";
import candidatesReducer from "./features/candidatesSlice";
import jdsReducer from "./features/jdsSlice";

export const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
    jds: jdsReducer,
    // Add other reducers here
  },
});

// These two lines are CRITICAL for the hooks.ts file to work:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
