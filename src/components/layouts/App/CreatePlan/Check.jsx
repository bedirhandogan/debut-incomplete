import './styles.scss'
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
      <div className={'create-plan-check'}>
         <div className={'create-plan-check-area'}>
            <div className={'create-plan-wrapper'}>
               <div className={'create-plan-wrapper-name'}>Title</div>
               <Input
                  placeholder={data.title}
                  type={'text'}
                  style={{ textAlign: 'left', padding: '10px', width: '200px' }}
                  disabled
               />
            </div>
            <div className={'create-plan-wrapper'}>
               <div className={'create-plan-wrapper-name'}>Description</div>
               <Textarea
                  placeholder={data.description}
                  style={{
                     height: '100px',
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
                  <div className={'create-plan-wrapper-name'}>
                     You haven't added a tag yet.
                  </div>
               )}
            </div>
         </div>
         <div className={'create-plan-check-area'}>
            <div
               className={'create-plan-wrapper'}
               style={{ width: 'max-content' }}
            >
               <div className={'create-plan-wrapper-name'}>Plan Logo</div>
               <img
                  width={50}
                  src={!data.logoUrl ? defaultPlanLogo : data.logoUrl}
                  alt={'plan-logo'}
               />
            </div>
            <div
               className={'create-plan-wrapper'}
               style={{ width: 'max-content' }}
            >
               <div className={'create-plan-wrapper-name'}>Color</div>
               <Tooltip text={filteredColor[0]?.name} position={'bottom'}>
                  <div
                     className={'create-plan-theme-color'}
                     style={{ backgroundColor: data.color }}
                  />
               </Tooltip>
            </div>
         </div>
      </div>
   )
}

export default Check
