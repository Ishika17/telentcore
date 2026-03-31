import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { candidates } from "@/generated/prisma"; // <--- Using the type you just found!

// The Entity Adapter now knows exactly what a "Candidate" looks like
const candidatesAdapter = createEntityAdapter<candidates>();

const candidatesSlice = createSlice({
  name: "candidates",
  initialState: candidatesAdapter.getInitialState(),
  reducers: {
    setCandidates: candidatesAdapter.setAll,
  },
});

export default candidatesSlice.reducer;
