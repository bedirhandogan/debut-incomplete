import Layouts from 'components/layouts'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'api'

function App() {
   const { Sidebar, Navbar } = Layouts.App
   const navigate = useNavigate()
   const location = useLocation()

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user == null) {
            navigate('/')

            return
         }

         navigate(location.pathname)
      })
   }, [navigate, location])

   return (
      <div className={'app'}>
         <Sidebar />
         <Navbar />
         <Outlet />
      </div>
   )
}

export default App
