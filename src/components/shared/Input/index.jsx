import styles from './styles.module.css'

function Input({
   children,
   type,
   placeholder,
   style,
   className,
   onChange,
   onKeyPress,
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
            onKeyPress={onKeyPress}
         />
      </div>
   )
}

export default Input
