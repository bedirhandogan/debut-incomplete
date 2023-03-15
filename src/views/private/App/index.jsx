import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
      if (Object.keys(JSON.parse(localStorage.getItem('user'))).length === 0) {
         navigate('/')
         return
      }

      ;(async () => {
         if (plans?.length === 0) {
            dispatch(loaderChange(true))
            const plans = await getPlans(user)

            await dispatch(plansChange(plans))
            dispatch(loaderChange(false))
         }
      })()
   }, [dispatch, navigate, user, plans])

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
