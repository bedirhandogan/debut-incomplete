import { initializeApp } from 'firebase/app'
import {
   getAuth,
   fetchSignInMethodsForEmail,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   GoogleAuthProvider,
   signInWithPopup,
} from 'firebase/auth'

import toast from 'react-hot-toast'

const provider = new GoogleAuthProvider()

const firebaseConfig = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_APP_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

async function Register(email, password, navigate) {
   try {
      await createUserWithEmailAndPassword(auth, email, password)
      toast.success('Your account has been created.', {
         position: 'top-right',
      })
      navigate('/app')
   } catch (e) {
      if (e.code === 'auth/weak-password')
         toast.error('Password should be at least 6 characters', {
            position: 'top-right',
         })
   }
}

async function Login(email, password, navigate) {
   try {
      await signInWithEmailAndPassword(auth, email, password)
      toast.success('Your account has been successfully logged in.', {
         position: 'top-right',
      })
      navigate('/app')
   } catch (e) {
      if (e.code === 'auth/wrong-password')
         toast.error('You entered an incorrect password, please correct it.', {
            position: 'top-right',
         })
   }
}

async function Auth(email, password, navigate) {
   const result = await fetchSignInMethodsForEmail(auth, email)

   if (result.length === 0) {
      Register(email, password, navigate)
      return
   }

   Login(email, password, navigate)
}

async function AuthGoogle(navigate) {
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

const Logout = (navigate) =>
   signOut(auth).then(() => {
      toast.success('Your account has been logged out.', {
         position: 'top-right',
      })
      navigate('/')
   })

export { Auth, AuthGoogle, Logout, auth }
