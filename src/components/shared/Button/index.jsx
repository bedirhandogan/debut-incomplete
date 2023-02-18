import styles from './styles.module.css'

function Button({ children, style, color, onClick }) {
   return (
      <button
         className={`${styles.button} ${color === 'red' ? styles.red : null}`}
         style={style}
         onClick={onClick}
      >
         {children}
      </button>
   )
}

export default Button
