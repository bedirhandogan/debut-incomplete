import styles from './styles.module.css'
import { IconLayoutCollage } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

function Breadcrumbs({ path }) {
   const navigate = useNavigate()

   return (
      <div className={styles.breadcrumbs}>
         <div className={styles.item}>
            <IconLayoutCollage
               stroke={1.3}
               width={24}
               height={24}
               style={{ color: 'var(--icon-color-primary)', cursor: 'pointer' }}
               onClick={() => navigate('/app')}
            />
            <span className={styles.arrow} />
         </div>

         {path.map((v, i) => (
            <div className={styles.item} onClick={() => navigate(v.to)} key={i}>
               <div className={styles.text}>{v.name}</div>
               {v.end !== true && <span className={styles.arrow} />}
            </div>
         ))}
      </div>
   )
}

export default Breadcrumbs
