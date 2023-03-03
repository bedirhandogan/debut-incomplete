import './styles.scss'

function Loader() {
   return (
      <div className={'loader'}>
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
