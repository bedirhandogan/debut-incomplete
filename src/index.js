import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Router from 'router'
import 'assets/styles/index.css'
import { Provider, useSelector } from 'react-redux'
import { store } from 'store'
import Loader from 'components/shared/Loader'
import { Toaster } from 'react-hot-toast'
import Modal from 'components/shared/Modal'
import Settings from 'components/layouts/App/Settings'
import AuthForm from 'components/layouts/App/Auth'
import CreateProject from 'components/layouts/App/CreateProject'

const root = createRoot(document.getElementById('root'))

function ModalWrapper() {
   const { data } = useSelector((state) => state.modal)

   const section = [
      {
         name: 'settings',
         component: <Settings />,
      },
      {
         name: 'auth-form',
         component: <AuthForm />,
      },
      {
         name: 'create-project',
         component: <CreateProject />,
      },
   ]

   const filtered = section.filter((v) => v.name === data.component)

   return (
      <Modal style={{ width: 'max-content', height: 'max-content' }}>
         {filtered[0]?.component}
      </Modal>
   )
}

function Root() {
   return (
      <React.StrictMode>
         <Provider store={store}>
            <Suspense fallback={<Loader />}>
               <Router>
                  <ModalWrapper />
               </Router>
               <Toaster />
            </Suspense>
         </Provider>
      </React.StrictMode>
   )
}

root.render(<Root />)
