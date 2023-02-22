import { signInWithEmailAndPassword } from 'firebase/auth'
import toast from 'react-hot-toast'
import { auth } from './index'

async function Login(email, password, navigate) {
   try {
      await signInWithEmailAndPassword(auth, email, password)
      toast.success('Your account has been successfully logged in.', {
         position: 'top-right',
      })
      navigate('/app')
   } catch (e) {
      if (e.code === 'auth/wrong-password')
         toast.error('You entered an incorrect password, please correct it.', {
            position: 'top-right',
         })
   }
}

export default Login
