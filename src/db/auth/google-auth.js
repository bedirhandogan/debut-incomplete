import {
   GoogleAuthProvider,
   signInWithPopup,
   getAdditionalUserInfo,
} from 'firebase/auth'
import toast from 'react-hot-toast'
import { AuthInstance } from './index'
import errorMessages from '../config/error-messages'
import createDocument from 'db/storage/create-document'

const provider = new GoogleAuthProvider()

async function GoogleAuth(navigate) {
   try {
      const result = await signInWithPopup(AuthInstance, provider)
      toast.success('Your account has been successfully logged in.', {
         position: 'top-right',
      })

      const { isNewUser } = getAdditionalUserInfo(result)

      if (isNewUser) {
         await createDocument(result.user)
         navigate('/app')
      }
   } catch (e) {
      errorMessages(e.code)
      console.error(e)
   }
}

export default GoogleAuth
