import { signOut } from 'firebase/auth'
import toast from 'react-hot-toast'
import { AuthInstance } from './index'
import { change } from 'store/reducers/user'

async function Logout(navigate, dispatch) {
   try {
      await signOut(AuthInstance)

      toast.success('Your account has been logged out.')

      navigate('/')
      dispatch(change({}))
   } catch (e) {
      console.error(e)
   }
}

export default Logout
