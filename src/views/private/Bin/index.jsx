import './styles.scss'
import { useSelector } from 'react-redux'
import PlanCard from 'components/shared/PlanCard'
import Button from 'components/shared/Button'
import { IconArrowBackUp } from '@tabler/icons-react'

function Bin() {
   const bin = useSelector((state) => state.bin.data)

   return (
      <div className={'bin'}>
         <div className={'bin-header'}>
            <div className={'bin-header-text'}>
               There is {bin?.length} deleted plan
            </div>
            <Button
               style={{
                  width: 'max-content',
                  padding: '0 15px 0 10px',
               }}
               type={'fourth'}
            >
               <IconArrowBackUp
                  stroke={1.3}
                  width={20}
                  height={20}
                  style={{ color: 'var(--icon-color-primary)' }}
               />
               Undo All
            </Button>
         </div>
         <div className={'bin-grid'}>
            {bin?.map((v) => (
               <PlanCard key={v.id} data={v} type={'bin'} />
            ))}
         </div>
      </div>
   )
}

export default Bin
