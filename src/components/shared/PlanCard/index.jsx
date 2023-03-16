import './styles.scss'
import { IconDots, IconTrash } from '@tabler/icons-react'
import Tooltip from 'components/shared/Tooltip'
import { useCallback, useEffect, useRef, useState } from 'react'
import prettyMs from 'pretty-ms'
import { useNavigate } from 'react-router-dom'
import Members from 'components/shared/Members'
import Tags from 'components/shared/Tags'

function PlanCard({ data }) {
   const navigate = useNavigate()
   const [showPopup, setShowPopup] = useState(false)

   const [planCardRef, popupTriggerRef, cardPopupItemRef] = [
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
            !event.composedPath().includes(cardPopupItemRef.current)
         ) {
            navigate(`/app/plans/${data.id}`)
         } else if (event.composedPath().includes(popupTriggerRef.current)) {
            setShowPopup((prevState) => !prevState)
         } else if (!event.composedPath().includes(cardPopupItemRef.current))
            setShowPopup(false)
      },
      [planCardRef, popupTriggerRef, cardPopupItemRef, navigate, data]
   )

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
                  <IconDots
                     stroke={1.3}
                     width={20}
                     height={20}
                     style={{ color: 'var(--icon-color-primary)' }}
                  />
               </div>
               <div
                  className={'plan-card-popup'}
                  style={{ display: showPopup ? 'flex' : 'none' }}
               >
                  <div
                     className={'plan-card-popup-item'}
                     ref={cardPopupItemRef}
                  >
                     <IconTrash
                        stroke={1.3}
                        width={20}
                        height={20}
                        style={{ color: 'var(--icon-color-primary)' }}
                     />
                     Delete
                  </div>
               </div>
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
