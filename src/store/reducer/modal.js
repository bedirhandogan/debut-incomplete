import { createSlice } from '@reduxjs/toolkit'

const modal = createSlice({
   name: 'modal',
   initialState: {
      show: false,
   },
   reducers: {
      change: (state, action) => {
         state.show = action.payload
      },
   },
})

export const { change } = modal.actions
export default modal.reducer
