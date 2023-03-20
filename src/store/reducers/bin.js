import { createSlice } from '@reduxjs/toolkit';

const bin = createSlice({
  name: 'bin',
  initialState: {
    data: [],
  },
  reducers: {
    change: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { change } = bin.actions;
export default bin.reducer;
