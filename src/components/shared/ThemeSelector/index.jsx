import './styles.scss'
import { change } from 'store/reducers/theme'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { useDispatch, useSelector } from 'react-redux'

function ThemeSelector({ className }) {
   const { theme } = useSelector((state) => state.theme)
   const dispatch = useDispatch()

   return (
      <div
         className={`theme-selector ${className}`}
         onClick={() => dispatch(change())}
      >
         <div className={`theme-selector-item ${theme === 'dark' && 'active'}`}>
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
            className={`theme-selector-item ${theme === 'light' && 'active'}`}
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
