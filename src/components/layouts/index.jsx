import { lazy } from 'react'

const Layouts = {
   Home: {
      Navbar: lazy(() => import('components/layouts/Home/Navbar')),
   },
   App: {
      Navbar: lazy(() => import('components/layouts/App/Navbar')),
      Sidebar: lazy(() => import('components/layouts/App/Sidebar')),
   },
}

export default Layouts
