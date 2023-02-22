import styles from './styles.module.css'

function Input({ children, type, placeholder, style, className }) {
   return (
      <div className={`${styles.input} ${className}`}>
         {children}
         <input type={type} placeholder={placeholder} style={style} />
      </div>
   )
}

export default Input
