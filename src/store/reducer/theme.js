import { createSlice } from '@reduxjs/toolkit'

const theme = createSlice({
   name: 'themeSelector',
   initialState: {
      theme: !localStorage.getItem('theme')
         ? (() => {
              localStorage.setItem('theme', 'light')
              return 'light'
           })()
         : (() => {
              document.children[0].setAttribute(
                 'data-theme',
                 localStorage.getItem('theme')
              )
              return localStorage.getItem('theme')
           })(),
   },
   reducers: {
      change: (state) => {
         state.theme = state.theme === 'light' ? 'dark' : 'light'
         localStorage.setItem('theme', state.theme)

         document.children[0].setAttribute('data-theme', state.theme)
      },
   },
})

export const { change } = theme.actions
export default theme.reducer
