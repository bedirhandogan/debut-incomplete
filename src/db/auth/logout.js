import { signOut } from 'firebase/auth'
import toast from 'react-hot-toast'
import { AuthInstance } from './index'

async function Logout(navigate) {
   await signOut(AuthInstance)
   toast.success('Your account has been logged out.', {
      position: 'top-right',
   })
   navigate('/')
}

export default Logout
