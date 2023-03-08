import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import toast from 'react-hot-toast'
import { AuthInstance } from './index'
import errorMessages from '../config/error-messages'
import createDocument from 'db/storage/create-document'

const provider = new GoogleAuthProvider()

async function GoogleAuth(navigate) {
   try {
      const { user } = await signInWithPopup(AuthInstance, provider)
      toast.success('Your account has been successfully logged in.', {
         position: 'top-right',
      })

      await createDocument(user)
      navigate('/app')
   } catch (e) {
      errorMessages(e.code)
      console.error(e)
   }
}

export default GoogleAuth
