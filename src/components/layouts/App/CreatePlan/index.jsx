import styles from './styles.module.css'
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
      <div className={styles.createPlan}>
         <div className={styles.multiStep}>
            <div
               className={`${styles.item} ${
                  stepId === 0 ? styles.active : 'null'
               }`}
            >
               <div className={styles.icon}>
                  <IconPencil stroke={1.5} width={18} height={18} />
               </div>
               <div className={styles.text}>
                  Details
                  <span>Step 1</span>
               </div>
            </div>
            <div
               className={`${styles.item} ${
                  stepId === 1 ? styles.active : 'null'
               }`}
            >
               <div className={styles.icon}>
                  <IconBrush stroke={1.5} width={18} height={18} />
               </div>
               <div className={styles.text}>
                  Theme
                  <span>Step 2</span>
               </div>
            </div>
            <div
               className={`${styles.item} ${
                  stepId === 2 ? styles.active : 'null'
               }`}
            >
               <div className={styles.icon}>
                  <IconSquareRoundedCheck stroke={1.5} width={18} height={18} />
               </div>
               <div className={styles.text}>
                  Check
                  <span>Step 3</span>
               </div>
            </div>
         </div>
         <div className={styles.area}>
            <div className={styles.title}>{section[stepId].name}</div>
            {section[stepId].component}
            <div className={styles.buttons}>
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
                  Next
               </Button>
            </div>
         </div>
      </div>
   )
}

export default CreatePlan
