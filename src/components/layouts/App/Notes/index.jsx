import styles from './styles.module.css'
import Breadcrumbs from 'components/shared/Breadcrumbs'

function Notes() {
   return (
      <div className={styles.notes}>
         <Breadcrumbs
            path={[
               {
                  name: 'Notes',
                  to: '/app/notes',
                  end: true,
               },
            ]}
         />
      </div>
   )
}

export default Notes
