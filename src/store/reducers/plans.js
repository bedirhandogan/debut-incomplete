import { createSlice } from '@reduxjs/toolkit';

const plans = createSlice({
  name: 'plans',
  initialState: {
    data: [],
  },
  reducers: {
    change: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { change } = plans.actions;
export default plans.reducer;
