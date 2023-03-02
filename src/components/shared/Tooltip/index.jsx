import styles from './styles.module.css'

function Tooltip({ children, text, position, style }) {
   const pos =
      position === 'top'
         ? styles.top
         : position === 'bottom'
         ? styles.bottom
         : position === 'left'
         ? styles.left
         : position === 'right'
         ? styles.right
         : null
   return (
      <div className={styles.tooltip}>
         {children}
         <div className={`${styles.text} ${pos}`} style={style}>{text}</div>
      </div>
   )
}

export default Tooltip
