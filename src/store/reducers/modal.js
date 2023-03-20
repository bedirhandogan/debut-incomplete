import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {
    data: {
      component: 'null',
      active: false,
    },
  },
  reducers: {
    change: (state, action) => {
      state.data = action.payload;
    },
    edit: (state, action) => {
      const [key, value] = [...Object.keys(action.payload), ...Object.values(action.payload)];

      state.data[key] = value;
    },
  },
});

export const { change, edit } = modal.actions;
export default modal.reducer;
