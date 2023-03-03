import './styles.scss'
import { IconPassword, IconUserCircle } from '@tabler/icons-react'
import { useState } from 'react'
import Profile from './Profile'
import Password from './Password'

function Settings() {
   const [activeAction, setActiveAction] = useState('profile')

   return (
      <div className={'settings'}>
         <div className={'settings-section'}>
            <div className={'settings-action-list'}>
               <div className={'settings-action-name'}>Account</div>
               <div
                  className={`settings-action ${
                     activeAction === 'profile' && 'active'
                  }`}
                  onClick={() => setActiveAction('profile')}
               >
                  <IconUserCircle
                     stroke={1.3}
                     width={24}
                     height={24}
                     style={{ color: 'var(--icon-color-primary)' }}
                  />
                  Profile
               </div>
               <div
                  className={`settings-action ${
                     activeAction === 'password' && 'active'
                  }`}
                  onClick={() => setActiveAction('password')}
               >
                  <IconPassword
                     stroke={1.3}
                     width={24}
                     height={24}
                     style={{ color: 'var(--icon-color-primary)' }}
                  />
                  Password
               </div>
            </div>
         </div>
         <div className={'settings-section'}>
            <div className={'settings-title'}>{activeAction}</div>
            {activeAction === 'profile' ? (
               <Profile />
            ) : activeAction === 'password' ? (
               <Password />
            ) : null}
         </div>
      </div>
   )
}

export default Settings
