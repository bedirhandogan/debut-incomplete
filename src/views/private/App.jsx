import Layouts from 'components/layouts'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { AuthInstance } from 'db/auth'
import { useDispatch } from 'react-redux'
import { change } from 'store/reducer/user'

function App() {
   const { Sidebar, Navbar } = Layouts.App
   const navigate = useNavigate()
   const location = useLocation()
   const dispatch = useDispatch()

   useEffect(() => {
      onAuthStateChanged(AuthInstance, (user) => {
         user == null && navigate('/')
         dispatch(
            change({
               uid: user.uid,
               displayName: user.displayName,
               email: user.email,
               photoUrl: user.photoURL,
            })
         )
      })
   }, [navigate, location, dispatch])

   return (
      <div className={'app'}>
         <Sidebar />
         <Navbar />
         <Outlet />
      </div>
   )
}

export default App
