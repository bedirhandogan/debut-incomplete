import { createUserWithEmailAndPassword } from 'firebase/auth'
import toast from 'react-hot-toast'
import { AuthInstance } from './index'

async function Register(email, password, navigate) {
   try {
      await createUserWithEmailAndPassword(AuthInstance, email, password)
      toast.success('Your account has been created.', {
         position: 'top-right',
      })
      navigate('/app')
   } catch (e) {
      if (e.code === 'auth/weak-password')
         toast.error('Password should be at least 6 characters', {
            position: 'top-right',
         })
   }
}

export default Register
