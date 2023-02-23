import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
   name: 'user',
   initialState: {
      uid: 'null',
      displayName: 'null',
      email: 'null',
      photoUrl: 'null',
   },
   reducers: {
      change: (state, action) => {
         state.uid = action.payload.uid
         state.displayName = action.payload.displayName
         state.email = action.payload.email
         state.photoUrl = action.payload.photoUrl
      },
   },
})

export const { change } = user.actions
export default user.reducer
