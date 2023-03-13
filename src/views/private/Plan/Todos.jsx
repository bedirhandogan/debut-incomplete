import './styles.scss'
import Button from 'components/shared/Button'

function Todos() {
   return (
      <div className={'todos'}>
         <div className={'todos-header'}>
            <div className={'todos-header-title'}>
               There are 0 todos created
            </div>
            <Button
               type={'third'}
               style={{
                  width: 'max-content',
                  padding: '0 20px',
               }}
            >
               Create Todo
            </Button>
         </div>
         <div className={'todos-grid'}>
            <div className={'todos-grid-message'}>No todo created yet</div>
         </div>
      </div>
   )
}

export default Todos
