import styles from './styles.module.css'
import Breadcrumbs from 'components/shared/Breadcrumbs'

function Bookmarks() {
   return (
      <div className={styles.bookmarks}>
         <Breadcrumbs
            path={[
               {
                  name: 'Bookmarks',
                  to: '/app/bookmarks',
                  end: true,
               },
            ]}
         />
      </div>
   )
}

export default Bookmarks
