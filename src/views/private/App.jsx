import Layouts from 'components/layouts'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { AuthInstance } from 'db/auth'

function App() {
   const { Sidebar, Navbar } = Layouts.App
   const navigate = useNavigate()
   const location = useLocation()

   useEffect(() => {
      onAuthStateChanged(AuthInstance, (user) => user == null && navigate('/'))
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
