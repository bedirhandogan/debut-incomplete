import './styles.scss'
import { IconDots, IconTrash } from '@tabler/icons-react'
import Tooltip from 'components/shared/Tooltip'
import { useState } from 'react'
import prettyMs from 'pretty-ms'
import { useNavigate } from 'react-router-dom'
import Members from 'components/shared/Members'
import Tags from 'components/shared/Tags'

function PlanCard({ data }) {
   const navigate = useNavigate()
   const [showPopup, setShowPopup] = useState(false)

   const date = prettyMs(new Date().getTime() - data.date.updatedAt, {
      compact: true,
      verbose: true,
   })

   return (
      <div
         className={'plan-card'}
         onClick={() => navigate(`/app/plan/${data.id}`)}
      >
         <div className={'plan-card-header'}>
            <Tags data={data} />
            <div className={'plan-card-options'}>
               <div
                  className={`plan-card-popup-trigger ${
                     showPopup ? 'active' : ''
                  }`}
                  onClick={() => setShowPopup((prevState) => !prevState)}
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
                  <div className={'plan-card-popup-item'}>
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
