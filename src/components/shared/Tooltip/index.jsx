import styles from './styles.module.css'

function Tooltip({ children, text, position }) {
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
         <div className={`${styles.text} ${pos}`}>{text}</div>
      </div>
   )
}

export default Tooltip
