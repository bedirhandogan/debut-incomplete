import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
   name: 'user',
   initialState: {
      data: {
         uid: 'null',
         displayName: 'null',
         email: 'null',
         photoUrl: 'null',
         providerId: 'null',
      },
   },
   reducers: {
      change: (state, action) => {
         state.data = action.payload
      },
      edit: (state, action) => {
         const [key, value] = [
            ...Object.keys(action.payload),
            ...Object.values(action.payload),
         ]
         state.data[key] = value
      },
   },
})

export const { change, edit } = user.actions
export default user.reducer
