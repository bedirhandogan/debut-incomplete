import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
   name: 'user',
   initialState: {
      data: !localStorage.getItem('user')
         ? (() => {
              localStorage.setItem('user', JSON.stringify({}))

              return {}
           })()
         : JSON.parse(localStorage.getItem('user')),
   },
   reducers: {
      change: (state, action) => {
         state.data = action.payload
         localStorage.setItem('user', JSON.stringify(action.payload))
      },
      edit: async (state, action) => {
         const [key, value] = [
            ...Object.keys(action.payload),
            ...Object.values(action.payload),
         ]

         state.data[key] = value
         await localStorage.setItem('user', JSON.stringify(state.data))
      },
   },
})

export const { change, edit } = user.actions
export default user.reducer
