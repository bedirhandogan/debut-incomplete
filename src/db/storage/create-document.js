import { doc, setDoc, getFirestore } from 'firebase/firestore'
import app from 'db/config'

const db = getFirestore(app)

async function createDocument(user) {
   await setDoc(doc(db, 'plans', user.uid), {
      data: [],
   })
}

export default createDocument
