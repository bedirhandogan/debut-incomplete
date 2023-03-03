import './styles.scss'
import logo from 'assets/images/logo.svg'
import { useDispatch } from 'react-redux'
import { change } from 'store/reducers/modal'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { AuthInstance } from 'db/auth'

function Navbar() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleClick = () => {
      onAuthStateChanged(AuthInstance, (user) => {
         if (user !== null) {
            navigate('/app')
            dispatch(
               change({
                  component: 'auth-form',
                  active: false,
               })
            )
         }
      })

      dispatch(
         change({
            component: 'auth-form',
            active: true,
         })
      )
   }

   return (
      <div className={'navbar'}>
         <img src={logo} alt={'logo'} id={'navbar-logo'} />
         <div className={'navbar-navigations'}>
            <div className={'navbar-navigations-item'}>Untitled</div>
            <div className={'navbar-navigations-item'}>Untitled</div>
            <div className={'navbar-navigations-item'}>Untitled</div>
            <div className={'navbar-navigations-item'}>Untitled</div>
         </div>
         <div className={'navbar-trigger-auth-form'} onClick={handleClick}>
            Open App
         </div>
      </div>
   )
}

export default Navbar
