import styles from './styles.module.css'

function Loader() {
   return (
      <div className={styles.loader}>
         <div className={styles.wrapper}>
            <div className={styles.part} />
            <div className={styles.part} />
            <div className={styles.part} />
         </div>
         <div className={styles.wrapper}>
            <div className={styles.part} />
            <div className={styles.part} />
         </div>
      </div>
   )
}

export default Loader
