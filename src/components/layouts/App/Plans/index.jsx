import './styles.scss'
import PlanCard from 'components/shared/PlanCard'
import { IconFilter } from '@tabler/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import getPlans from 'db/storage/get-plans'
import { change } from 'store/reducers/plans'

function Plans() {
   const plans = useSelector((state) => state.plans.data)
   const user = useSelector((state) => state.user.data)
   const dispatch = useDispatch()

   useEffect(() => {
      getPlans(user).then((v) => {
         dispatch(change(v))
      })
   }, [dispatch, user])

   return (
      <div className={'plans'}>
         <div className={'plans-header'}>
            <div className={'plans-header-text'}>
               There is {plans?.length} plans
            </div>
            <div className={'plans-header-filter'}>
               <IconFilter
                  stroke={1.3}
                  width={20}
                  height={20}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Filter
            </div>
         </div>

         <div className={'plans-grid'}>
            {plans?.map((v) => (
               <PlanCard key={v.id} data={v} />
            ))}
         </div>
      </div>
   )
}

export default Plans
