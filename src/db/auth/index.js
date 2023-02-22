import {
   fetchSignInMethodsForEmail,
   getAuth,
   GoogleAuthProvider,
   signInWithPopup,
   signOut,
} from 'firebase/auth'
import Login from './login'
import Register from './register'
import app from '../config'
import toast from 'react-hot-toast'

export const auth = getAuth(app)

async function Auth(email, password, navigate) {
   const result = await fetchSignInMethodsForEmail(auth, email)

   if (result.length === 0) {
      Register(email, password, navigate)
      return
   }

   Login(email, password, navigate)
}

const provider = new GoogleAuthProvider()

export async function AuthGoogle(navigate) {
   try {
      await signInWithPopup(auth, provider)
      toast.success('Your account has been successfully logged in.', {
         position: 'top-right',
      })
      navigate('/app')
   } catch (e) {
      console.error(e)
   }
}

export async function Logout(navigate) {
   await signOut(auth)
   toast.success('Your account has been logged out.', {
      position: 'top-right',
   })
   navigate('/')
}

export default Auth
