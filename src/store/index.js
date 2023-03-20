import { configureStore } from '@reduxjs/toolkit';

import bin from 'store/reducers/bin';
import loader from 'store/reducers/loader';

import createPlan from './reducers/create-plan';
import modal from './reducers/modal';
import plans from './reducers/plans';
import sidebar from './reducers/sidebar';
import theme from './reducers/theme';
import user from './reducers/user';

export const store = configureStore({
  reducer: {
    theme,
    modal,
    user,
    createPlan,
    sidebar,
    plans,
    loader,
    bin,
  },
});
