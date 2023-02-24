import { updateProfile } from 'firebase/auth'
import { AuthInstance } from '../auth'
import toast from 'react-hot-toast'
import { edit } from 'store/reducer/user'

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
      console.error(e)
   }
}

export default updateName
