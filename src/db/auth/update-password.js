import { updatePassword as _updatePassword } from 'firebase/auth'
import { AuthInstance } from 'db/auth/index'
import errorMessages from 'db/config/error-messages'
import toast from 'react-hot-toast'

async function updatePassword(password) {
   try {
      await _updatePassword(AuthInstance.currentUser, password)
      toast.success('Your password has been changed.', {
         position: 'top-right',
      })
   } catch (e) {
      errorMessages(e.code)
      console.error(e)
   }
}

export default updatePassword
