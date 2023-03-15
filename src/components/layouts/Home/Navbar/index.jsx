import './styles.scss'
import logo from 'assets/images/logo.svg'
import { useDispatch } from 'react-redux'
import { change } from 'store/reducers/modal'
import { useNavigate } from 'react-router-dom'

function Navbar() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleClick = () => {
      if (Object.keys(JSON.parse(localStorage.getItem('user'))).length !== 0) {
         navigate('/app')
         dispatch(
            change({
               component: 'auth-form',
               active: false,
            })
         )
         return
      }

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
