import styles from './styles.module.css'
import { IconPassword, IconUserCircle } from '@tabler/icons-react'
import { useState } from 'react'
import Profile from './Profile'
import Password from './Password'

function Settings() {
   const [activeAction, setActiveAction] = useState('profile')

   return (
      <div className={styles.settings}>
         <div className={styles.area}>
            <div className={styles.actionList}>
               <div className={styles.groupName}>Account</div>
               <div
                  className={`${styles.action} ${
                     activeAction === 'profile' && styles.active
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
                  className={`${styles.action} ${
                     activeAction === 'password' && styles.active
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
         <div className={styles.area}>
            <div className={styles.actionTitle}>{activeAction}</div>
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
