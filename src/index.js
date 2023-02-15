import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Router from 'router'
import 'assets/styles/index.css'
import { Provider } from 'react-redux'
import { store } from 'store'
import Loading from 'components/independent/Loading'

const root = createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <Suspense fallback={<Loading />}>
            <Router />
         </Suspense>
      </Provider>
   </React.StrictMode>
)
