import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change as plansChange } from 'store/reducers/plans'
import { change as loaderChange } from 'store/reducers/loader'
import { change as binChange } from 'store/reducers/bin'
import Main from 'components/layouts/App/Main'
import Sidebar from 'components/layouts/App/Sidebar'
import Navbar from 'components/layouts/App/Navbar'
import './styles.scss'
import getPlans from 'db/storage/get-plans'
import getBin from 'db/storage/get-bin'

function App() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const user = useSelector((state) => state.user.data)
   const plans = useSelector((state) => state.plans.data)
   const bin = useSelector((state) => state.bin.data)

   useEffect(() => {
      if (Object.keys(JSON.parse(localStorage.getItem('user'))).length === 0) {
         navigate('/')
         return
      }

      ;(async () => {
         if (plans.length === 0 && bin.length === 0) {
            dispatch(loaderChange(true)) // start

            const [plans, bin] = await Promise.all([
               getPlans(user),
               getBin(user),
            ])

            dispatch(plansChange(plans))
            dispatch(binChange(bin))

            dispatch(loaderChange(false)) // stop
         }
      })()
   }, [dispatch, navigate, user, plans.length, bin.length])

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
