import styles from './styles.module.css'
import ImageUpload from 'components/shared/ImageUpload'
import defaultPlanLogo from 'assets/images/default-plan-logo.png'
import Tooltip from 'components/shared/Tooltip'
import colors from 'constants/colors'
import { useRef } from 'react'
import { edit } from 'store/reducer/create-plan'
import { useDispatch, useSelector } from 'react-redux'

function Theme() {
   const logoRef = useRef()
   const dispatch = useDispatch()
   const { data } = useSelector((state) => state.createPlan)

   const handleInputFocus = () => logoRef.current?.click()

   const handleUpload = (event) => {
      const type = event.target.files[0].type

      if (type === 'image/jpeg' || type === 'image/png') {
         const url = URL.createObjectURL(event.target.files[0])

         dispatch(
            edit({
               logoUrl: url,
            })
         )
      }
   }

   return (
      <div className={styles.theme}>
         <div className={styles.logo}>
            <div className={styles.wrapper}>
               <div className={styles.name}>Plan Logo</div>
               <ImageUpload
                  label={'Upload'}
                  style={{
                     width: '100px',
                     height: '100px',
                     marginTop: '2px',
                  }}
                  reference={logoRef}
                  handleInputFocus={handleInputFocus}
                  handleUpload={handleUpload}
               >
                  <img
                     src={!data.logoUrl ? defaultPlanLogo : data.logoUrl}
                     alt={'plan-logo'}
                  />
               </ImageUpload>
            </div>
         </div>
         <fieldset className={styles.colors}>
            <legend> Colors </legend>
            {colors.map((v, i) => (
               <Tooltip
                  text={v.name}
                  style={{ bottom: '-160%', zIndex: '99' }}
                  key={i}
               >
                  <input
                     type={'radio'}
                     className={styles.color}
                     style={{ backgroundColor: v.hex }}
                     name={'color'}
                     value={v.hex}
                     onClick={(e) =>
                        dispatch(
                           edit({
                              color: e.target.value,
                           })
                        )
                     }
                  />
               </Tooltip>
            ))}
         </fieldset>
      </div>
   )
}

export default Theme
