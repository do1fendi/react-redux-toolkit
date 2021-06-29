import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const jsonSlice = createSlice({
  name: "json",
  initialState,
  reducers: {
    setJson: (state, action) => {
      state.value.push(action.payload);
    //   state.value=action.payload;
    },
    delJson: (state, action) => {
        // state.value.filter(item => item.id != action.payload)
        // state.value.splice(state.value.findIndex((item) => item.id === action.payload), 1);
        state.value = state.value.filter(item => item.id != action.payload)
    }
  },
});

export const { setJson, delJson } = jsonSlice.actions;

export const jsonData = (state) => state.json.value;

export default jsonSlice.reducer;
