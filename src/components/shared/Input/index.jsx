import styles from './styles.module.css'

function Input({ children, type, placeholder }) {
   return (
      <div className={styles.search}>
         {children}
         <input type={type} placeholder={placeholder} />
      </div>
   )
}

export default Input
