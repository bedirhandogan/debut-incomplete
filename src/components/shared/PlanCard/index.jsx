import './styles.scss'
import {
   IconArrowBackUp,
   IconBookmark,
   IconDots,
   IconTrash,
} from '@tabler/icons-react'
import Tooltip from 'components/shared/Tooltip'
import { useCallback, useEffect, useRef, useState } from 'react'
import prettyMs from 'pretty-ms'
import { useNavigate } from 'react-router-dom'
import Members from 'components/shared/Members'
import Tags from 'components/shared/Tags'
import removePlan from 'db/storage/remove-plan'
import { useDispatch, useSelector } from 'react-redux'
import { change } from 'store/reducers/bin'
import getBin from 'db/storage/get-bin'

function PlanCard({ data, type }) {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [showPopup, setShowPopup] = useState(false)
   const user = useSelector((state) => state.user.data)
   const plans = useSelector((state) => state.plans.data)
   const bin = useSelector((state) => state.bin.data)

   const [planCardRef, popupTriggerRef, popupRef] = [
      useRef(),
      useRef(),
      useRef(),
   ]

   const date = prettyMs(new Date().getTime() - data.date.updatedAt, {
      compact: true,
      verbose: true,
   })

   const handleClick = useCallback(
      (event) => {
         if (
            event.composedPath().includes(planCardRef.current) &&
            !event.composedPath().includes(popupTriggerRef.current) &&
            !event.composedPath().includes(popupRef.current)
         ) {
            type !== 'bin' && navigate(`/app/plans/${data.id}`)
         } else if (event.composedPath().includes(popupTriggerRef.current)) {
            setShowPopup((prevState) => !prevState)
            return // don't close popup
         }

         setShowPopup(false)
      },
      [planCardRef, popupTriggerRef, popupRef, navigate, data, type]
   )

   const handleRemovePlan = async () => {
      if (bin.length === 0) {
         const binData = await getBin(user)
         dispatch(change(binData))

         await removePlan(user, plans, binData, data.id, dispatch)
         return
      }

      removePlan(user, plans, bin, data.id, dispatch)
   }

   useEffect(() => {
      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
   }, [handleClick])

   return (
      <div className={'plan-card'} ref={planCardRef}>
         <div className={'plan-card-header'}>
            <Tags data={data} />
            <div className={'plan-card-options'}>
               <div
                  className={`plan-card-popup-trigger ${
                     showPopup ? 'active' : ''
                  }`}
                  ref={popupTriggerRef}
               >
                  {type !== 'bin' ? (
                     <IconDots
                        stroke={1.3}
                        width={20}
                        height={20}
                        style={{ color: 'var(--icon-color-primary)' }}
                     />
                  ) : (
                     <Tooltip position={'bottom'} text={'Undo'}>
                        <IconArrowBackUp
                           stroke={1.3}
                           width={20}
                           height={20}
                           style={{ color: 'var(--icon-color-primary)' }}
                        />
                     </Tooltip>
                  )}
               </div>
               {type !== 'bin' && (
                  <div
                     className={'plan-card-popup'}
                     style={{ display: showPopup ? 'flex' : 'none' }}
                     ref={popupRef}
                  >
                     <div
                        className={'plan-card-popup-item'}
                        onClick={handleRemovePlan}
                     >
                        <IconTrash
                           stroke={1.3}
                           width={20}
                           height={20}
                           style={{ color: 'var(--icon-color-primary)' }}
                        />
                        Delete
                     </div>
                     <div className={'plan-card-popup-item'}>
                        <IconBookmark
                           stroke={1.3}
                           width={20}
                           height={20}
                           style={{ color: 'var(--icon-color-primary)' }}
                        />
                        Mark it
                     </div>
                  </div>
               )}
            </div>
         </div>
         <div className={'plan-card-body'}>
            <div className={'plan-card-body-title'}>{data.title}</div>
            <div className={'plan-card-body-preview'}></div>
         </div>
         <div className={'plan-card-footer'}>
            <Tooltip position={'bottom'} text={'Members'}>
               <Members />
            </Tooltip>
            <div className={'plan-card-date'}>{date} ago</div>
         </div>
      </div>
   )
}

export default PlanCard
