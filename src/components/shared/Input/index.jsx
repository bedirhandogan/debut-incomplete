import styles from './styles.module.css'

function Input({ children, type, placeholder, style }) {
   return (
      <div className={styles.search}>
         {children}
         <input type={type} placeholder={placeholder} style={style} />
      </div>
   )
}

export default Input
