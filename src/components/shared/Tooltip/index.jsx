import './styles.scss'

function Tooltip({ children, text, position, style }) {
   const pos =
      position === 'top'
         ? 'tooltip-position-top'
         : position === 'bottom'
         ? 'tooltip-position-bottom'
         : position === 'left'
         ? 'tooltip-position-left'
         : position === 'right'
         ? 'tooltip-position-right'
         : ''

   return (
      <div className={'tooltip'}>
         {children}
         <div className={`tooltip-text ${pos}`} style={style}>
            {text}
         </div>
      </div>
   )
}

export default Tooltip
