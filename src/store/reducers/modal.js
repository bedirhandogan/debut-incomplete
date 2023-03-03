import { createSlice } from '@reduxjs/toolkit'

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
         state.data = action.payload
      },
   },
})

export const { change } = modal.actions
export default modal.reducer
