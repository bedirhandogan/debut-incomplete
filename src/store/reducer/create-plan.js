import { createSlice } from '@reduxjs/toolkit'

const createPlan = createSlice({
   name: 'create-project',
   initialState: {
      data: {
         title: 'Untitled',
         description: 'No description entered',
         tags: [],
         logoUrl: '',
         color: '#2196f3',
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

export const { change, edit } = createPlan.actions
export default createPlan.reducer
