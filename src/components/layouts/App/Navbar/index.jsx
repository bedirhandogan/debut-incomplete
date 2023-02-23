import styles from './styles.module.css'
import { IconSearch } from '@tabler/icons-react'
import Input from 'components/shared/Input'
import ThemeSelector from 'components/shared/ThemeSelector'

function Navbar() {
   return (
      <div className={styles.navbar}>
         <div className={styles.area}>
            <Input
               type={'text'}
               placeholder={'Search'}
               className={styles.navbarSearch}
            >
               <IconSearch
                  stroke={1.3}
                  width={20}
                  height={20}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
            </Input>
            <ThemeSelector className={styles.navbarThemeSelector} />
         </div>
      </div>
   )
}

export default Navbar
