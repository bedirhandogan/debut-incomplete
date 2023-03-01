import styles from './styles.module.css'

function ImageUpload({
   reference,
   handleInputFocus,
   handleUpload,
   children,
   style,
   label,
}) {
   return (
      <div
         className={styles.imageUpload}
         onClick={handleInputFocus}
         style={style}
      >
         {children}
         <div className={styles.imageHover}>{label}</div>
         <input type={'file'} ref={reference} onChange={handleUpload} />
      </div>
   )
}

export default ImageUpload
