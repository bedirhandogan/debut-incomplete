import styles from './styles.module.css'
import { IconPaint, IconPassword, IconUserCircle } from '@tabler/icons-react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Profile from '../Profile'

function Password() {
   return <div>Hello, Password</div>
}

function Appearance() {
   return <div>Hello, Appearance</div>
}

function Settings() {
   const [activeAction, setActiveAction] = useState('profile')
   const user = useSelector((state) => state.user)

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
            <div className={styles.actionList}>
               <div className={styles.groupName}>Appearify</div>
               <div
                  className={`${styles.action} ${
                     activeAction === 'appearance' && styles.active
                  }`}
                  onClick={() => setActiveAction('appearance')}
               >
                  <IconPaint
                     stroke={1.3}
                     width={24}
                     height={24}
                     style={{ color: 'var(--icon-color-primary)' }}
                  />
                  Appearance
               </div>
            </div>
         </div>
         <div className={styles.area}>
            {activeAction === 'profile' ? (
               <Profile state={user} />
            ) : activeAction === 'password' ? (
               <Password />
            ) : activeAction === 'appearance' ? (
               <Appearance />
            ) : null}
         </div>
      </div>
   )
}

export default Settings
