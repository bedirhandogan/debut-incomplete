import styles from './styles.module.css'

function Input({ children, type, placeholder, style, className, onChange }) {
   return (
      <div className={`${styles.input} ${className}`}>
         {children}
         <input
            type={type}
            placeholder={placeholder}
            style={style}
            onChange={onChange}
         />
      </div>
   )
}

export default Input
