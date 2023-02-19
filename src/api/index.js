import { initializeApp } from 'firebase/app'
import {
   getAuth,
   fetchSignInMethodsForEmail,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
} from 'firebase/auth'
import toast from 'react-hot-toast'

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

function Register(email, password) {
   createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
         toast.success('Your account has been created.', {
            position: 'top-right',
         })
      })
      .catch((e) => {
         if (e.code === 'auth/weak-password')
            toast.error('Password should be at least 6 characters', {
               position: 'top-right',
            })
      })
}

function Login(email, password) {
   signInWithEmailAndPassword(auth, email, password)
      .then((credential) => {
         toast.success('Your account has been successfully logged in.', {
            position: 'top-right',
         })
      })
      .catch((e) => {
         if (e.code === 'auth/wrong-password')
            toast.error(
               'You entered an incorrect password, please correct it.',
               {
                  position: 'top-right',
               }
            )
      })
}

function Auth(email, password) {
   fetchSignInMethodsForEmail(auth, email)
      .then((result) => {
         if (result.length === 0) {
            Register(email, password)
            return
         }

         Login(email, password)
      })
      .catch((e) => console.error(e))
}

export { Auth }
