import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import toast from 'react-hot-toast'
import { AuthInstance } from './index'
import errorMessages from '../config/error-messages'

const provider = new GoogleAuthProvider()

async function GoogleAuth(navigate) {
   try {
      await signInWithPopup(AuthInstance, provider)
      toast.success('Your account has been successfully logged in.', {
         position: 'top-right',
      })
      navigate('/app')
   } catch (e) {
      errorMessages(e.code)
      console.error(e)
   }
}

export default GoogleAuth
