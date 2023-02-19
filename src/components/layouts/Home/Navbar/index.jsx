import styles from './styles.module.css'
import logo from 'assets/images/logo.svg'
import { useDispatch } from 'react-redux'
import { change } from 'store/reducer/modal'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'api'

function Navbar() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleClick = () => {
      onAuthStateChanged(auth, (user) => {
         if (user !== null) {
            navigate('/app')

            return
         }

         dispatch(change(true))
      })
   }

   return (
      <div className={styles.navbar}>
         <div className={styles.body}>
            <img src={logo} alt={'logo'} />
            <div className={styles.navItem}>Untitled</div>
            <div className={styles.navItem}>Untitled</div>
            <div className={styles.navItem}>Untitled</div>
            <div className={styles.navItem}>Untitled</div>
            <div className={styles.openAppBtn} onClick={handleClick}>
               Open App
            </div>
         </div>
      </div>
   )
}

export default Navbar
