import styles from './styles.module.css'

function Input({
   children,
   type,
   placeholder,
   style,
   className,
   onChange,
   disabled = false,
}) {
   return (
      <div className={`${styles.input} ${className}`}>
         {children}
         <input
            type={type}
            placeholder={placeholder}
            style={style}
            onChange={onChange}
            disabled={disabled}
         />
      </div>
   )
}

export default Input
