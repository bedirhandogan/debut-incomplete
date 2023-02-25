import { updateProfile } from 'firebase/auth'
import { AuthInstance } from '../auth'
import toast from 'react-hot-toast'
import { edit } from 'store/reducer/user'
import errorMessages from '../config/error-messages'

async function updateName(name, dispatch) {
   try {
      await updateProfile(AuthInstance.currentUser, {
         displayName: name,
      })
      toast.success('Your name has been updated.', {
         position: 'top-right',
      })
      dispatch(edit({ displayName: name }))
   } catch (e) {
      errorMessages(e.code)
      console.error(e)
   }
}

export default updateName
