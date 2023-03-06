import './styles.scss'
import PlanCard from 'components/shared/PlanCard'
import { IconFilter } from '@tabler/icons-react'

function Plans() {
   return (
      <div className={'plans'}>
         <div className={'plans-header'}>
            <div className={'plans-header-text'}>There is 1 plans</div>
            <div className={'plans-header-filter'}>
               <IconFilter
                  stroke={1.3}
                  width={20}
                  height={20}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Filter
            </div>
         </div>
         <PlanCard />
      </div>
   )
}

export default Plans
