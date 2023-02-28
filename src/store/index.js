import { configureStore } from '@reduxjs/toolkit'
import theme from './reducer/theme'
import modal from './reducer/modal'
import user from './reducer/user'
import createProject from 'store/reducer/create-project'

export const store = configureStore({
   reducer: {
      theme,
      modal,
      user,
      createProject,
   },
})
