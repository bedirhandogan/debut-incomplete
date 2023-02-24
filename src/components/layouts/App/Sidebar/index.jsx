import styles from './styles.module.css'
import { Link, useNavigate } from 'react-router-dom'
import {
   IconBell,
   IconBookmarks,
   IconLayoutCollage,
   IconMessage2,
   IconNote,
   IconSettings,
   IconSquareCheck,
   IconSquareRoundedArrowRight,
} from '@tabler/icons-react'
import logo from 'assets/images/logo.svg'
import defaultProfile from 'assets/images/default-profile.svg'
import { Logout } from 'db/auth'
import Tooltip from 'components/shared/Tooltip'
import { useDispatch, useSelector } from 'react-redux'
import { change } from 'store/reducer/modal'

function Sidebar() {
   const navigate = useNavigate()
   const { data } = useSelector((state) => state.user)
   const dispatch = useDispatch()

   return (
      <div className={styles.sidebar}>
         <div className={styles.header}>
            <img src={logo} alt={'logo'} />
            Debut
         </div>
         <div className={styles.area}>
            <div className={styles.groupName}>General</div>
            <Link to={'/app'}>
               <IconLayoutCollage
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Introduction
            </Link>
            <Link to={'tasks'}>
               <IconSquareCheck
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Tasks
            </Link>
            <Link to={'notes'}>
               <IconNote
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Notes
            </Link>
            <Link to={'bookmarks'}>
               <IconBookmarks
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Bookmarks
            </Link>
         </div>
         <div className={styles.area}>
            <div className={styles.groupName}>Account</div>
            <div className={styles.modalTrigger}>
               <IconBell
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Notification
            </div>
            <div
               className={styles.modalTrigger}
               onClick={() => dispatch(change(true))}
            >
               <IconSettings
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Settings
            </div>
            <div className={styles.modalTrigger}>
               <IconMessage2
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Help & Support
            </div>
         </div>
         <div className={styles.footer}>
            <div className={styles.groupName}>Session</div>
            <div className={styles.session}>
               <img
                  src={data.photoUrl !== null ? data.photoUrl : defaultProfile}
                  alt={'profile'}
               />
               <div className={styles.username}>
                  {data.displayName !== null
                     ? data.displayName.slice(0, 10) + '...'
                     : 'unknown'}
               </div>
               <Tooltip text={'Logout'} position={'top'}>
                  <IconSquareRoundedArrowRight
                     stroke={1.3}
                     width={24}
                     height={24}
                     style={{ color: 'var(--icon-color-primary)' }}
                     onClick={() => Logout(navigate)}
                  />
               </Tooltip>
            </div>
         </div>
      </div>
   )
}

export default Sidebar
