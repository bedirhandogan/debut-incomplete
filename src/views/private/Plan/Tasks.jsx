import './styles.scss'
import Button from 'components/shared/Button'

function Tasks() {
   return (
      <div className={'tasks'}>
         <div className={'tasks-header'}>
            <div className={'tasks-header-title'}>
               There are 0 tasks created
            </div>
            <Button
               type={'third'}
               style={{
                  width: 'max-content',
                  padding: '0 20px',
               }}
            >
               Create Task
            </Button>
         </div>
         <div className={'tasks-grid'}>
            <div className={'tasks-grid-message'}>No task created yet</div>
         </div>
      </div>
   )
}

export default Tasks
