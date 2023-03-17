import { doc, getDoc, getFirestore } from 'firebase/firestore'
import app from 'db/config'

const db = getFirestore(app)

async function getPlans(user) {
   const plansData = await getDoc(doc(db, 'plans', user.uid))
   return plansData.data()?.data
}

export default getPlans
