import styles from './styles.module.css'
import ImageUpload from 'components/shared/ImageUpload'
import defaultPlanLogo from 'assets/images/default-plan-logo.png'
import Tooltip from "components/shared/Tooltip";
import colors from "constants/colors";

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
                     marginTop: '2px',
                  }}
               >
                  <img src={defaultPlanLogo} alt={'plan-logo'} />
               </ImageUpload>
            </div>
         </div>
         <fieldset className={styles.colors}>
             <legend> colors </legend>
             {colors.map((v, i) =>
                 <Tooltip text={v.name} style={{ bottom: '-160%', zIndex: '99'}} key={i}>
                     <input
                         type={'radio'}
                         className={styles.color}
                         style={{ backgroundColor: v.hex }}
                         name={'color'}
                         value={v.name}
                     />
                 </Tooltip>
             )}
         </fieldset>
      </div>
   )
}

export default Theme
