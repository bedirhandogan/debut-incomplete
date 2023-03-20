import { createSlice } from '@reduxjs/toolkit';

const loader = createSlice({
  name: 'loader',
  initialState: {
    show: false,
  },
  reducers: {
    change: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { change } = loader.actions;
export default loader.reducer;
