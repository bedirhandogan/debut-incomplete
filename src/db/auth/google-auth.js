import {
   GoogleAuthProvider,
   signInWithPopup,
   getAdditionalUserInfo,
} from 'firebase/auth'
import toast from 'react-hot-toast'
import { AuthInstance } from './index'
import errorMessages from '../config/error-messages'
import createDocument from 'db/storage/create-document'
import handleUser from 'utils/handle/user'
import { change } from 'store/reducers/user'

const provider = new GoogleAuthProvider()

async function GoogleAuth(navigate, dispatch) {
   try {
      const result = await signInWithPopup(AuthInstance, provider)
      const { isNewUser } = getAdditionalUserInfo(result)
      const user = handleUser(result.user)

      toast.success('Your account has been successfully logged in.', {
         position: 'top-right',
      })

      if (isNewUser) {
         await createDocument(result.user)
      }

      dispatch(change(user))
      navigate('/app')
   } catch (e) {
      errorMessages(e.code)
      console.error(e)
   }
}

export default GoogleAuth
