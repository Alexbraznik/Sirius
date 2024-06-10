import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    form: null,
  },
  reducers: {
    submitForm(state, action) {
      state.form = action.payload;
    },
    resetForm: (state) => {
      state.form = null;
    },
  },
});
//
export const { submitForm, resetForm } = authSlice.actions;

export default authSlice.reducer;
