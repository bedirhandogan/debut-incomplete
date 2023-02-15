import React from 'react'
import { createRoot } from 'react-dom/client'
import Router from 'router'
import 'assets/styles/index.css'
import { Provider } from 'react-redux'
import { store } from 'store'

const root = createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <Router />
      </Provider>
   </React.StrictMode>
)
