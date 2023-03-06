import './styles.scss'
import { IconDots, IconTrash } from '@tabler/icons-react'
import Tooltip from 'components/shared/Tooltip'
import { useState } from 'react'

function PlanCard() {
   const [showPopup, setShowPopup] = useState(false)

   return (
      <div className={'plan-card'}>
         <div className={'plan-card-header'}>
            <div className={'plan-card-tags'}>
               <div className={'plan-card-tag'}> Website </div>
               <div className={'plan-card-tag'}> UX </div>
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
            <div className={'plan-card-body-title'}>Debut State Management</div>
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
            <div className={'plan-card-date'}>2 days ago</div>
         </div>
      </div>
   )
}

export default PlanCard
