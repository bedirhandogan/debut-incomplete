import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import PlanCard from 'components/shared/PlanCard'
import Button from 'components/shared/Button'
import { IconArrowBackUp } from '@tabler/icons-react'
import { useEffect } from 'react'
import { change as loaderChange } from 'store/reducers/loader'
import { change as binChange } from 'store/reducers/bin'
import getBin from 'db/storage/get-bin'

function Bin() {
   const bin = useSelector((state) => state.bin.data)
   const user = useSelector((state) => state.user.data)
   const dispatch = useDispatch()

   useEffect(() => {
      ;(async () => {
         if (bin.length === 0) {
            dispatch(loaderChange(true)) // start
            dispatch(binChange(await getBin(user)))
            dispatch(loaderChange(false)) // stop
         }
      })()
   }, [dispatch, user, bin.length])

   return (
      <div className={'bin'}>
         <div className={'bin-header'}>
            <div className={'bin-header-text'}>
               There is {bin?.length} deleted plan
            </div>
            <Button
               style={{
                  width: 'max-content',
                  padding: '0 15px 0 10px',
               }}
               type={'fourth'}
            >
               <IconArrowBackUp
                  stroke={1.3}
                  width={20}
                  height={20}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Undo All
            </Button>
         </div>
         <div className={'bin-grid'}>
            {bin?.map((v) => (
               <PlanCard key={v.id} data={v} type={'bin'} />
            ))}
         </div>
      </div>
   )
}

export default Bin
