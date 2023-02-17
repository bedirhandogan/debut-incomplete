import { configureStore } from '@reduxjs/toolkit'
import theme from './reducer/theme'
import modal from './reducer/modal'

export const store = configureStore({
   reducer: {
      theme,
      modal,
   },
})
