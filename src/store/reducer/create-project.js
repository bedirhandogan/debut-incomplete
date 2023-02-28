import { createSlice } from '@reduxjs/toolkit'

const createProject = createSlice({
   name: 'create-project',
   initialState: {
      data: {
         title: 'untitled',
         description: '',
         tag: [],
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

export const { change, edit } = createProject.actions
export default createProject.reducer
