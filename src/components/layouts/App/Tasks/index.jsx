import styles from './styles.module.css'
import Breadcrumbs from 'components/shared/Breadcrumbs'

function Tasks() {
   return (
      <div className={styles.tasks}>
         <Breadcrumbs
            path={[
               {
                  name: 'Tasks',
                  to: '/app/tasks',
                  end: true,
               },
            ]}
         />
      </div>
   )
}

export default Tasks
