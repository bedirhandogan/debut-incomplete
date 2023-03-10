import { configureStore } from '@reduxjs/toolkit'
import theme from './reducers/theme'
import modal from './reducers/modal'
import user from './reducers/user'
import createPlan from './reducers/create-plan'
import sidebar from './reducers/sidebar'
import plans from './reducers/plans'
import loader from 'store/reducers/loader'

export const store = configureStore({
   reducer: {
      theme,
      modal,
      user,
      createPlan,
      sidebar,
      plans,
      loader,
   },
})
