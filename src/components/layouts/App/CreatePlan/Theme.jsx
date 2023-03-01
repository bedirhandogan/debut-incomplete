import styles from './styles.module.css'
import ImageUpload from 'components/shared/ImageUpload'
import defaultPlanLogo from 'assets/images/default-plan-logo.png'

function Theme() {
   return (
      <div className={styles.theme}>
         <div className={styles.planLogo}>
            <div className={styles.inputWrapper}>
               <div className={styles.inputName}>Plan Logo</div>
               <ImageUpload
                  label={'Upload'}
                  style={{
                     width: '100px',
                     height: '100px',
                     margin: '0',
                  }}
               >
                  <img src={defaultPlanLogo} alt={'plan-logo'} />
               </ImageUpload>
            </div>
         </div>
         <div className={styles.colors}>
            <div className={styles.inputName}>Color</div>
            <div
               className={styles.inputWrapper}
               style={{ flexDirection: 'row', gap: '10px' }}
            >
               <input
                  type={'checkbox'}
                  className={`${styles.color} ${styles.red}`}
               />
               <input
                  type={'checkbox'}
                  className={`${styles.color} ${styles.blue2}`}
               />
               <input
                  type={'checkbox'}
                  className={`${styles.color} ${styles.purple}`}
               />
               <input
                  type={'checkbox'}
                  className={`${styles.color} ${styles.blue}`}
               />
               <input
                  type={'checkbox'}
                  className={`${styles.color} ${styles.green}`}
               />
               <input
                  type={'checkbox'}
                  className={`${styles.color} ${styles.yellow}`}
               />
            </div>
         </div>
      </div>
   )
}

export default Theme
