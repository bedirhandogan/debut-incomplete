import { configureStore } from '@reduxjs/toolkit'
import theme from './reducer/theme'
import modal from './reducer/modal'
import user from './reducer/user'
import createPlan from './reducer/create-plan'
import sidebar from './reducer/sidebar'

export const store = configureStore({
   reducer: {
      theme,
      modal,
      user,
      createPlan,
      sidebar,
   },
})
