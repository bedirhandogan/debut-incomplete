import './styles.scss'
import { useSelector } from 'react-redux'
import Input from 'components/shared/Input'
import Textarea from 'components/shared/Textarea'

function Check() {
   const { data } = useSelector((state) => state.createPlan)

   return (
      <div className={'create-plan-check'}>
         <div className={'create-plan-check-area'}>
            <div className={'create-plan-wrapper'}>
               <div className={'create-plan-wrapper-name'}>Title</div>
               <Input
                  placeholder={data.title}
                  type={'text'}
                  style={{ textAlign: 'left', padding: '10px', width: '100%' }}
                  disabled
               />
            </div>
            <div className={'create-plan-wrapper'}>
               <div className={'create-plan-wrapper-name'}>Description</div>
               <Textarea
                  placeholder={data.description}
                  style={{
                     height: '100px',
                     width: '100%',
                  }}
                  disabled
               />
            </div>
            <div className={'create-plan-wrapper'}>
               <div className={'create-plan-wrapper-name'}>Tags</div>
               <div className={'create-plan-tags'}>
                  {data.tags.map((v, i) => (
                     <span key={i}>{v}</span>
                  ))}
               </div>
               {data.tags.length === 0 && (
                  <div className={'create-plan-wrapper-note'}>
                     You haven't added a tag yet.
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default Check
