import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: "",
  reducers: {
    setError: (_, { payload }) => payload,
    resetError: () => "",
  },
});

export const { setError, resetError } = errorSlice.actions;
export default errorSlice.reducer;
