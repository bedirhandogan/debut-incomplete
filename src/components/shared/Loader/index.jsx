import './styles.scss'
import { useSelector } from 'react-redux'

function Loader() {
   const { show } = useSelector((state) => state.loader)

   return (
      <div
         className={'loader'}
         style={{
            display: show ? 'flex' : 'none',
         }}
      >
         <div className={'loader-section'}>
            <div className={'loader-section-item'} />
            <div className={'loader-section-item'} />
            <div className={'loader-section-item'} />
         </div>
         <div className={'loader-section'}>
            <div className={'loader-section-item'} />
            <div className={'loader-section-item'} />
         </div>
      </div>
   )
}

export default Loader
