import styles from './styles.module.css'
import { useSelector } from 'react-redux'
import defaultPlanLogo from 'assets/images/default-plan-logo.png'
import Tooltip from 'components/shared/Tooltip'
import colors from 'constants/colors'
import Input from 'components/shared/Input'
import Textarea from 'components/shared/Textarea'

function Check() {
   const { data } = useSelector((state) => state.createPlan)

   const filteredColor = colors.filter((v) => v.hex === data.color)

   return (
      <div className={styles.check}>
         <div className={styles.checkArea}>
            <div className={styles.wrapper}>
               <div className={styles.name}>Title</div>
               <Input
                  placeholder={data.title}
                  type={'text'}
                  style={{ textAlign: 'left', padding: '10px', width: '200px' }}
                  disabled
               />
            </div>
            <div className={styles.wrapper}>
               <div className={styles.name}>Description</div>
               <Textarea
                  placeholder={data.description}
                  style={{
                     height: '100px',
                  }}
                  disabled
               />
            </div>
            <div className={styles.wrapper}>
               <div className={styles.name}>Tags</div>
               <div className={styles.tags}>
                  {data.tags.map((v, i) => (
                     <span key={i}>{v}</span>
                  ))}
               </div>
               {data.tags.length === 0 && (
                  <div className={styles.note}>
                     You haven't added a tag yet.
                  </div>
               )}
            </div>
         </div>
         <div className={styles.checkArea}>
            <div className={styles.wrapper} style={{ width: 'max-content' }}>
               <div className={styles.name}>Plan Logo</div>
               <img
                  width={50}
                  src={!data.logoUrl ? defaultPlanLogo : data.logoUrl}
                  alt={'plan-logo'}
               />
            </div>
            <div className={styles.wrapper} style={{ width: 'max-content' }}>
               <div className={styles.name}>Color</div>
               <Tooltip text={filteredColor[0]?.name} position={'bottom'}>
                  <div
                     className={styles.color}
                     style={{ backgroundColor: data.color }}
                  />
               </Tooltip>
            </div>
         </div>
      </div>
   )
}

export default Check
