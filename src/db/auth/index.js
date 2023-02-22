import { fetchSignInMethodsForEmail, getAuth } from 'firebase/auth'
import app from '../config'
import Login from './login'
import Register from './register'
import GoogleAuth from './google-auth'
import Logout from './logout'

const AuthInstance = getAuth(app)

async function Auth(email, password, navigate) {
   const result = await fetchSignInMethodsForEmail(AuthInstance, email)

   if (result.length === 0) {
      Register(email, password, navigate)
      return
   }

   Login(email, password, navigate)
}

export { GoogleAuth, Logout, AuthInstance }
export default Auth
