import styles from './styles.module.css'
import { Link, useNavigate } from 'react-router-dom'
import {
   IconBookmarks,
   IconListCheck,
   IconNotes,
   IconSmartHome,
   IconSquareRoundedArrowRight,
} from '@tabler/icons-react'
import logo from 'assets/images/logo.svg'
import { Logout } from 'api'

function Sidebar() {
   const navigate = useNavigate()

   return (
      <div className={styles.sidebar}>
         <div className={styles.header}>
            <img src={logo} alt={'profile'} />
            Debut
         </div>
         <div className={styles.body}>
            <Link to={'/app'}>
               <IconSmartHome
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Introduction
            </Link>
            <Link to={'tasks'}>
               <IconListCheck
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Tasks
            </Link>
            <Link to={'notes'}>
               <IconNotes
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

         <div className={styles.footer}>
            <img src={logo} alt={'profile'} />
            {'username'}
            <IconSquareRoundedArrowRight
               stroke={1.3}
               width={24}
               height={24}
               style={{ color: 'var(--icon-color-primary)' }}
               onClick={() => Logout(navigate)}
            />
         </div>
      </div>
   )
}

export default Sidebar
