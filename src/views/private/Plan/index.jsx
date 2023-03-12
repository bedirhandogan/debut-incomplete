import './styles.scss'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import prettyMs from 'pretty-ms'
import months from 'constants/months'
import { IconBookmark, IconDots } from '@tabler/icons-react'
import Members from 'components/shared/Members'
import Tags from 'components/shared/Tags'

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
            <div className={'plan-header-section'}>
               <div className={'plan-header-title'}>{data.title}</div>
               <Tags data={data} />
               <div className={'plan-header-options'}>
                  <div className={'plan-header-option'}>
                     <IconBookmark
                        stroke={1.3}
                        width={22}
                        height={22}
                        style={{ color: 'var(--icon-color-primary)' }}
                     />
                  </div>
                  <div className={'plan-header-option'}>
                     <IconDots
                        stroke={1.3}
                        width={22}
                        height={22}
                        style={{ color: 'var(--icon-color-primary)' }}
                     />
                  </div>
               </div>
            </div>
            <div className={'plan-header-section'}>
               <div className={'plan-header-description'}>
                  {data.description}
               </div>
            </div>
            <div className={'plan-header-section'}>
               <div className={'plan-header-detail'}>
                  <div className={'plan-header-label'}>Created</div>
                  <div className={'plan-header-date'}>
                     {formattedCreateDate}
                  </div>
               </div>
               <div className={'plan-header-detail'}>
                  <div className={'plan-header-label'}>Updated</div>
                  <div className={'plan-header-date'}>
                     {formattedUpdateDate}
                  </div>
               </div>
               <div className={'plan-header-detail'}>
                  <div className={'plan-header-label'}>Members</div>
                  <Members />
               </div>
               <div className={'plan-header-button'}>+ Add Member</div>
            </div>
         </div>
      </div>
   )
}

export default Plan
