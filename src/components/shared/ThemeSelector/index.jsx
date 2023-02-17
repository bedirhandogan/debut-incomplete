import styles from './styles.module.css'
import { change } from 'store/reducer/theme'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { useDispatch, useSelector } from 'react-redux'

function ThemeSelector() {
   const { theme } = useSelector((state) => state.theme)
   const dispatch = useDispatch()

   return (
      <div className={styles.themeSelector} onClick={() => dispatch(change())}>
         <div
            className={`${styles.themeSelect} ${
               theme === 'dark' && styles.active
            }`}
         >
            {theme === 'light' && (
               <IconSun
                  stroke={1.3}
                  width={20}
                  height={20}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
            )}
         </div>
         <div
            className={`${styles.themeSelect} ${
               theme === 'light' && styles.active
            }`}
         >
            {theme === 'dark' && (
               <IconMoon
                  stroke={1.3}
                  width={20}
                  height={20}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
            )}
         </div>
      </div>
   )
}

export default ThemeSelector
