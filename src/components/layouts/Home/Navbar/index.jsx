import styles from './styles.module.css'
import logo from 'assets/images/logo.svg'
import { useDispatch } from 'react-redux'
import { change } from 'store/reducer/modal'

function Navbar() {
   const dispatch = useDispatch()

   return (
      <div className={styles.navbar}>
         <div className={styles.body}>
            <img src={logo} alt={'logo'} />
            <div className={styles.navItem}>Untitled</div>
            <div className={styles.navItem}>Untitled</div>
            <div className={styles.navItem}>Untitled</div>
            <div className={styles.navItem}>Untitled</div>
            <div
               className={styles.openAppBtn}
               onClick={() => dispatch(change(true))}
            >
               Open App
            </div>
         </div>
      </div>
   )
}

export default Navbar
