import React from 'react'
import { createRoot } from 'react-dom/client'
import Router from 'router'
import 'assets/styles/index.css'
import { Provider, useSelector } from 'react-redux'
import { store } from 'store'
import { Toaster } from 'react-hot-toast'
import Modal from 'components/shared/Modal'
import Settings from 'components/layouts/App/Settings'
import CreatePlan from 'components/layouts/App/CreatePlan'
import AuthForm from 'components/layouts/Home/Auth'

const root = createRoot(document.getElementById('root'))

function ModalWrapper() {
   const { data } = useSelector((state) => state.modal)

   const sections = [
      {
         name: 'settings',
         component: <Settings />,
      },
      {
         name: 'auth-form',
         component: <AuthForm />,
      },
      {
         name: 'create-plan',
         component: <CreatePlan />,
      },
   ]

   const index = sections.findIndex((v) => v.name === data.component)

   return (
      <Modal title={sections[index]?.name.replace('-', ' ')}>
         {sections[index]?.component}
      </Modal>
   )
}

function Root() {
   return (
      <Provider store={store}>
         <Router>
            <ModalWrapper />
         </Router>
         <Toaster />
      </Provider>
   )
}

root.render(<Root />)
