import { updateEmail as updateMail } from 'firebase/auth'
import { AuthInstance } from '../auth'
import toast from 'react-hot-toast'
import { edit } from 'store/reducer/user'
import errorMessages from '../config/error-messages'

async function updateEmail(email, dispatch) {
   try {
      await updateMail(AuthInstance.currentUser, email)
      toast.success('Your email has been updated.', {
         position: 'top-right',
      })
      dispatch(
         edit({
            email: email,
         })
      )
   } catch (e) {
      errorMessages(e.code)
      console.error(e)
   }
}

export default updateEmail
