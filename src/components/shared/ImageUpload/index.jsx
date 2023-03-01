import styles from './styles.module.css'

function ImageUpload({ reference, handleInputFocus, handleUpload, children }) {
   return (
      <div className={styles.imageUpload} onClick={handleInputFocus}>
         {children}
         <div className={styles.pictureHover}>Upload a photo</div>
         <input type={'file'} ref={reference} onChange={handleUpload} />
      </div>
   )
}

export default ImageUpload
