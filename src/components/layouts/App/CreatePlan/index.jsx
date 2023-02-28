import styles from './styles.module.css'
import Button from 'components/shared/Button'
import { useState } from 'react'
import Details from './Details'
import Theme from './Theme'
import Team from './Team'
import Check from './Check'

function CreatePlan() {
   const [stepId, setStepId] = useState(0)

   const section = [<Details />, <Theme />, <Team />, <Check />]

   return (
      <div className={styles.createPlan}>
         <div className={styles.multiStep}>
            <div
               className={`${styles.item} ${
                  stepId === 0 ? styles.active : 'null'
               }`}
            >
               <div className={styles.count}>1</div>
               <div className={styles.text}>Details</div>
            </div>
            <div
               className={`${styles.item} ${
                  stepId === 1 ? styles.active : 'null'
               }`}
            >
               <div className={styles.count}>2</div>
               <div className={styles.text}>Theme</div>
            </div>
            <div
               className={`${styles.item} ${
                  stepId === 2 ? styles.active : 'null'
               }`}
            >
               <div className={styles.count}>3</div>
               <div className={styles.text}>Team</div>
            </div>
            <div
               className={`${styles.item} ${
                  stepId === 3 ? styles.active : 'null'
               }`}
            >
               <div className={styles.count}>4</div>
               <div className={styles.text}>Check</div>
            </div>
         </div>
         <div className={styles.area}>
            <div className={styles.title}>Details</div>
            {section[stepId]}
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
                        prevState !== 3 ? prevState + 1 : prevState
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
