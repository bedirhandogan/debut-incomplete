import { signInWithEmailAndPassword } from 'firebase/auth'
import toast from 'react-hot-toast'
import { AuthInstance } from './index'
import errorMessages from '../config/error-messages'

async function Login(email, password, navigate) {
   try {
      await signInWithEmailAndPassword(AuthInstance, email, password)
      toast.success('Your account has been successfully logged in.', {
         position: 'top-right',
      })
      navigate('/app')
   } catch (e) {
      errorMessages(e.code)
   }
}

export default Login
