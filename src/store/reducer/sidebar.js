import { createSlice } from '@reduxjs/toolkit'

const sidebar = createSlice({
   name: 'sidebar',
   initialState: {
      show: true,
   },
   reducers: {
      change: (state, action) => {
         state.show = action.payload

         const properties = [
            {
               property: '--grid-columns',
               value: !action.payload ? '1fr' : '250px 1fr',
            },
            {
               property: '--navbar-grid-column',
               value: !action.payload ? '1 / 2' : '2 / 3',
            },
            {
               property: '--main-grid-column',
               value: !action.payload ? '1 / 2' : '2 / 3',
            },
         ]

         properties.forEach((v) =>
            document.documentElement.style.setProperty(v.property, v.value)
         )
      },
   },
})

export const { change } = sidebar.actions
export default sidebar.reducer
