import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const searchStringSlice = createSlice({
  name: "searchString",
  initialState,
  reducers: {
    updateSearchString: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default searchStringSlice.reducer;
export const { updateSearchString } = searchStringSlice.actions;
