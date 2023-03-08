import { doc, getDoc, getFirestore } from 'firebase/firestore'
import app from 'db/config'

const db = getFirestore(app)

async function getPlans(user) {
   const userData = await getDoc(doc(db, 'users', user.uid))
   return userData.data()?.plans
}

export default getPlans
