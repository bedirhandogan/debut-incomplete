import { lazy } from 'react'

const Layouts = {
   Home: {
      Navbar: lazy(() => import('components/layouts/Home/Navbar')),
   },
   App: {
      Introduction: lazy(() => import('components/layouts/App/Introduction')),
      Navbar: lazy(() => import('components/layouts/App/Navbar')),
      Sidebar: lazy(() => import('components/layouts/App/Sidebar')),
   },
}

export default Layouts
