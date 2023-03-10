import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { AuthInstance } from 'db/auth'
import { useDispatch, useSelector } from 'react-redux'
import { change as userChange } from 'store/reducers/user'
import { change as plansChange } from 'store/reducers/plans'
import { change as loaderChange } from 'store/reducers/loader'
import Main from 'components/layouts/App/Main'
import Sidebar from 'components/layouts/App/Sidebar'
import Navbar from 'components/layouts/App/Navbar'
import './styles.scss'
import getPlans from 'db/storage/get-plans'

function App() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const user = useSelector((state) => state.user.data)
   const plans = useSelector((state) => state.plans.data)

   useEffect(() => {
      onAuthStateChanged(AuthInstance, (user) => {
         user == null && navigate('/')
         user !== null &&
            dispatch(
               userChange({
                  uid: user.uid,
                  displayName: user.displayName,
                  email: user.email,
                  photoUrl: user.photoURL,
                  providerId: user.providerData[0].providerId,
               })
            )
      })
   }, [navigate, dispatch])

   useEffect(() => {
      ;(async () => {
         if (plans.length === 0) {
            dispatch(loaderChange(true))
            const plans = await getPlans(user)

            await dispatch(plansChange(plans))
            dispatch(loaderChange(false))
         }
      })()
   }, [dispatch, user, plans])

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
