import { updateEmail as updateMail } from 'firebase/auth'
import { AuthInstance } from 'db/auth/index'
import toast from 'react-hot-toast'
import { edit } from 'store/reducers/user'
import errorMessages from 'db/config/error-messages'

async function updateEmail(email, dispatch) {
   try {
      await updateMail(AuthInstance.currentUser, email)
      toast.success('Your email has been updated.')
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
