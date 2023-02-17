import styles from './styles.module.css'

function Button({ children, style, color }) {
   return (
      <div
         className={`${styles.button} ${color === 'red' ? styles.red : null}`}
         style={style}
      >
         {children}
      </div>
   )
}

export default Button
