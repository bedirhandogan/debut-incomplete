import './styles.scss'
import { IconDots, IconTrash } from '@tabler/icons-react'
import Tooltip from 'components/shared/Tooltip'
import { useState } from 'react'

function PlanCard({ data }) {
   const [showPopup, setShowPopup] = useState(false)
   console.log(data)

   return (
      <div className={'plan-card'}>
         <div className={'plan-card-header'}>
            <div className={'plan-card-tags'}>
               {data.tags.length === 0 ? (
                  <div className={'plan-card-tag'}>Unlabeled</div>
               ) : (
                  data.tags.map((v, i) => (
                     <div className={'plan-card-tag'} key={i}>
                        {v}
                     </div>
                  ))
               )}
            </div>
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
               <div className={'plan-card-members'}>
                  <img
                     src={
                        'https://lh3.googleusercontent.com/a/AGNmyxbEkc42O7o24_Her58lNnXcLn2LWX1AKHhJ2IYhRQ=s96-c'
                     }
                     alt={'user'}
                  />
                  <img
                     src={
                        'https://lh3.googleusercontent.com/a/AGNmyxbEkc42O7o24_Her58lNnXcLn2LWX1AKHhJ2IYhRQ=s96-c'
                     }
                     alt={'user'}
                  />
                  <img
                     src={
                        'https://lh3.googleusercontent.com/a/AGNmyxbEkc42O7o24_Her58lNnXcLn2LWX1AKHhJ2IYhRQ=s96-c'
                     }
                     alt={'user'}
                  />
                  <div className={'plan-card-plus-members'}>+3</div>
               </div>
            </Tooltip>
            <div className={'plan-card-date'}>{data.date.updatedAt}</div>
         </div>
      </div>
   )
}

export default PlanCard
