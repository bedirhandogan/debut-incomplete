import styles from 'components/independent/Loading/styles.module.css'

function Loading() {
   return (
      <div className={styles.loading}>
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

export default Loading
