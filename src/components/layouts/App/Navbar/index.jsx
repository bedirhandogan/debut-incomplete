import styles from './styles.module.css'
import { IconSearch, IconBell, IconSettings } from '@tabler/icons-react'
import logo from 'assets/images/logo.svg'
import Input from 'components/shared/Input'
import ThemeSelector from 'components/shared/ThemeSelector'

function Navbar() {
   return (
      <div className={styles.navbar}>
         <div className={styles.area}>
            <img src={logo} alt={'profile'} />
            Introduction
         </div>
         <div className={styles.area}>
            <Input type={'text'} placeholder={'Search'}>
               <IconSearch
                  stroke={1.3}
                  width={20}
                  height={20}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
            </Input>
            <ThemeSelector />
            <div className={styles.notification}>
               <IconBell
                  stroke={1.3}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
            </div>
            <div className={styles.settings}>
               <IconSettings
                  stroke={1.3}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
            </div>
         </div>
      </div>
   )
}

export default Navbar
