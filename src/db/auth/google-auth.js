import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import toast from 'react-hot-toast'
import { AuthInstance } from './index'

const provider = new GoogleAuthProvider()

async function GoogleAuth(navigate) {
   try {
      await signInWithPopup(AuthInstance, provider)
      toast.success('Your account has been successfully logged in.', {
         position: 'top-right',
      })
      navigate('/app')
   } catch (e) {
      console.error(e)
   }
}

export default GoogleAuth
