import { doc, getDoc, getFirestore } from 'firebase/firestore'
import app from 'db/config'

const db = getFirestore(app)

async function getBin(user) {
   const binData = await getDoc(doc(db, 'bin', user.uid))
   return binData.data()?.data
}

export default getBin
