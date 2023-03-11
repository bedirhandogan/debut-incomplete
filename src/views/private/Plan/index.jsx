import './styles.scss'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Members from 'components/shared/Members'
import Tags from 'components/shared/Tags'
import prettyMs from 'pretty-ms'
import months from 'constants/months'
import Tooltip from 'components/shared/Tooltip'

function Plan() {
   const { id } = useParams()
   const plans = useSelector((state) => state.plans.data)

   const data = plans?.find((v) => v.id === id) || {}

   const createdDate = new Date(data.date?.createdAt)
   const [year, month, day] = [
      createdDate.getFullYear(),
      createdDate.getMonth(),
      createdDate.getDay(),
   ]

   const formattedUpdateDate = prettyMs(
      new Date().getTime() - data.date?.updatedAt || 0,
      {
         compact: true,
         verbose: true,
      }
   )

   const formattedCreateDate = `${day} ${months[month]} ${year}`

   return (
      <div className={'plan'}>
         <div className={'plan-header'}>
            <div className={'plan-header-area'}>
               <div className={'plan-header-title'}>{data.title}</div>
               <div className={'plan-header-dates'}>
                  <Tooltip position={'bottom'} text={'Created'}>
                     <div className={'plan-header-date-result'}>
                        {formattedCreateDate}
                     </div>
                  </Tooltip>
                  <Tooltip position={'bottom'} text={'Updated'}>
                     <div className={'plan-header-date-result'}>
                        {formattedUpdateDate}
                     </div>
                  </Tooltip>
               </div>
            </div>
            <div className={'plan-header-area'}>
               <div className={'plan-header-description'}>
                  {data.description}
               </div>
            </div>
            <div className={'plan-header-area'}>
               <Tags data={data} />
               <Members />
            </div>
         </div>
      </div>
   )
}

export default Plan
