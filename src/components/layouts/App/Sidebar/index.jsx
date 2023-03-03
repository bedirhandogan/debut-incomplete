import './styles.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
   IconBell,
   IconBookmarks,
   IconLayoutCollage,
   IconMessage2,
   IconPlus,
   IconSettings,
   IconSmartHome,
   IconSquareRoundedArrowRight,
} from '@tabler/icons-react'
import logo from 'assets/images/logo.svg'
import defaultProfile from 'assets/images/default-profile.svg'
import { Logout } from 'db/auth'
import Tooltip from 'components/shared/Tooltip'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'components/shared/Button'
import { change } from 'store/reducer/modal'

function Sidebar() {
   const navigate = useNavigate()
   const { data } = useSelector((state) => state.user)
   const dispatch = useDispatch()
   const location = useLocation()

   return (
      <div className={'sidebar'}>
         <div className={'sidebar-header'}>
            <img src={logo} alt={'logo'} />
            Debut
         </div>
         <div className={'sidebar-section'}>
            <div className={'sidebar-section-name'}>General</div>
            <Link
               to={'/app'}
               className={location.pathname === '/app' ? 'active' : ''}
            >
               <IconSmartHome
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Introduction
            </Link>
            <Link
               to={'plans'}
               className={location.pathname === '/app/plans' ? 'active' : ''}
            >
               <IconLayoutCollage
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Plans
            </Link>
            <Link
               to={'bookmarks'}
               className={
                  location.pathname === '/app/bookmarks' ? 'active' : ''
               }
            >
               <IconBookmarks
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Bookmarks
            </Link>
         </div>
         <div className={'sidebar-section'}>
            <div className={'sidebar-section-name'}>Account</div>
            <div className={'section-modal-trigger'}>
               <IconBell
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Notification
            </div>
            <div
               className={'section-modal-trigger'}
               onClick={() =>
                  dispatch(
                     change({
                        component: 'settings',
                        active: true,
                     })
                  )
               }
            >
               <IconSettings
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Settings
            </div>
            <div className={'section-modal-trigger'}>
               <IconMessage2
                  stroke={1.3}
                  width={24}
                  height={24}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Help & Support
            </div>
         </div>
         <div className={'sidebar-section'}>
            <Button
               type={'third'}
               onClick={() =>
                  dispatch(
                     change({
                        component: 'create-project',
                        active: true,
                     })
                  )
               }
            >
               <IconPlus
                  stroke={1.3}
                  width={20}
                  height={20}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Create Plan
            </Button>
         </div>
         <div className={'sidebar-footer'}>
            <div className={'sidebar-section-name'}>Session</div>
            <div className={'sidebar-footer-session'}>
               <img
                  src={data.photoUrl !== null ? data.photoUrl : defaultProfile}
                  alt={'profile'}
               />
               <div className={'sidebar-footer-username'}>
                  {data.displayName !== null
                     ? data.displayName.length >= 10
                        ? data.displayName.slice(0, 10) + '...'
                        : data.displayName
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
