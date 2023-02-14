import { configureStore } from '@reduxjs/toolkit'
import theme from './reducer/theme'

export const store = configureStore({
   reducer: {
      theme,
   },
})
