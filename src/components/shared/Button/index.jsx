import styles from './styles.module.css'

function Button({ children, style, color, onClick, id }) {
   return (
      <button
         className={`${styles.button} ${color === 'red' ? styles.red : null}`}
         style={style}
         onClick={onClick}
         id={id}
      >
         {children}
      </button>
   )
}

export default Button
