import styles from './styles.module.css'
import logo from 'assets/images/logo.svg'

function Navbar() {
   return (
      <div className={styles.navbar}>
         <div className={styles.body}>
            <img src={logo} alt={'logo'} />
            <div className={styles.navItem}>Untitled</div>
            <div className={styles.navItem}>Untitled</div>
            <div className={styles.navItem}>Untitled</div>
            <div className={styles.navItem}>Untitled</div>
            <div className={styles.openAppBtn}>Open App</div>
         </div>
      </div>
   )
}

export default Navbar
