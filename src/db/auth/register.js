import { createUserWithEmailAndPassword } from 'firebase/auth'
import toast from 'react-hot-toast'
import { AuthInstance } from './index'
import errorMessages from '../config/error-messages'
import createDocument from "db/storage/create-document";

async function Register(email, password, navigate) {
   try {
      const { user } = await createUserWithEmailAndPassword(AuthInstance, email, password)
      toast.success('Your account has been created.', {
         position: 'top-right',
      })

      await createDocument(user)
      navigate('/app')
   } catch (e) {
      errorMessages(e.code)
   }
}

export default Register
