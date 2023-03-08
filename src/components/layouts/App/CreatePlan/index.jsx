import './styles.scss'
import Button from 'components/shared/Button'
import { useState } from 'react'
import Details from './Details'
import Check from './Check'
import { IconPencil, IconSquareRoundedCheck } from '@tabler/icons-react'

function CreatePlan() {
   const [stepId, setStepId] = useState(0)

   const sections = [
      {
         name: 'details',
         component: <Details />,
      },
      {
         name: 'check',
         component: <Check />,
      },
   ]

   return (
      <div className={'create-plan'}>
         <div className={'create-plan-steps'}>
            <div
               className={`create-plan-step ${
                  stepId === 0 ? 'active' : 'null'
               }`}
            >
               <div className={'create-plan-step-icon'}>
                  <IconPencil stroke={1.5} width={18} height={18} />
               </div>
               <div className={'create-plan-step-text'}>
                  Details
                  <span>Step 1</span>
               </div>
            </div>
            <div
               className={`create-plan-step ${
                  stepId === 1 ? 'active' : 'null'
               }`}
            >
               <div className={'create-plan-step-icon'}>
                  <IconSquareRoundedCheck stroke={1.5} width={18} height={18} />
               </div>
               <div className={'create-plan-step-text'}>
                  Check
                  <span>Step 2</span>
               </div>
            </div>
         </div>
         <div className={'create-plan-main'}>{sections[stepId].component}</div>
         <div className={'create-plan-buttons'}>
            {stepId !== 0 && (
               <Button
                  type={'fourth'}
                  style={{ width: '100%' }}
                  onClick={() => setStepId((prevState) => prevState - 1)}
               >
                  Prev
               </Button>
            )}
            <Button
               type={'secondary'}
               style={{ width: '100%' }}
               onClick={() =>
                  setStepId((prevState) =>
                     prevState !== 1 ? prevState + 1 : prevState
                  )
               }
            >
               {stepId !== 1 ? 'Next' : 'Create'}
            </Button>
         </div>
      </div>
   )
}

export default CreatePlan
