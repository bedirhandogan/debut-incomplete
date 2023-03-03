import Layouts from 'components/layouts'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { AuthInstance } from 'db/auth'
import { useDispatch } from 'react-redux'
import { change } from 'store/reducer/user'
import Main from 'components/layouts/App/Main'

function App() {
   const { Sidebar, Navbar } = Layouts.App
   const navigate = useNavigate()
   const location = useLocation()
   const dispatch = useDispatch()

   useEffect(() => {
      onAuthStateChanged(AuthInstance, (user) => {
         user == null && navigate('/')
         user !== null &&
            dispatch(
               change({
                  uid: user.uid,
                  displayName: user.displayName,
                  email: user.email,
                  photoUrl: user.photoURL,
                  providerId: user.providerData[0].providerId,
               })
            )
      })
   }, [navigate, location, dispatch])

   return (
      <div className={'app'}>
         <Sidebar />
         <Navbar />
         <Main>
            <Outlet />
         </Main>
      </div>
   )
}

export default App
