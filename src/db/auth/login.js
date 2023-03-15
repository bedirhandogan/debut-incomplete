import { signInWithEmailAndPassword } from 'firebase/auth'
import toast from 'react-hot-toast'
import { AuthInstance } from './index'
import errorMessages from '../config/error-messages'
import handleUser from 'utils/handle/user'
import { change } from 'store/reducers/user'

async function Login(email, password, navigate, dispatch) {
   try {
      const result = await signInWithEmailAndPassword(
         AuthInstance,
         email,
         password
      )
      const user = handleUser(result.user)

      toast.success('Your account has been successfully logged in.', {
         position: 'top-right',
      })

      dispatch(change(user))
      navigate('/app')
   } catch (e) {
      errorMessages(e.code)
   }
}

export default Login
