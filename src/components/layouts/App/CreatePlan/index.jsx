import './styles.scss'
import Button from 'components/shared/Button'
import { useState } from 'react'
import Details from './Details'
import Theme from './Theme'
import Check from './Check'
import {
   IconBrush,
   IconPencil,
   IconSquareRoundedCheck,
} from '@tabler/icons-react'

function CreatePlan() {
   const [stepId, setStepId] = useState(0)

   const section = [
      {
         name: 'details',
         component: <Details />,
      },
      {
         name: 'theme',
         component: <Theme />,
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
                  <IconBrush stroke={1.5} width={18} height={18} />
               </div>
               <div className={'create-plan-step-text'}>
                  Theme
                  <span>Step 2</span>
               </div>
            </div>
            <div
               className={`create-plan-step ${
                  stepId === 2 ? 'active' : 'null'
               }`}
            >
               <div className={'create-plan-step-icon'}>
                  <IconSquareRoundedCheck stroke={1.5} width={18} height={18} />
               </div>
               <div className={'create-plan-step-text'}>
                  Check
                  <span>Step 3</span>
               </div>
            </div>
         </div>
         <div className={'create-plan-main'}>
            {section[stepId].component}
            <div className={'create-plan-main-buttons'}>
               {stepId !== 0 && (
                  <Button
                     type={'fourth'}
                     style={{ width: '60px' }}
                     onClick={() => setStepId((prevState) => prevState - 1)}
                  >
                     Prev
                  </Button>
               )}
               <Button
                  type={'secondary'}
                  style={{ width: '60px' }}
                  onClick={() =>
                     setStepId((prevState) =>
                        prevState !== 2 ? prevState + 1 : prevState
                     )
                  }
               >
                  {stepId !== 2 ? 'Next' : 'Finish'}
               </Button>
            </div>
         </div>
      </div>
   )
}

export default CreatePlan
