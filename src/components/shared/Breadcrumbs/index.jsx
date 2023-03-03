import './styles.scss'
import { IconLayoutCollage } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

function Breadcrumbs({ path }) {
   const navigate = useNavigate()

   return (
      <div className={'breadcrumbs'}>
         <div className={'breadcrumbs-item'}>
            <IconLayoutCollage
               stroke={1.3}
               width={24}
               height={24}
               style={{ color: 'var(--icon-color-primary)', cursor: 'pointer' }}
               onClick={() => navigate('/app')}
            />
            <span className={'breadcrumbs-item-arrow-symbol'} />
         </div>

         {path.map((v, i) => (
            <div
               className={'breadcrumbs-item'}
               onClick={() => navigate(v.to)}
               key={i}
            >
               <div className={'breadcrumbs-item-text'}>{v.name}</div>
               {v.end !== true && (
                  <span className={'breadcrumbs-item-arrow-symbol'} />
               )}
            </div>
         ))}
      </div>
   )
}

export default Breadcrumbs
