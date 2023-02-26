import styles from './styles.module.css'

function Button(props) {
   return (
      <button className={`${styles.button} ${styles[props.type]}`} {...props}>
         {props.children}
      </button>
   )
}

export default Button
