import './styles.scss'
import PlanCard from 'components/shared/PlanCard'
import { IconFilter } from '@tabler/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'components/shared/Button'
import { useEffect } from 'react'
import { change as plansChange } from 'store/reducers/plans'
import { change as loaderChange } from 'store/reducers/loader'
import getPlans from 'db/storage/get-plans'

function Plans() {
   const plans = useSelector((state) => state.plans.data)
   const user = useSelector((state) => state.user.data)
   const dispatch = useDispatch()

   useEffect(() => {
      ;(async () => {
         if (plans.length === 0) {
            dispatch(loaderChange(true)) // start
            dispatch(plansChange(await getPlans(user)))
            dispatch(loaderChange(false)) // stop
         }
      })()
   }, [dispatch, user, plans.length])

   return (
      <div className={'plans'}>
         <div className={'plans-header'}>
            <div className={'plans-header-text'}>
               There is {plans?.length} plans
            </div>
            <Button
               style={{
                  width: 'max-content',
                  padding: '0 15px 0 10px',
               }}
               type={'fourth'}
            >
               <IconFilter
                  stroke={1.3}
                  width={20}
                  height={20}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Filter
            </Button>
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
