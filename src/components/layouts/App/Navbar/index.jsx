import './styles.scss'
import {
   IconLayoutSidebarLeftCollapse,
   IconLayoutSidebarLeftExpand,
   IconSearch,
} from '@tabler/icons-react'
import Input from 'components/shared/Input'
import ThemeSelector from 'components/shared/ThemeSelector'
import { useDispatch, useSelector } from 'react-redux'
import { change } from 'store/reducer/sidebar'

function Navbar() {
   const dispatch = useDispatch()
   const { show } = useSelector((state) => state.sidebar)

   return (
      <div className={'navbar'}>
         <div className={'navbar-section'}>
            <div
               className={`sidebar-show-trigger ${show ? 'active' : ''}`}
               onClick={() => dispatch(change(!show))}
            >
               {show ? (
                  <IconLayoutSidebarLeftCollapse
                     stroke={1.3}
                     width={24}
                     height={24}
                     style={{ color: 'var(--icon-color-primary)' }}
                  />
               ) : (
                  <IconLayoutSidebarLeftExpand
                     stroke={1.3}
                     width={24}
                     height={24}
                     style={{ color: 'var(--icon-color-primary)' }}
                  />
               )}
            </div>
         </div>
         <div className={'navbar-section'}>
            <Input
               type={'text'}
               placeholder={'Search'}
               className={'navbar-search'}
            >
               <IconSearch
                  stroke={1.3}
                  width={20}
                  height={20}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
            </Input>
            <ThemeSelector />
         </div>
      </div>
   )
}

export default Navbar
