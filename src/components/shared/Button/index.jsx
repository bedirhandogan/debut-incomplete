import styles from './styles.module.css'

function Button(props) {
   return (
      <button
         className={`${styles.button} ${
            props.color === 'red'
               ? styles.red
               : props.color === 'blue'
               ? styles.blue
               : null
         }`}
         {...props}
      >
         {props.children}
      </button>
   )
}

export default Button
